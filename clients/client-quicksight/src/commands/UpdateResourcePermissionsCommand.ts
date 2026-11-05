// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResourcePermissionsRequest, UpdateResourcePermissionsResponse } from "../models/models_5";
import { UpdateResourcePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResourcePermissionsCommand}.
 */
export interface UpdateResourcePermissionsCommandInput extends UpdateResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourcePermissionsCommand}.
 */
export interface UpdateResourcePermissionsCommandOutput extends UpdateResourcePermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the service role configuration that Amazon Quick Sight uses to access resources in your
 *             Amazon Web Services account. To use this operation, you must have the
 *             <code>quicksight:UpdateResourcePermissions</code> and <code>iam:PassRole</code>
 *             permissions.</p>
 *          <p>Call this operation in the Amazon Web Services Region where your Amazon Quick Sight account is
 *             registered (the home Region). You can switch from a role managed by Amazon Quick Sight to a
 *             customer-managed role, or replace one customer-managed role with another. You can't use
 *             this operation to switch back to a role managed by Amazon Quick Sight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateResourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateResourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateResourcePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   RoleType: "QUICKSIGHT_MANAGED" || "CUSTOMER_MANAGED", // required
 *   CustomerManagedRoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourcePermissionsResponse
 * //   RoleType: "QUICKSIGHT_MANAGED" || "CUSTOMER_MANAGED",
 * //   CustomerManagedRoleArn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateResourcePermissionsCommandInput - {@link UpdateResourcePermissionsCommandInput}
 * @returns {@link UpdateResourcePermissionsCommandOutput}
 * @see {@link UpdateResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePermissionsCommandOutput} for command's `response` shape.
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
export class UpdateResourcePermissionsCommand extends command<UpdateResourcePermissionsCommandInput, UpdateResourcePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResourcePermissions",
  UpdateResourcePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourcePermissionsRequest;
      output: UpdateResourcePermissionsResponse;
    };
    sdk: {
      input: UpdateResourcePermissionsCommandInput;
      output: UpdateResourcePermissionsCommandOutput;
    };
  };
}
