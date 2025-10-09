// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGroupMembershipRequest, DescribeGroupMembershipResponse } from "../models/models_4";
import { de_DescribeGroupMembershipCommand, se_DescribeGroupMembershipCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupMembershipCommand}.
 */
export interface DescribeGroupMembershipCommandInput extends DescribeGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupMembershipCommand}.
 */
export interface DescribeGroupMembershipCommandOutput extends DescribeGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Use the <code>DescribeGroupMembership</code> operation to determine if a user is a
 * 			member of the specified group. If the user exists and is a member of the specified
 * 			group, an associated <code>GroupMember</code> object is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeGroupMembershipRequest
 *   MemberName: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupMembershipResponse
 * //   GroupMember: { // GroupMember
 * //     Arn: "STRING_VALUE",
 * //     MemberName: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeGroupMembershipCommandInput - {@link DescribeGroupMembershipCommandInput}
 * @returns {@link DescribeGroupMembershipCommandOutput}
 * @see {@link DescribeGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupMembershipCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
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
export class DescribeGroupMembershipCommand extends $Command
  .classBuilder<
    DescribeGroupMembershipCommandInput,
    DescribeGroupMembershipCommandOutput,
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
  .s("QuickSight_20180401", "DescribeGroupMembership", {})
  .n("QuickSightClient", "DescribeGroupMembershipCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGroupMembershipCommand)
  .de(de_DescribeGroupMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupMembershipRequest;
      output: DescribeGroupMembershipResponse;
    };
    sdk: {
      input: DescribeGroupMembershipCommandInput;
      output: DescribeGroupMembershipCommandOutput;
    };
  };
}
