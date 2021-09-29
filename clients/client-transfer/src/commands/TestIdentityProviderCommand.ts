import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { TestIdentityProviderRequest, TestIdentityProviderResponse } from "../models/models_0";
import {
  deserializeAws_json1_1TestIdentityProviderCommand,
  serializeAws_json1_1TestIdentityProviderCommand,
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

export interface TestIdentityProviderCommandInput extends TestIdentityProviderRequest {}
export interface TestIdentityProviderCommandOutput extends TestIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
 *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
 *       provider is set up successfully. We highly recommend that you call this operation to test your
 *       authentication method as soon as you create your server. By doing so, you can troubleshoot
 *       issues with the identity provider integration to ensure that your users can successfully use
 *       the service.</p>
 *          <p>
 *       The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional.
 *     </p>
 *          <note>
 *             <p>
 *         You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>.
 *       </p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>
 *         If you provide any incorrect values for any parameters, the <code>Response</code> field is empty.
 *       </p>
 *             </li>
 *             <li>
 *                <p>
 *         If you provide a server ID for a server that uses service-managed users, you get an error:
 *       </p>
 *                <p>
 *                   <code>
 *         An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth
 *       </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *           If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error:
 *         </p>
 *                <p>
 *                   <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestIdentityProviderCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, TestIdentityProviderCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new TestIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link TestIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestIdentityProviderCommand extends $Command<
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestIdentityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "TestIdentityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestIdentityProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestIdentityProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestIdentityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestIdentityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestIdentityProviderCommandOutput> {
    return deserializeAws_json1_1TestIdentityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
