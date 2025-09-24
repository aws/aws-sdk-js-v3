// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpRestrictionRequest, DescribeIpRestrictionResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeIpRestriction } from "../schemas/schemas_52_Topic";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpRestrictionCommand}.
 */
export interface DescribeIpRestrictionCommandInput extends DescribeIpRestrictionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpRestrictionCommand}.
 */
export interface DescribeIpRestrictionCommandOutput extends DescribeIpRestrictionResponse, __MetadataBearer {}

/**
 * <p>Provides a summary and status of IP rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeIpRestrictionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeIpRestrictionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeIpRestrictionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIpRestrictionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpRestrictionResponse
 * //   AwsAccountId: "STRING_VALUE",
 * //   IpRestrictionRuleMap: { // IpRestrictionRuleMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   VpcIdRestrictionRuleMap: { // VpcIdRestrictionRuleMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   VpcEndpointIdRestrictionRuleMap: { // VpcEndpointIdRestrictionRuleMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Enabled: true || false,
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeIpRestrictionCommandInput - {@link DescribeIpRestrictionCommandInput}
 * @returns {@link DescribeIpRestrictionCommandOutput}
 * @see {@link DescribeIpRestrictionCommandInput} for command's `input` shape.
 * @see {@link DescribeIpRestrictionCommandOutput} for command's `response` shape.
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
export class DescribeIpRestrictionCommand extends $Command
  .classBuilder<
    DescribeIpRestrictionCommandInput,
    DescribeIpRestrictionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeIpRestriction", {})
  .n("QuickSightClient", "DescribeIpRestrictionCommand")
  .sc(DescribeIpRestriction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpRestrictionRequest;
      output: DescribeIpRestrictionResponse;
    };
    sdk: {
      input: DescribeIpRestrictionCommandInput;
      output: DescribeIpRestrictionCommandOutput;
    };
  };
}
