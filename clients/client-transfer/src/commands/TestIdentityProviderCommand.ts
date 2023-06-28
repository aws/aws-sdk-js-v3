// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  TestIdentityProviderRequest,
  TestIdentityProviderRequestFilterSensitiveLog,
  TestIdentityProviderResponse,
} from "../models/models_0";
import { de_TestIdentityProviderCommand, se_TestIdentityProviderCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestIdentityProviderCommand}.
 */
export interface TestIdentityProviderCommandInput extends TestIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link TestIdentityProviderCommand}.
 */
export interface TestIdentityProviderCommandOutput extends TestIdentityProviderResponse, __MetadataBearer {}

/**
 * @public
 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
 *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
 *       provider is set up successfully. We highly recommend that you call this operation to test your
 *       authentication method as soon as you create your server. By doing so, you can troubleshoot
 *       issues with the identity provider integration to ensure that your users can successfully use
 *       the service.</p>
 *          <p>
 *       The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional.
 *     </p>
 *          <p>Note the following:</p>
 *          <ul>
 *             <li>
 *                <p> You cannot use <code>TestIdentityProvider</code> if the
 *           <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TestIdentityProvider</code> does not work with keys: it only accepts
 *           passwords.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TestIdentityProvider</code> can test the password operation for a custom Identity Provider that handles keys and passwords.</p>
 *             </li>
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
 *                   <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code>.
 *         </p>
 *                <p>It is possible your sever is in a different region. You can specify a region by adding the following: <code>--region region-code</code>,
 *           such as <code>--region us-east-2</code> to specify a server in <b>US East (Ohio)</b>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestIdentityProviderCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, TestIdentityProviderCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // TestIdentityProviderRequest
 *   ServerId: "STRING_VALUE", // required
 *   ServerProtocol: "SFTP" || "FTP" || "FTPS" || "AS2",
 *   SourceIp: "STRING_VALUE",
 *   UserName: "STRING_VALUE", // required
 *   UserPassword: "STRING_VALUE",
 * };
 * const command = new TestIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // TestIdentityProviderResponse
 * //   Response: "STRING_VALUE",
 * //   StatusCode: Number("int"), // required
 * //   Message: "STRING_VALUE",
 * //   Url: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TestIdentityProviderCommandInput - {@link TestIdentityProviderCommandInput}
 * @returns {@link TestIdentityProviderCommandOutput}
 * @see {@link TestIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link TestIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class TestIdentityProviderCommand extends $Command<
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
  TransferClientResolvedConfig
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestIdentityProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "TestIdentityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestIdentityProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: TestIdentityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestIdentityProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestIdentityProviderCommandOutput> {
    return de_TestIdentityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
