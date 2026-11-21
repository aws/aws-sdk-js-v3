// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAccessControlApplicationSecretRequest,
  UpdateAccessControlApplicationSecretResponse,
} from "../models/models_5";
import { UpdateAccessControlApplicationSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessControlApplicationSecretCommand}.
 */
export interface UpdateAccessControlApplicationSecretCommandInput extends UpdateAccessControlApplicationSecretRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessControlApplicationSecretCommand}.
 */
export interface UpdateAccessControlApplicationSecretCommandOutput extends UpdateAccessControlApplicationSecretResponse, __MetadataBearer {}

/**
 * <p>Updates the Amazon Web Services Secrets Manager secret ARNs of an IdP-provided client secret. You can add, replace, or remove the ARN for a Region, but you can't remove the last remaining Region. To remove it, delete the client secret.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccessControlApplicationSecretCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccessControlApplicationSecretCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAccessControlApplicationSecretRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 *   ClientSecretId: "STRING_VALUE", // required
 *   UpdateRegionalSecretManagerArns: { // RegionalSecretManagerArnMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RemoveRegionalSecretManagerArns: [ // AwsRegionList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateAccessControlApplicationSecretCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessControlApplicationSecretResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   ClientSecretId: "STRING_VALUE", // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * //   RegionalSecretManagerArns: { // RegionalSecretManagerArnMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccessControlApplicationSecretCommandInput - {@link UpdateAccessControlApplicationSecretCommandInput}
 * @returns {@link UpdateAccessControlApplicationSecretCommandOutput}
 * @see {@link UpdateAccessControlApplicationSecretCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessControlApplicationSecretCommandOutput} for command's `response` shape.
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
export class UpdateAccessControlApplicationSecretCommand extends command<UpdateAccessControlApplicationSecretCommandInput, UpdateAccessControlApplicationSecretCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessControlApplicationSecret",
  UpdateAccessControlApplicationSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessControlApplicationSecretRequest;
      output: UpdateAccessControlApplicationSecretResponse;
    };
    sdk: {
      input: UpdateAccessControlApplicationSecretCommandInput;
      output: UpdateAccessControlApplicationSecretCommandOutput;
    };
  };
}
