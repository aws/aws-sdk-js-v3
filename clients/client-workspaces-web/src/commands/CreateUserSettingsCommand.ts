// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateUserSettingsRequest,
  CreateUserSettingsRequestFilterSensitiveLog,
  CreateUserSettingsResponse,
} from "../models/models_0";
import { de_CreateUserSettingsCommand, se_CreateUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserSettingsCommand}.
 */
export interface CreateUserSettingsCommandInput extends CreateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserSettingsCommand}.
 */
export interface CreateUserSettingsCommandOutput extends CreateUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates a user settings resource that can be associated with a web portal. Once
 *          associated with a web portal, user settings control how users can transfer data between a
 *          streaming session and the their local devices. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateUserSettingsRequest
 *   copyAllowed: "STRING_VALUE", // required
 *   pasteAllowed: "STRING_VALUE", // required
 *   downloadAllowed: "STRING_VALUE", // required
 *   uploadAllowed: "STRING_VALUE", // required
 *   printAllowed: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   disconnectTimeoutInMinutes: Number("int"),
 *   idleDisconnectTimeoutInMinutes: Number("int"),
 *   clientToken: "STRING_VALUE",
 *   cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 *     allowlist: [ // CookieSpecifications // required
 *       { // CookieSpecification
 *         domain: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         path: "STRING_VALUE",
 *       },
 *     ],
 *     blocklist: [
 *       {
 *         domain: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         path: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   customerManagedKey: "STRING_VALUE",
 *   additionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserSettingsResponse
 * //   userSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateUserSettingsCommandInput - {@link CreateUserSettingsCommandInput}
 * @returns {@link CreateUserSettingsCommandOutput}
 * @see {@link CreateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateUserSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateUserSettingsCommand extends $Command
  .classBuilder<
    CreateUserSettingsCommandInput,
    CreateUserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "CreateUserSettings", {})
  .n("WorkSpacesWebClient", "CreateUserSettingsCommand")
  .f(CreateUserSettingsRequestFilterSensitiveLog, void 0)
  .ser(se_CreateUserSettingsCommand)
  .de(de_CreateUserSettingsCommand)
  .build() {}
