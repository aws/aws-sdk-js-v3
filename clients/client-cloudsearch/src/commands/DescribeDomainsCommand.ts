// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDomainsRequest, DescribeDomainsResponse } from "../models/models_0";
import { DescribeDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainsCommand}.
 */
export interface DescribeDomainsCommandInput extends DescribeDomainsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainsCommand}.
 */
export interface DescribeDomainsCommandOutput extends DescribeDomainsResponse, __MetadataBearer {}

/**
 * <p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
 *       all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;q.parser=structured&amp;size=0</code>. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeDomainsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeDomainsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeDomainsRequest
 *   DomainNames: [ // DomainNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainsResponse
 * //   DomainStatusList: [ // DomainStatusList // required
 * //     { // DomainStatus
 * //       DomainId: "STRING_VALUE", // required
 * //       DomainName: "STRING_VALUE", // required
 * //       ARN: "STRING_VALUE",
 * //       Created: true || false,
 * //       Deleted: true || false,
 * //       DocService: { // ServiceEndpoint
 * //         Endpoint: "STRING_VALUE",
 * //       },
 * //       SearchService: {
 * //         Endpoint: "STRING_VALUE",
 * //       },
 * //       RequiresIndexDocuments: true || false, // required
 * //       Processing: true || false,
 * //       SearchInstanceType: "STRING_VALUE",
 * //       SearchPartitionCount: Number("int"),
 * //       SearchInstanceCount: Number("int"),
 * //       Limits: { // Limits
 * //         MaximumReplicationCount: Number("int"), // required
 * //         MaximumPartitionCount: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDomainsCommandInput - {@link DescribeDomainsCommandInput}
 * @returns {@link DescribeDomainsCommandOutput}
 * @see {@link DescribeDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class DescribeDomainsCommand extends $Command
  .classBuilder<
    DescribeDomainsCommandInput,
    DescribeDomainsCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "DescribeDomains", {})
  .n("CloudSearchClient", "DescribeDomainsCommand")
  .sc(DescribeDomains$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainsRequest;
      output: DescribeDomainsResponse;
    };
    sdk: {
      input: DescribeDomainsCommandInput;
      output: DescribeDomainsCommandOutput;
    };
  };
}
