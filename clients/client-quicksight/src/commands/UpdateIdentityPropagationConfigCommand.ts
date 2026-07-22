// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateIdentityPropagationConfigRequest,
  UpdateIdentityPropagationConfigResponse,
} from "../models/models_5";
import { UpdateIdentityPropagationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIdentityPropagationConfigCommand}.
 */
export interface UpdateIdentityPropagationConfigCommandInput extends UpdateIdentityPropagationConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityPropagationConfigCommand}.
 */
export interface UpdateIdentityPropagationConfigCommandOutput extends UpdateIdentityPropagationConfigResponse, __MetadataBearer {}

/**
 * <p>Adds or updates services and authorized targets to configure what the Quick Sight IAM Identity Center application can access.</p>
 *          <p>This operation is only supported for Quick Sight accounts using IAM Identity Center</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIdentityPropagationConfigCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIdentityPropagationConfigCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateIdentityPropagationConfigRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Service: "REDSHIFT" || "QBUSINESS" || "ATHENA" || "GLUE_DATA_CATALOG", // required
 *   AuthorizedTargets: [ // AuthorizedTargetsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateIdentityPropagationConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityPropagationConfigResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateIdentityPropagationConfigCommandInput - {@link UpdateIdentityPropagationConfigCommandInput}
 * @returns {@link UpdateIdentityPropagationConfigCommandOutput}
 * @see {@link UpdateIdentityPropagationConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityPropagationConfigCommandOutput} for command's `response` shape.
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
export class UpdateIdentityPropagationConfigCommand extends command<UpdateIdentityPropagationConfigCommandInput, UpdateIdentityPropagationConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIdentityPropagationConfig",
  UpdateIdentityPropagationConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdentityPropagationConfigRequest;
      output: UpdateIdentityPropagationConfigResponse;
    };
    sdk: {
      input: UpdateIdentityPropagationConfigCommandInput;
      output: UpdateIdentityPropagationConfigCommandOutput;
    };
  };
}
