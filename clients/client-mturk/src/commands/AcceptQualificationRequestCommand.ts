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
  AcceptQualificationRequestRequest,
  AcceptQualificationRequestRequestFilterSensitiveLog,
  AcceptQualificationRequestResponse,
  AcceptQualificationRequestResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1AcceptQualificationRequestCommand,
  serializeAws_json1_1AcceptQualificationRequestCommand,
} from "../protocols/Aws_json1_1";

export interface AcceptQualificationRequestCommandInput extends AcceptQualificationRequestRequest {}
export interface AcceptQualificationRequestCommandOutput extends AcceptQualificationRequestResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AcceptQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AcceptQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new AcceptQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class AcceptQualificationRequestCommand extends $Command<
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
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

  constructor(readonly input: AcceptQualificationRequestCommandInput) {
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
  ): Handler<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptQualificationRequestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "AcceptQualificationRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptQualificationRequestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptQualificationRequestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptQualificationRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptQualificationRequestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptQualificationRequestCommandOutput> {
    return deserializeAws_json1_1AcceptQualificationRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
