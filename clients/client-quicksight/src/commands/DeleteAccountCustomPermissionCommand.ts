// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountCustomPermissionRequest, DeleteAccountCustomPermissionResponse } from "../models/models_3";
import { DeleteAccountCustomPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountCustomPermissionCommand}.
 */
export interface DeleteAccountCustomPermissionCommandInput extends DeleteAccountCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountCustomPermissionCommand}.
 */
export interface DeleteAccountCustomPermissionCommandOutput extends DeleteAccountCustomPermissionResponse, __MetadataBearer {}

/**
 * Unapplies a custom permissions profile from an account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAccountCustomPermissionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountCustomPermissionResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteAccountCustomPermissionCommandInput - {@link DeleteAccountCustomPermissionCommandInput}
 * @returns {@link DeleteAccountCustomPermissionCommandOutput}
 * @see {@link DeleteAccountCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCustomPermissionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
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
export class DeleteAccountCustomPermissionCommand extends command<DeleteAccountCustomPermissionCommandInput, DeleteAccountCustomPermissionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountCustomPermission",
  DeleteAccountCustomPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountCustomPermissionRequest;
      output: DeleteAccountCustomPermissionResponse;
    };
    sdk: {
      input: DeleteAccountCustomPermissionCommandInput;
      output: DeleteAccountCustomPermissionCommandOutput;
    };
  };
}
