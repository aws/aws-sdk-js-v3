// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationAnalysisResultsRequest,
  ListNetworkMigrationAnalysisResultsResponse,
} from "../models/models_0";
import { ListNetworkMigrationAnalysisResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationAnalysisResultsCommand}.
 */
export interface ListNetworkMigrationAnalysisResultsCommandInput extends ListNetworkMigrationAnalysisResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationAnalysisResultsCommand}.
 */
export interface ListNetworkMigrationAnalysisResultsCommandOutput extends ListNetworkMigrationAnalysisResultsResponse, __MetadataBearer {}

/**
 * <p>Lists the results of network migration analyses, showing connectivity and compatibility findings for migrated resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationAnalysisResultsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationAnalysisResultsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationAnalysisResultsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationAnalysisResultsFilters
 *     vpcIDs: [ // VpcIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationAnalysisResultsResponse
 * //   items: [ // NetworkMigrationAnalysisResultsList
 * //     { // NetworkMigrationAnalysisResult
 * //       jobID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       analyzerType: "STRING_VALUE",
 * //       source: { // NetworkMigrationAnalysisResultSource
 * //         vpcID: "STRING_VALUE",
 * //         subnetID: "STRING_VALUE",
 * //       },
 * //       target: { // NetworkMigrationAnalysisResultTarget
 * //         vpcID: "STRING_VALUE",
 * //         subnetID: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE",
 * //       analysisResult: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationAnalysisResultsCommandInput - {@link ListNetworkMigrationAnalysisResultsCommandInput}
 * @returns {@link ListNetworkMigrationAnalysisResultsCommandOutput}
 * @see {@link ListNetworkMigrationAnalysisResultsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationAnalysisResultsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationAnalysisResults call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       analysisResult: "analysis result",
 *       analyzerType: "REACHABILITY_ANALYZER",
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       source: {
 *         subnetID: "subnet-12345678",
 *         vpcID: "vpc-12345678"
 *       },
 *       status: "SUCCEEDED",
 *       target: {
 *         subnetID: "subnet-01234567",
 *         vpcID: "vpc-01234567"
 *       }
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationAnalysisResultsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationAnalysisResultsCommandInput,
    ListNetworkMigrationAnalysisResultsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationAnalysisResults", {})
  .n("MgnClient", "ListNetworkMigrationAnalysisResultsCommand")
  .sc(ListNetworkMigrationAnalysisResults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationAnalysisResultsRequest;
      output: ListNetworkMigrationAnalysisResultsResponse;
    };
    sdk: {
      input: ListNetworkMigrationAnalysisResultsCommandInput;
      output: ListNetworkMigrationAnalysisResultsCommandOutput;
    };
  };
}
