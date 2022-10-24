// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateHITReviewStatusRequest,
  UpdateHITReviewStatusRequestFilterSensitiveLog,
  UpdateHITReviewStatusResponse,
  UpdateHITReviewStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1UpdateHITReviewStatusCommand,
  serializeAws_json1_1UpdateHITReviewStatusCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateHITReviewStatusCommandInput extends UpdateHITReviewStatusRequest {}
export interface UpdateHITReviewStatusCommandOutput extends UpdateHITReviewStatusResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT.
 *             If the status is Reviewable, this operation can update the status to Reviewing,
 *             or it can revert a Reviewing HIT back to the Reviewable status.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITReviewStatusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITReviewStatusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateHITReviewStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHITReviewStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateHITReviewStatusCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class UpdateHITReviewStatusCommand extends $Command<
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: UpdateHITReviewStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHITReviewStatusCommandInput, UpdateHITReviewStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHITReviewStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateHITReviewStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHITReviewStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateHITReviewStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHITReviewStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHITReviewStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITReviewStatusCommandOutput> {
    return deserializeAws_json1_1UpdateHITReviewStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
