// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateIpAccessSettingsRequest, CreateIpAccessSettingsResponse } from "../models/models_0";
import { CreateIpAccessSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIpAccessSettingsCommand}.
 */
export interface CreateIpAccessSettingsCommandInput extends CreateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpAccessSettingsCommand}.
 */
export interface CreateIpAccessSettingsCommandOutput extends CreateIpAccessSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates an IP access settings resource that can be associated with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateIpAccessSettingsRequest
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   customerManagedKey: "STRING_VALUE",
 *   additionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ipRules: [ // IpRuleList // required
 *     { // IpRule
 *       ipRange: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpAccessSettingsResponse
 * //   ipAccessSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIpAccessSettingsCommandInput - {@link CreateIpAccessSettingsCommandInput}
 * @returns {@link CreateIpAccessSettingsCommandOutput}
 * @see {@link CreateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateIpAccessSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateIpAccessSettingsCommand extends $Command
  .classBuilder<
    CreateIpAccessSettingsCommandInput,
    CreateIpAccessSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "CreateIpAccessSettings", {})
  .n("WorkSpacesWebClient", "CreateIpAccessSettingsCommand")
  .sc(CreateIpAccessSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpAccessSettingsRequest;
      output: CreateIpAccessSettingsResponse;
    };
    sdk: {
      input: CreateIpAccessSettingsCommandInput;
      output: CreateIpAccessSettingsCommandOutput;
    };
  };
}
