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
  PutRawMessageContentRequest,
  PutRawMessageContentRequestFilterSensitiveLog,
  PutRawMessageContentResponse,
  PutRawMessageContentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutRawMessageContentCommand,
  serializeAws_restJson1PutRawMessageContentCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailMessageFlowClientResolvedConfig,
} from "../WorkMailMessageFlowClient";

export interface PutRawMessageContentCommandInput extends PutRawMessageContentRequest {}
export interface PutRawMessageContentCommandOutput extends PutRawMessageContentResponse, __MetadataBearer {}

/**
 * <p>Updates the raw content of an in-transit email message, in MIME format.</p>
 *          <p>This example describes how to update in-transit email message. For more information and examples for using this API, see
 *       <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *         Updating message content with AWS Lambda</a>.</p>
 *
 *
 *          <note>
 *             <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function
 *       configured with a  synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules">
 *         Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged,
 *       even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated
 *         message.
 *     </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, PutRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, PutRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const command = new PutRawMessageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link PutRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for WorkMailMessageFlowClient's `config` shape.
 *
 */
export class PutRawMessageContentCommand extends $Command<
  PutRawMessageContentCommandInput,
  PutRawMessageContentCommandOutput,
  WorkMailMessageFlowClientResolvedConfig
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

  constructor(readonly input: PutRawMessageContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailMessageFlowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRawMessageContentCommandInput, PutRawMessageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRawMessageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailMessageFlowClient";
    const commandName = "PutRawMessageContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRawMessageContentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRawMessageContentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRawMessageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRawMessageContentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRawMessageContentCommandOutput> {
    return deserializeAws_restJson1PutRawMessageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
