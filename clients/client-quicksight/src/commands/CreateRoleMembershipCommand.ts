// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRoleMembershipRequest, CreateRoleMembershipResponse } from "../models/models_3";
import { CreateRoleMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRoleMembershipCommand}.
 */
export interface CreateRoleMembershipCommandInput extends CreateRoleMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoleMembershipCommand}.
 */
export interface CreateRoleMembershipCommandOutput extends CreateRoleMembershipResponse, __MetadataBearer {}

/**
 * Use `CreateRoleMembership` to add an existing Quick Sight group to an existing role.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateRoleMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateRoleMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateRoleMembershipRequest
 *   MemberName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   Role: "ADMIN" || "AUTHOR" || "READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 * };
 * const command = new CreateRoleMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoleMembershipResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateRoleMembershipCommandInput - {@link CreateRoleMembershipCommandInput}
 * @returns {@link CreateRoleMembershipCommandOutput}
 * @see {@link CreateRoleMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateRoleMembershipCommandOutput} for command's `response` shape.
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
export class CreateRoleMembershipCommand extends command<CreateRoleMembershipCommandInput, CreateRoleMembershipCommandOutput>(
  _ep0,
  _mw0,
  "CreateRoleMembership",
  CreateRoleMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoleMembershipRequest;
      output: CreateRoleMembershipResponse;
    };
    sdk: {
      input: CreateRoleMembershipCommandInput;
      output: CreateRoleMembershipCommandOutput;
    };
  };
}
