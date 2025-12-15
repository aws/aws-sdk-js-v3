// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TestDNSAnswerRequest, TestDNSAnswerResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { TestDNSAnswer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // TestDNSAnswerRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   RecordName: "STRING_VALUE", // required
 *   RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 *   ResolverIP: "STRING_VALUE",
 *   EDNS0ClientSubnetIP: "STRING_VALUE",
 *   EDNS0ClientSubnetMask: "STRING_VALUE",
 * };
 * const command = new TestDNSAnswerCommand(input);
 * const response = await client.send(command);
 * // { // TestDNSAnswerResponse
 * //   Nameserver: "STRING_VALUE", // required
 * //   RecordName: "STRING_VALUE", // required
 * //   RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
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
 *
 * @public
 */
export class TestDNSAnswerCommand extends $Command
  .classBuilder<
    TestDNSAnswerCommandInput,
    TestDNSAnswerCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "TestDNSAnswer", {})
  .n("Route53Client", "TestDNSAnswerCommand")
  .sc(TestDNSAnswer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestDNSAnswerRequest;
      output: TestDNSAnswerResponse;
    };
    sdk: {
      input: TestDNSAnswerCommandInput;
      output: TestDNSAnswerCommandOutput;
    };
  };
}
