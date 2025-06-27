// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListBlueprintsRequest,
  ListBlueprintsResponse,
  ListBlueprintsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListBlueprintsCommand, se_ListBlueprintsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBlueprintsCommand}.
 */
export interface ListBlueprintsCommandInput extends ListBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link ListBlueprintsCommand}.
 */
export interface ListBlueprintsCommandOutput extends ListBlueprintsResponse, __MetadataBearer {}

/**
 * Lists all existing Amazon Bedrock Data Automation Blueprints
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, ListBlueprintsCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, ListBlueprintsCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // ListBlueprintsRequest
 *   blueprintArn: "STRING_VALUE",
 *   resourceOwner: "SERVICE" || "ACCOUNT",
 *   blueprintStageFilter: "DEVELOPMENT" || "LIVE" || "ALL",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   projectFilter: { // DataAutomationProjectFilter
 *     projectArn: "STRING_VALUE", // required
 *     projectStage: "DEVELOPMENT" || "LIVE",
 *   },
 * };
 * const command = new ListBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // ListBlueprintsResponse
 * //   blueprints: [ // Blueprints // required
 * //     { // BlueprintSummary
 * //       blueprintArn: "STRING_VALUE", // required
 * //       blueprintVersion: "STRING_VALUE",
 * //       blueprintStage: "DEVELOPMENT" || "LIVE",
 * //       blueprintName: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBlueprintsCommandInput - {@link ListBlueprintsCommandInput}
 * @returns {@link ListBlueprintsCommandOutput}
 * @see {@link ListBlueprintsCommandInput} for command's `input` shape.
 * @see {@link ListBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class ListBlueprintsCommand extends $Command
  .classBuilder<
    ListBlueprintsCommandInput,
    ListBlueprintsCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "ListBlueprints", {})
  .n("BedrockDataAutomationClient", "ListBlueprintsCommand")
  .f(void 0, ListBlueprintsResponseFilterSensitiveLog)
  .ser(se_ListBlueprintsCommand)
  .de(de_ListBlueprintsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBlueprintsRequest;
      output: ListBlueprintsResponse;
    };
    sdk: {
      input: ListBlueprintsCommandInput;
      output: ListBlueprintsCommandOutput;
    };
  };
}
