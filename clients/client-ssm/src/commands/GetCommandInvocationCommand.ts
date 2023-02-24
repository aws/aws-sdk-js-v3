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
  GetCommandInvocationRequest,
  GetCommandInvocationRequestFilterSensitiveLog,
  GetCommandInvocationResult,
  GetCommandInvocationResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetCommandInvocationCommand,
  serializeAws_json1_1GetCommandInvocationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetCommandInvocationCommandInput extends GetCommandInvocationRequest {}
export interface GetCommandInvocationCommandOutput extends GetCommandInvocationResult, __MetadataBearer {}

/**
 * <p>Returns detailed information about command execution for an invocation or plugin.</p>
 *          <p>
 *             <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document.
 *    To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes,
 *    use <a>ListCommands</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCommandInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCommandInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCommandInvocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommandInvocationCommandInput} for command's `input` shape.
 * @see {@link GetCommandInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetCommandInvocationCommand extends $Command<
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: GetCommandInvocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCommandInvocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetCommandInvocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCommandInvocationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCommandInvocationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCommandInvocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCommandInvocationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCommandInvocationCommandOutput> {
    return deserializeAws_json1_1GetCommandInvocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
