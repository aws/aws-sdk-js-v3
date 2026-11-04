// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUpgradeHistoryRequest, GetUpgradeHistoryResponse } from "../models/models_0";
import { GetUpgradeHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the complete history of the last 10 upgrades performed on an Amazon OpenSearch Service domain.
 *
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
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access an unsupported operation.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class GetUpgradeHistoryCommand extends command<GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput>(
  _ep0,
  _mw0,
  "GetUpgradeHistory",
  GetUpgradeHistory$
) {
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
