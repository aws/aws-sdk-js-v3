import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { TestDNSAnswerRequest, TestDNSAnswerResponse } from "../models/models_0";
import {
  deserializeAws_restXmlTestDNSAnswerCommand,
  serializeAws_restXmlTestDNSAnswerCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export interface TestDNSAnswerCommandInput extends TestDNSAnswerRequest {}
export interface TestDNSAnswerCommandOutput extends TestDNSAnswerResponse, __MetadataBearer {}

/**
 * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify
 * 			the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
 * 		       <p>This call only supports querying public hosted zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, TestDNSAnswerCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, TestDNSAnswerCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new TestDNSAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestDNSAnswerCommandInput} for command's `input` shape.
 * @see {@link TestDNSAnswerCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestDNSAnswerCommand extends $Command<
  TestDNSAnswerCommandInput,
  TestDNSAnswerCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestDNSAnswerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "TestDNSAnswerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestDNSAnswerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestDNSAnswerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestDNSAnswerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlTestDNSAnswerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestDNSAnswerCommandOutput> {
    return deserializeAws_restXmlTestDNSAnswerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
