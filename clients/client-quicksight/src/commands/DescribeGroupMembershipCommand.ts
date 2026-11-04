// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGroupMembershipRequest, DescribeGroupMembershipResponse } from "../models/models_4";
import { DescribeGroupMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Use the `DescribeGroupMembership` operation to determine if a user is a member of the specified group. If the user exists and is a member of the specified group, an associated `GroupMember` object is returned.
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *
 * This resource is currently unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeGroupMembershipCommand extends command<DescribeGroupMembershipCommandInput, DescribeGroupMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGroupMembership",
  DescribeGroupMembership$
) {
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
