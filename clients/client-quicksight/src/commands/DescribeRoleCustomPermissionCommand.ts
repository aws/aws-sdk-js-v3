// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRoleCustomPermissionRequest, DescribeRoleCustomPermissionResponse } from "../models/models_4";
import { DescribeRoleCustomPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRoleCustomPermissionCommand}.
 */
export interface DescribeRoleCustomPermissionCommandInput extends DescribeRoleCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRoleCustomPermissionCommand}.
 */
export interface DescribeRoleCustomPermissionCommandOutput extends DescribeRoleCustomPermissionResponse, __MetadataBearer {}

/**
 * Describes all custom permissions that are mapped to a role.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeRoleCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeRoleCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeRoleCustomPermissionRequest
 *   Role: "ADMIN" || "AUTHOR" || "READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeRoleCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRoleCustomPermissionResponse
 * //   CustomPermissionsName: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeRoleCustomPermissionCommandInput - {@link DescribeRoleCustomPermissionCommandInput}
 * @returns {@link DescribeRoleCustomPermissionCommandOutput}
 * @see {@link DescribeRoleCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeRoleCustomPermissionCommandOutput} for command's `response` shape.
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
export class DescribeRoleCustomPermissionCommand extends command<DescribeRoleCustomPermissionCommandInput, DescribeRoleCustomPermissionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRoleCustomPermission",
  DescribeRoleCustomPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRoleCustomPermissionRequest;
      output: DescribeRoleCustomPermissionResponse;
    };
    sdk: {
      input: DescribeRoleCustomPermissionCommandInput;
      output: DescribeRoleCustomPermissionCommandOutput;
    };
  };
}
