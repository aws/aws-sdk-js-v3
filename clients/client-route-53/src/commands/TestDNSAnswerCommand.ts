// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { TestDNSAnswerRequest, TestDNSAnswerResponse } from "../models/models_0";
import { de_TestDNSAnswerCommand, se_TestDNSAnswerCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestDNSAnswerCommand}.
 */
export interface TestDNSAnswerCommandInput extends TestDNSAnswerRequest {}
/**
 * @public
 *
 * The output of {@link TestDNSAnswerCommand}.
 */
export interface TestDNSAnswerCommandOutput extends TestDNSAnswerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a
 * 			specified record name and type. You can optionally specify the IP address of a DNS
 * 			resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
 *          <p>This call only supports querying public hosted zones.</p>
 *          <note>
 *             <p>The <code>TestDnsAnswer </code> returns information similar to what you would expect from the answer
 * 			section of the <code>dig</code> command. Therefore, if you query for the name
 * 			servers of a subdomain that point to the parent name servers, those will not be
 * 			returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, TestDNSAnswerCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, TestDNSAnswerCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // TestDNSAnswerRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   RecordName: "STRING_VALUE", // required
 *   RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 *   ResolverIP: "STRING_VALUE",
 *   EDNS0ClientSubnetIP: "STRING_VALUE",
 *   EDNS0ClientSubnetMask: "STRING_VALUE",
 * };
 * const command = new TestDNSAnswerCommand(input);
 * const response = await client.send(command);
 * // { // TestDNSAnswerResponse
 * //   Nameserver: "STRING_VALUE", // required
 * //   RecordName: "STRING_VALUE", // required
 * //   RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //   RecordData: [ // RecordData // required
 * //     "STRING_VALUE",
 * //   ],
 * //   ResponseCode: "STRING_VALUE", // required
 * //   Protocol: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TestDNSAnswerCommandInput - {@link TestDNSAnswerCommandInput}
 * @returns {@link TestDNSAnswerCommandOutput}
 * @see {@link TestDNSAnswerCommandInput} for command's `input` shape.
 * @see {@link TestDNSAnswerCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class TestDNSAnswerCommand extends $Command<
  TestDNSAnswerCommandInput,
  TestDNSAnswerCommandOutput,
  Route53ClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, TestDNSAnswerCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "TestDNSAnswerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "TestDNSAnswer",
      },
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
  private serialize(input: TestDNSAnswerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestDNSAnswerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestDNSAnswerCommandOutput> {
    return de_TestDNSAnswerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
