// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTopicsRequest, ListTopicsResponse } from "../models/models_5";
import { de_ListTopicsCommand, se_ListTopicsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTopicsCommand}.
 */
export interface ListTopicsCommandInput extends ListTopicsRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicsCommand}.
 */
export interface ListTopicsCommandOutput extends ListTopicsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the topics within an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTopicsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTopicsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListTopicsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTopicsCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicsResponse
 * //   TopicsSummaries: [ // TopicSummaries
 * //     { // TopicSummary
 * //       Arn: "STRING_VALUE",
 * //       TopicId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       UserExperienceVersion: "LEGACY" || "NEW_READER_EXPERIENCE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListTopicsCommandInput - {@link ListTopicsCommandInput}
 * @returns {@link ListTopicsCommandOutput}
 * @see {@link ListTopicsCommandInput} for command's `input` shape.
 * @see {@link ListTopicsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
export class ListTopicsCommand extends $Command
  .classBuilder<
    ListTopicsCommandInput,
    ListTopicsCommandOutput,
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
  .s("QuickSight_20180401", "ListTopics", {})
  .n("QuickSightClient", "ListTopicsCommand")
  .f(void 0, void 0)
  .ser(se_ListTopicsCommand)
  .de(de_ListTopicsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicsRequest;
      output: ListTopicsResponse;
    };
    sdk: {
      input: ListTopicsCommandInput;
      output: ListTopicsCommandOutput;
    };
  };
}
