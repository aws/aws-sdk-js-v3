import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DescribeSecurityPolicyRequest, DescribeSecurityPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSecurityPolicyCommand,
  serializeAws_json1_1DescribeSecurityPolicyCommand,
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

export type DescribeSecurityPolicyCommandInput = DescribeSecurityPolicyRequest;
export type DescribeSecurityPolicyCommandOutput = DescribeSecurityPolicyResponse & __MetadataBearer;

/**
 * <p>Describes the security policy that is attached to your file transfer protocol-enabled
 *       server. The response contains a description of the security policy's properties. For more
 *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies</a>.</p>
 */
export class DescribeSecurityPolicyCommand extends $Command<
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSecurityPolicyCommandInput) {
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
  ): Handler<DescribeSecurityPolicyCommandInput, DescribeSecurityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeSecurityPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSecurityPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSecurityPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSecurityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSecurityPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSecurityPolicyCommandOutput> {
    return deserializeAws_json1_1DescribeSecurityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
