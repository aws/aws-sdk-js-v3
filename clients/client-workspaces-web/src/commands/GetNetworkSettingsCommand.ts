// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNetworkSettingsRequest, GetNetworkSettingsResponse } from "../models/models_0";
import { GetNetworkSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNetworkSettingsCommand}.
 */
export interface GetNetworkSettingsCommandInput extends GetNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkSettingsCommand}.
 */
export interface GetNetworkSettingsCommandOutput extends GetNetworkSettingsResponse, __MetadataBearer {}

/**
 * Gets the network settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetNetworkSettingsRequest
 *   networkSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkSettingsResponse
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
 * @param GetNetworkSettingsCommandInput - {@link GetNetworkSettingsCommandInput}
 * @returns {@link GetNetworkSettingsCommandOutput}
 * @see {@link GetNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class GetNetworkSettingsCommand extends command<GetNetworkSettingsCommandInput, GetNetworkSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetNetworkSettings",
  GetNetworkSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkSettingsRequest;
      output: GetNetworkSettingsResponse;
    };
    sdk: {
      input: GetNetworkSettingsCommandInput;
      output: GetNetworkSettingsCommandOutput;
    };
  };
}
