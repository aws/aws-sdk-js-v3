// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTopicRefreshRequest, DescribeTopicRefreshResponse } from "../models/models_4";
import { de_DescribeTopicRefreshCommand, se_DescribeTopicRefreshCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTopicRefreshCommand}.
 */
export interface DescribeTopicRefreshCommandInput extends DescribeTopicRefreshRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicRefreshCommand}.
 */
export interface DescribeTopicRefreshCommandOutput extends DescribeTopicRefreshResponse, __MetadataBearer {}

/**
 * <p>Describes the status of a topic refresh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicRefreshCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicRefreshCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicRefreshRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   RefreshId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicRefreshCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicRefreshResponse
 * //   RefreshDetails: { // TopicRefreshDetails
 * //     RefreshArn: "STRING_VALUE",
 * //     RefreshId: "STRING_VALUE",
 * //     RefreshStatus: "INITIALIZED" || "RUNNING" || "FAILED" || "COMPLETED" || "CANCELLED",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeTopicRefreshCommandInput - {@link DescribeTopicRefreshCommandInput}
 * @returns {@link DescribeTopicRefreshCommandOutput}
 * @see {@link DescribeTopicRefreshCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicRefreshCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeTopicRefreshCommand extends $Command
  .classBuilder<
    DescribeTopicRefreshCommandInput,
    DescribeTopicRefreshCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeTopicRefresh", {})
  .n("QuickSightClient", "DescribeTopicRefreshCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTopicRefreshCommand)
  .de(de_DescribeTopicRefreshCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicRefreshRequest;
      output: DescribeTopicRefreshResponse;
    };
    sdk: {
      input: DescribeTopicRefreshCommandInput;
      output: DescribeTopicRefreshCommandOutput;
    };
  };
}
