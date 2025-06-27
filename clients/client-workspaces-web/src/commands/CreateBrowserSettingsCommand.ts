// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateBrowserSettingsRequest,
  CreateBrowserSettingsRequestFilterSensitiveLog,
  CreateBrowserSettingsResponse,
} from "../models/models_0";
import { de_CreateBrowserSettingsCommand, se_CreateBrowserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBrowserSettingsCommand}.
 */
export interface CreateBrowserSettingsCommandInput extends CreateBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateBrowserSettingsCommand}.
 */
export interface CreateBrowserSettingsCommandOutput extends CreateBrowserSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates a browser settings resource that can be associated with a web portal. Once
 *          associated with a web portal, browser settings control how the browser will behave once a
 *          user starts a streaming session for the web portal. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateBrowserSettingsRequest
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
 *   browserPolicy: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrowserSettingsResponse
 * //   browserSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBrowserSettingsCommandInput - {@link CreateBrowserSettingsCommandInput}
 * @returns {@link CreateBrowserSettingsCommandOutput}
 * @see {@link CreateBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateBrowserSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
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
export class CreateBrowserSettingsCommand extends $Command
  .classBuilder<
    CreateBrowserSettingsCommandInput,
    CreateBrowserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "CreateBrowserSettings", {})
  .n("WorkSpacesWebClient", "CreateBrowserSettingsCommand")
  .f(CreateBrowserSettingsRequestFilterSensitiveLog, void 0)
  .ser(se_CreateBrowserSettingsCommand)
  .de(de_CreateBrowserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBrowserSettingsRequest;
      output: CreateBrowserSettingsResponse;
    };
    sdk: {
      input: CreateBrowserSettingsCommandInput;
      output: CreateBrowserSettingsCommandOutput;
    };
  };
}
