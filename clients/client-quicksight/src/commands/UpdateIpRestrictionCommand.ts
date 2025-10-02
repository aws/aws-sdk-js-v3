// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIpRestrictionRequest, UpdateIpRestrictionResponse } from "../models/models_5";
import { de_UpdateIpRestrictionCommand, se_UpdateIpRestrictionCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIpRestrictionCommand}.
 */
export interface UpdateIpRestrictionCommandInput extends UpdateIpRestrictionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIpRestrictionCommand}.
 */
export interface UpdateIpRestrictionCommandOutput extends UpdateIpRestrictionResponse, __MetadataBearer {}

/**
 * <p>Updates the content and status of IP rules. Traffic from a source is allowed when the source satisfies either the <code>IpRestrictionRule</code>, <code>VpcIdRestrictionRule</code>, or <code>VpcEndpointIdRestrictionRule</code>. To use this operation, you must provide the entire map of rules. You can use the <code>DescribeIpRestriction</code> operation to get the current rule map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIpRestrictionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIpRestrictionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateIpRestrictionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   IpRestrictionRuleMap: { // IpRestrictionRuleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   VpcIdRestrictionRuleMap: { // VpcIdRestrictionRuleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   VpcEndpointIdRestrictionRuleMap: { // VpcEndpointIdRestrictionRuleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Enabled: true || false,
 * };
 * const command = new UpdateIpRestrictionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIpRestrictionResponse
 * //   AwsAccountId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateIpRestrictionCommandInput - {@link UpdateIpRestrictionCommandInput}
 * @returns {@link UpdateIpRestrictionCommandOutput}
 * @see {@link UpdateIpRestrictionCommandInput} for command's `input` shape.
 * @see {@link UpdateIpRestrictionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class UpdateIpRestrictionCommand extends $Command
  .classBuilder<
    UpdateIpRestrictionCommandInput,
    UpdateIpRestrictionCommandOutput,
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
  .s("QuickSight_20180401", "UpdateIpRestriction", {})
  .n("QuickSightClient", "UpdateIpRestrictionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIpRestrictionCommand)
  .de(de_UpdateIpRestrictionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIpRestrictionRequest;
      output: UpdateIpRestrictionResponse;
    };
    sdk: {
      input: UpdateIpRestrictionCommandInput;
      output: UpdateIpRestrictionCommandOutput;
    };
  };
}
