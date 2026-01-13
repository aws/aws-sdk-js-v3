// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import type { ListCollectorsRequest, ListCollectorsResponse } from "../models/models_0";
import { ListCollectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollectorsCommand}.
 */
export interface ListCollectorsCommandInput extends ListCollectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollectorsCommand}.
 */
export interface ListCollectorsCommandOutput extends ListCollectorsResponse, __MetadataBearer {}

/**
 * <p> Retrieves a list of all the installed collectors. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListCollectorsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListCollectorsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListCollectorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollectorsResponse
 * //   Collectors: [ // Collectors
 * //     { // Collector
 * //       collectorId: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       hostName: "STRING_VALUE",
 * //       collectorHealth: "STRING_VALUE",
 * //       collectorVersion: "STRING_VALUE",
 * //       registeredTimeStamp: "STRING_VALUE",
 * //       lastActivityTimeStamp: "STRING_VALUE",
 * //       configurationSummary: { // ConfigurationSummary
 * //         vcenterBasedRemoteInfoList: [ // VcenterBasedRemoteInfoList
 * //           { // VcenterBasedRemoteInfo
 * //             vcenterConfigurationTimeStamp: "STRING_VALUE",
 * //             osType: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ipAddressBasedRemoteInfoList: [ // IPAddressBasedRemoteInfoList
 * //           { // IPAddressBasedRemoteInfo
 * //             ipAddressConfigurationTimeStamp: "STRING_VALUE",
 * //             authType: "STRING_VALUE",
 * //             osType: "STRING_VALUE",
 * //           },
 * //         ],
 * //         versionControlInfoList: [ // VersionControlInfoList
 * //           { // VersionControlInfo
 * //             versionControlType: "STRING_VALUE",
 * //             versionControlConfigurationTimeStamp: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pipelineInfoList: [ // PipelineInfoList
 * //           { // PipelineInfo
 * //             pipelineType: "STRING_VALUE",
 * //             pipelineConfigurationTimeStamp: "STRING_VALUE",
 * //           },
 * //         ],
 * //         remoteSourceCodeAnalysisServerInfo: { // RemoteSourceCodeAnalysisServerInfo
 * //           remoteSourceCodeAnalysisServerConfigurationTimestamp: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCollectorsCommandInput - {@link ListCollectorsCommandInput}
 * @returns {@link ListCollectorsCommandOutput}
 * @see {@link ListCollectorsCommandInput} for command's `input` shape.
 * @see {@link ListCollectorsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class ListCollectorsCommand extends $Command
  .classBuilder<
    ListCollectorsCommandInput,
    ListCollectorsCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "ListCollectors", {})
  .n("MigrationHubStrategyClient", "ListCollectorsCommand")
  .sc(ListCollectors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollectorsRequest;
      output: ListCollectorsResponse;
    };
    sdk: {
      input: ListCollectorsCommandInput;
      output: ListCollectorsCommandOutput;
    };
  };
}
