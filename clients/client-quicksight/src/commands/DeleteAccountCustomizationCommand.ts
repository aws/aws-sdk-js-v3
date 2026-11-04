// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountCustomizationRequest, DeleteAccountCustomizationResponse } from "../models/models_3";
import { DeleteAccountCustomization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountCustomizationCommand}.
 */
export interface DeleteAccountCustomizationCommandInput extends DeleteAccountCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountCustomizationCommand}.
 */
export interface DeleteAccountCustomizationCommandOutput extends DeleteAccountCustomizationResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This API permanently deletes all Quick Sight customizations for the specified Amazon Web Services account and namespace. When you delete account customizations:
 * >
 * > - All customizations are removed including themes, branding, and visual settings
 * > - This action cannot be undone through the API
 * > - Users will see default Quick Sight styling after customizations are deleted
 * >
 * > **Before proceeding:** Ensure you have backups of any custom themes or branding elements you may want to recreate.
 *
 * Deletes all Amazon Quick Sight customizations for the specified Amazon Web Services account and Quick Sight namespace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAccountCustomizationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 * };
 * const command = new DeleteAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountCustomizationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteAccountCustomizationCommandInput - {@link DeleteAccountCustomizationCommandInput}
 * @returns {@link DeleteAccountCustomizationCommandOutput}
 * @see {@link DeleteAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
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
export class DeleteAccountCustomizationCommand extends command<DeleteAccountCustomizationCommandInput, DeleteAccountCustomizationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountCustomization",
  DeleteAccountCustomization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountCustomizationRequest;
      output: DeleteAccountCustomizationResponse;
    };
    sdk: {
      input: DeleteAccountCustomizationCommandInput;
      output: DeleteAccountCustomizationCommandOutput;
    };
  };
}
