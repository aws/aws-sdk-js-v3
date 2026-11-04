// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGroupMembershipRequest, DeleteGroupMembershipResponse } from "../models/models_3";
import { DeleteGroupMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGroupMembershipCommand}.
 */
export interface DeleteGroupMembershipCommandInput extends DeleteGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGroupMembershipCommand}.
 */
export interface DeleteGroupMembershipCommandOutput extends DeleteGroupMembershipResponse, __MetadataBearer {}

/**
 * Removes a user from a group so that the user is no longer a member of the group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteGroupMembershipRequest
 *   MemberName: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DeleteGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGroupMembershipResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteGroupMembershipCommandInput - {@link DeleteGroupMembershipCommandInput}
 * @returns {@link DeleteGroupMembershipCommandOutput}
 * @see {@link DeleteGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupMembershipCommandOutput} for command's `response` shape.
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
export class DeleteGroupMembershipCommand extends command<DeleteGroupMembershipCommandInput, DeleteGroupMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGroupMembership",
  DeleteGroupMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGroupMembershipRequest;
      output: DeleteGroupMembershipResponse;
    };
    sdk: {
      input: DeleteGroupMembershipCommandInput;
      output: DeleteGroupMembershipCommandOutput;
    };
  };
}
