// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAccessControlApplicationSecretRequest,
  DeleteAccessControlApplicationSecretResponse,
} from "../models/models_3";
import { DeleteAccessControlApplicationSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessControlApplicationSecretCommand}.
 */
export interface DeleteAccessControlApplicationSecretCommandInput extends DeleteAccessControlApplicationSecretRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessControlApplicationSecretCommand}.
 */
export interface DeleteAccessControlApplicationSecretCommandOutput extends DeleteAccessControlApplicationSecretResponse, __MetadataBearer {}

/**
 * <p>Deletes a client secret from an access control application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccessControlApplicationSecretCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccessControlApplicationSecretCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAccessControlApplicationSecretRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 *   ClientSecretId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessControlApplicationSecretCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccessControlApplicationSecretResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteAccessControlApplicationSecretCommandInput - {@link DeleteAccessControlApplicationSecretCommandInput}
 * @returns {@link DeleteAccessControlApplicationSecretCommandOutput}
 * @see {@link DeleteAccessControlApplicationSecretCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessControlApplicationSecretCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class DeleteAccessControlApplicationSecretCommand extends command<DeleteAccessControlApplicationSecretCommandInput, DeleteAccessControlApplicationSecretCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessControlApplicationSecret",
  DeleteAccessControlApplicationSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessControlApplicationSecretRequest;
      output: DeleteAccessControlApplicationSecretResponse;
    };
    sdk: {
      input: DeleteAccessControlApplicationSecretCommandInput;
      output: DeleteAccessControlApplicationSecretCommandOutput;
    };
  };
}
