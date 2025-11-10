// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIpAccessSettingsRequest, UpdateIpAccessSettingsResponse } from "../models/models_0";
import { UpdateIpAccessSettings } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIpAccessSettingsCommand}.
 */
export interface UpdateIpAccessSettingsCommandInput extends UpdateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIpAccessSettingsCommand}.
 */
export interface UpdateIpAccessSettingsCommandOutput extends UpdateIpAccessSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates IP access settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateIpAccessSettingsRequest
 *   ipAccessSettingsArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   ipRules: [ // IpRuleList
 *     { // IpRule
 *       ipRange: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIpAccessSettingsResponse
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
 * @param UpdateIpAccessSettingsCommandInput - {@link UpdateIpAccessSettingsCommandInput}
 * @returns {@link UpdateIpAccessSettingsCommandOutput}
 * @see {@link UpdateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class UpdateIpAccessSettingsCommand extends $Command
  .classBuilder<
    UpdateIpAccessSettingsCommandInput,
    UpdateIpAccessSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "UpdateIpAccessSettings", {})
  .n("WorkSpacesWebClient", "UpdateIpAccessSettingsCommand")
  .sc(UpdateIpAccessSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIpAccessSettingsRequest;
      output: UpdateIpAccessSettingsResponse;
    };
    sdk: {
      input: UpdateIpAccessSettingsCommandInput;
      output: UpdateIpAccessSettingsCommandOutput;
    };
  };
}
