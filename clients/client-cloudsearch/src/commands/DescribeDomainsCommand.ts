// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDomainsRequest, DescribeDomainsResponse } from "../models/models_0";
import { DescribeDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a `matchall` request to your domain's search endpoint: `q=matchall&q.parser=structured&size=0`. For more information, see [Getting Information about a Search Domain](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html) in the *Amazon CloudSearch Developer Guide*.
 *
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
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DescribeDomainsCommand extends command<DescribeDomainsCommandInput, DescribeDomainsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDomains",
  DescribeDomains$
) {
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
