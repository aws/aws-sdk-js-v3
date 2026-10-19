// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIdentityStoreRequest, UpdateIdentityStoreResponse } from "../models/models_0";
import { UpdateIdentityStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIdentityStoreCommand}.
 */
export interface UpdateIdentityStoreCommandInput extends UpdateIdentityStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityStoreCommand}.
 */
export interface UpdateIdentityStoreCommandOutput extends UpdateIdentityStoreResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of the specified identity store, including its network configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, UpdateIdentityStoreCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, UpdateIdentityStoreCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // UpdateIdentityStoreRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   NetworkConfiguration: { // NetworkConfiguration
 *     VpceAccessRequired: true || false, // required
 *     ApiRestrictSourceVpcs: [ // VpcIdList
 *       "STRING_VALUE",
 *     ],
 *     ApiAllowSourceIps: [ // IpCidrList
 *       "STRING_VALUE",
 *     ],
 *     ScimAllowSourceIps: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateIdentityStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityStoreResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   IdentityStoreArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateIdentityStoreCommandInput - {@link UpdateIdentityStoreCommandInput}
 * @returns {@link UpdateIdentityStoreCommandOutput}
 * @see {@link UpdateIdentityStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityStoreCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons:</p> <ul> <li> <p>Performing the requested operation would violate an existing uniqueness claim in the identity store. Resolve the conflict before retrying this request.</p> </li> <li> <p>The requested resource was being concurrently modified by another request.</p> </li> </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 *
 * @public
 */
export class UpdateIdentityStoreCommand extends command<UpdateIdentityStoreCommandInput, UpdateIdentityStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIdentityStore",
  UpdateIdentityStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdentityStoreRequest;
      output: UpdateIdentityStoreResponse;
    };
    sdk: {
      input: UpdateIdentityStoreCommandInput;
      output: UpdateIdentityStoreCommandOutput;
    };
  };
}
