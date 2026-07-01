// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIpAccessSettingsRequest, GetIpAccessSettingsResponse } from "../models/models_0";
import { GetIpAccessSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpAccessSettingsCommand}.
 */
export interface GetIpAccessSettingsCommandInput extends GetIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpAccessSettingsCommand}.
 */
export interface GetIpAccessSettingsCommandOutput extends GetIpAccessSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets the IP access settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetIpAccessSettingsRequest
 *   ipAccessSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpAccessSettingsResponse
 * //   ipAccessSettings: { // IpAccessSettings
 * //     ipAccessSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     ipRules: [ // IpRuleList
 * //       { // IpRule
 * //         ipRange: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     customerManagedKey: "STRING_VALUE",
 * //     additionalEncryptionContext: { // EncryptionContextMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIpAccessSettingsCommandInput - {@link GetIpAccessSettingsCommandInput}
 * @returns {@link GetIpAccessSettingsCommandOutput}
 * @see {@link GetIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link GetIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class GetIpAccessSettingsCommand extends command<GetIpAccessSettingsCommandInput, GetIpAccessSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpAccessSettings",
  GetIpAccessSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpAccessSettingsRequest;
      output: GetIpAccessSettingsResponse;
    };
    sdk: {
      input: GetIpAccessSettingsCommandInput;
      output: GetIpAccessSettingsCommandOutput;
    };
  };
}
