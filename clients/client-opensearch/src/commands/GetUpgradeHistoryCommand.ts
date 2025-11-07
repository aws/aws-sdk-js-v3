// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetUpgradeHistoryRequest, GetUpgradeHistoryResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_GetUpgradeHistoryCommand, se_GetUpgradeHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUpgradeHistoryCommand}.
 */
export interface GetUpgradeHistoryCommandInput extends GetUpgradeHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetUpgradeHistoryCommand}.
 */
export interface GetUpgradeHistoryCommandOutput extends GetUpgradeHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves the complete history of the last 10 upgrades performed on an Amazon
 *             OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetUpgradeHistoryCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetUpgradeHistoryCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetUpgradeHistoryRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetUpgradeHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetUpgradeHistoryResponse
 * //   UpgradeHistories: [ // UpgradeHistoryList
 * //     { // UpgradeHistory
 * //       UpgradeName: "STRING_VALUE",
 * //       StartTimestamp: new Date("TIMESTAMP"),
 * //       UpgradeStatus: "IN_PROGRESS" || "SUCCEEDED" || "SUCCEEDED_WITH_ISSUES" || "FAILED",
 * //       StepsList: [ // UpgradeStepsList
 * //         { // UpgradeStepItem
 * //           UpgradeStep: "PRE_UPGRADE_CHECK" || "SNAPSHOT" || "UPGRADE",
 * //           UpgradeStepStatus: "IN_PROGRESS" || "SUCCEEDED" || "SUCCEEDED_WITH_ISSUES" || "FAILED",
 * //           Issues: [ // Issues
 * //             "STRING_VALUE",
 * //           ],
 * //           ProgressPercent: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUpgradeHistoryCommandInput - {@link GetUpgradeHistoryCommandInput}
 * @returns {@link GetUpgradeHistoryCommandOutput}
 * @see {@link GetUpgradeHistoryCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeHistoryCommandOutput} for command's `response` shape.
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
export class GetUpgradeHistoryCommand extends $Command
  .classBuilder<
    GetUpgradeHistoryCommandInput,
    GetUpgradeHistoryCommandOutput,
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
  .s("AmazonOpenSearchService", "GetUpgradeHistory", {})
  .n("OpenSearchClient", "GetUpgradeHistoryCommand")
  .f(void 0, void 0)
  .ser(se_GetUpgradeHistoryCommand)
  .de(de_GetUpgradeHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUpgradeHistoryRequest;
      output: GetUpgradeHistoryResponse;
    };
    sdk: {
      input: GetUpgradeHistoryCommandInput;
      output: GetUpgradeHistoryCommandOutput;
    };
  };
}
