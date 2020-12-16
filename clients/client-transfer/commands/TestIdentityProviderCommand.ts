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

export type TestIdentityProviderCommandInput = TestIdentityProviderRequest;
export type TestIdentityProviderCommandOutput = TestIdentityProviderResponse & __MetadataBearer;

/**
 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
 *         <code>API_Gateway</code>, tests whether your API Gateway is set up successfully. We highly
 *       recommend that you call this operation to test your authentication method as soon as you
 *       create your server. By doing so, you can troubleshoot issues with the API Gateway integration
 *       to ensure that your users can successfully use the service.</p>
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
