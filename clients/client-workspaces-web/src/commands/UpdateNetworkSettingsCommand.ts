// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNetworkSettingsRequest, UpdateNetworkSettingsResponse } from "../models/models_0";
import { UpdateNetworkSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNetworkSettingsCommand}.
 */
export interface UpdateNetworkSettingsCommandInput extends UpdateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkSettingsCommand}.
 */
export interface UpdateNetworkSettingsCommandOutput extends UpdateNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates network settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateNetworkSettingsRequest
 *   networkSettingsArn: "STRING_VALUE", // required
 *   vpcId: "STRING_VALUE",
 *   subnetIds: [ // SubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkSettingsResponse
 * //   networkSettings: { // NetworkSettings
 * //     networkSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     vpcId: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNetworkSettingsCommandInput - {@link UpdateNetworkSettingsCommandInput}
 * @returns {@link UpdateNetworkSettingsCommandOutput}
 * @see {@link UpdateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class UpdateNetworkSettingsCommand extends command<UpdateNetworkSettingsCommandInput, UpdateNetworkSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNetworkSettings",
  UpdateNetworkSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNetworkSettingsRequest;
      output: UpdateNetworkSettingsResponse;
    };
    sdk: {
      input: UpdateNetworkSettingsCommandInput;
      output: UpdateNetworkSettingsCommandOutput;
    };
  };
}
