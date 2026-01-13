// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { DescribeTestExecutionRequest, DescribeTestExecutionResponse } from "../models/models_0";
import { DescribeTestExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTestExecutionCommand}.
 */
export interface DescribeTestExecutionCommandInput extends DescribeTestExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTestExecutionCommand}.
 */
export interface DescribeTestExecutionCommandOutput extends DescribeTestExecutionResponse, __MetadataBearer {}

/**
 * <p>Gets metadata information about the test execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeTestExecutionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeTestExecutionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeTestExecutionRequest
 *   testExecutionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTestExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestExecutionResponse
 * //   testExecutionId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   testExecutionStatus: "Pending" || "Waiting" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //   testSetId: "STRING_VALUE",
 * //   testSetName: "STRING_VALUE",
 * //   target: { // TestExecutionTarget
 * //     botAliasTarget: { // BotAliasTestExecutionTarget
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   apiMode: "Streaming" || "NonStreaming",
 * //   testExecutionModality: "Text" || "Audio",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTestExecutionCommandInput - {@link DescribeTestExecutionCommandInput}
 * @returns {@link DescribeTestExecutionCommandOutput}
 * @see {@link DescribeTestExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeTestExecutionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DescribeTestExecutionCommand extends $Command
  .classBuilder<
    DescribeTestExecutionCommandInput,
    DescribeTestExecutionCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DescribeTestExecution", {})
  .n("LexModelsV2Client", "DescribeTestExecutionCommand")
  .sc(DescribeTestExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTestExecutionRequest;
      output: DescribeTestExecutionResponse;
    };
    sdk: {
      input: DescribeTestExecutionCommandInput;
      output: DescribeTestExecutionCommandOutput;
    };
  };
}
