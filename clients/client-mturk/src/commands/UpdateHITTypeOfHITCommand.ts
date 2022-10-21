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
  UpdateHITTypeOfHITRequest,
  UpdateHITTypeOfHITRequestFilterSensitiveLog,
  UpdateHITTypeOfHITResponse,
  UpdateHITTypeOfHITResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1UpdateHITTypeOfHITCommand,
  serializeAws_json1_1UpdateHITTypeOfHITCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateHITTypeOfHITCommandInput extends UpdateHITTypeOfHITRequest {}
export interface UpdateHITTypeOfHITCommandOutput extends UpdateHITTypeOfHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>UpdateHITTypeOfHIT</code>
 *             operation allows you to change the HITType properties of a HIT. This
 *             operation disassociates the HIT from its old HITType properties and
 *             associates it with the new HITType properties. The HIT takes on the
 *             properties of the new HITType in place of the old ones.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITTypeOfHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITTypeOfHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateHITTypeOfHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHITTypeOfHITCommandInput} for command's `input` shape.
 * @see {@link UpdateHITTypeOfHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class UpdateHITTypeOfHITCommand extends $Command<
  UpdateHITTypeOfHITCommandInput,
  UpdateHITTypeOfHITCommandOutput,
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

  constructor(readonly input: UpdateHITTypeOfHITCommandInput) {
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
  ): Handler<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHITTypeOfHITCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateHITTypeOfHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHITTypeOfHITRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateHITTypeOfHITResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHITTypeOfHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHITTypeOfHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITTypeOfHITCommandOutput> {
    return deserializeAws_json1_1UpdateHITTypeOfHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
