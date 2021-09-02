import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRemediationExceptionsRequest, DescribeRemediationExceptionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRemediationExceptionsCommand,
  serializeAws_json1_1DescribeRemediationExceptionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeRemediationExceptionsCommandInput extends DescribeRemediationExceptionsRequest {}
export interface DescribeRemediationExceptionsCommandOutput
  extends DescribeRemediationExceptionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted.
 * 			When you specify the limit and the next token, you receive a paginated response. </p>
 * 		       <note>
 *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 				Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response. </p>
 * 			         <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeRemediationExceptionsCommand extends $Command<
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRemediationExceptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRemediationExceptionsCommandInput, DescribeRemediationExceptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeRemediationExceptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRemediationExceptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRemediationExceptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRemediationExceptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRemediationExceptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRemediationExceptionsCommandOutput> {
    return deserializeAws_json1_1DescribeRemediationExceptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
