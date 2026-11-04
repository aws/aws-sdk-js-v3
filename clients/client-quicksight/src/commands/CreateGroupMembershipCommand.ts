// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGroupMembershipRequest, CreateGroupMembershipResponse } from "../models/models_3";
import { CreateGroupMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGroupMembershipCommand}.
 */
export interface CreateGroupMembershipCommandInput extends CreateGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupMembershipCommand}.
 */
export interface CreateGroupMembershipCommandOutput extends CreateGroupMembershipResponse, __MetadataBearer {}

/**
 * Adds an Amazon Quick Sight user to an Amazon Quick Sight group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateGroupMembershipRequest
 *   MemberName: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupMembershipResponse
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
 * @param CreateGroupMembershipCommandInput - {@link CreateGroupMembershipCommandInput}
 * @returns {@link CreateGroupMembershipCommandOutput}
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
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
export class CreateGroupMembershipCommand extends command<CreateGroupMembershipCommandInput, CreateGroupMembershipCommandOutput>(
  _ep0,
  _mw0,
  "CreateGroupMembership",
  CreateGroupMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupMembershipRequest;
      output: CreateGroupMembershipResponse;
    };
    sdk: {
      input: CreateGroupMembershipCommandInput;
      output: CreateGroupMembershipCommandOutput;
    };
  };
}
