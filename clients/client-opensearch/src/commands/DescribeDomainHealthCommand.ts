// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDomainHealthRequest, DescribeDomainHealthResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeDomainHealthCommand, se_DescribeDomainHealthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainHealthCommand}.
 */
export interface DescribeDomainHealthCommandInput extends DescribeDomainHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainHealthCommand}.
 */
export interface DescribeDomainHealthCommandOutput extends DescribeDomainHealthResponse, __MetadataBearer {}

/**
 * <p>Returns information about domain and node health, the standby Availability Zone, number of
 *    nodes per Availability Zone, and shard count per node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainHealthCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainHealthCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainHealthRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainHealthResponse
 * //   DomainState: "Active" || "Processing" || "NotAvailable",
 * //   AvailabilityZoneCount: "STRING_VALUE",
 * //   ActiveAvailabilityZoneCount: "STRING_VALUE",
 * //   StandByAvailabilityZoneCount: "STRING_VALUE",
 * //   DataNodeCount: "STRING_VALUE",
 * //   DedicatedMaster: true || false,
 * //   MasterEligibleNodeCount: "STRING_VALUE",
 * //   WarmNodeCount: "STRING_VALUE",
 * //   MasterNode: "Available" || "UnAvailable",
 * //   ClusterHealth: "Red" || "Yellow" || "Green" || "NotAvailable",
 * //   TotalShards: "STRING_VALUE",
 * //   TotalUnAssignedShards: "STRING_VALUE",
 * //   EnvironmentInformation: [ // EnvironmentInfoList
 * //     { // EnvironmentInfo
 * //       AvailabilityZoneInformation: [ // AvailabilityZoneInfoList
 * //         { // AvailabilityZoneInfo
 * //           AvailabilityZoneName: "STRING_VALUE",
 * //           ZoneStatus: "Active" || "StandBy" || "NotAvailable",
 * //           ConfiguredDataNodeCount: "STRING_VALUE",
 * //           AvailableDataNodeCount: "STRING_VALUE",
 * //           TotalShards: "STRING_VALUE",
 * //           TotalUnAssignedShards: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDomainHealthCommandInput - {@link DescribeDomainHealthCommandInput}
 * @returns {@link DescribeDomainHealthCommandOutput}
 * @see {@link DescribeDomainHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainHealthCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DescribeDomainHealthCommand extends $Command
  .classBuilder<
    DescribeDomainHealthCommandInput,
    DescribeDomainHealthCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "DescribeDomainHealth", {})
  .n("OpenSearchClient", "DescribeDomainHealthCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDomainHealthCommand)
  .de(de_DescribeDomainHealthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainHealthRequest;
      output: DescribeDomainHealthResponse;
    };
    sdk: {
      input: DescribeDomainHealthCommandInput;
      output: DescribeDomainHealthCommandOutput;
    };
  };
}
