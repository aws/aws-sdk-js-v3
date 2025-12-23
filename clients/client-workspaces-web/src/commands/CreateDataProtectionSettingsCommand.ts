// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDataProtectionSettingsRequest, CreateDataProtectionSettingsResponse } from "../models/models_0";
import { CreateDataProtectionSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataProtectionSettingsCommand}.
 */
export interface CreateDataProtectionSettingsCommandInput extends CreateDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataProtectionSettingsCommand}.
 */
export interface CreateDataProtectionSettingsCommandOutput extends CreateDataProtectionSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates a data protection settings resource that can be associated with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateDataProtectionSettingsRequest
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
 *   inlineRedactionConfiguration: { // InlineRedactionConfiguration
 *     inlineRedactionPatterns: [ // InlineRedactionPatterns // required
 *       { // InlineRedactionPattern
 *         builtInPatternId: "STRING_VALUE",
 *         customPattern: { // CustomPattern
 *           patternName: "STRING_VALUE", // required
 *           patternRegex: "STRING_VALUE", // required
 *           patternDescription: "STRING_VALUE",
 *           keywordRegex: "STRING_VALUE",
 *         },
 *         redactionPlaceHolder: { // RedactionPlaceHolder
 *           redactionPlaceHolderType: "STRING_VALUE", // required
 *           redactionPlaceHolderText: "STRING_VALUE",
 *         },
 *         enforcedUrls: [ // InlineRedactionUrls
 *           "STRING_VALUE",
 *         ],
 *         exemptUrls: [
 *           "STRING_VALUE",
 *         ],
 *         confidenceLevel: Number("int"),
 *       },
 *     ],
 *     globalEnforcedUrls: [ // GlobalInlineRedactionUrls
 *       "STRING_VALUE",
 *     ],
 *     globalExemptUrls: [
 *       "STRING_VALUE",
 *     ],
 *     globalConfidenceLevel: Number("int"),
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataProtectionSettingsResponse
 * //   dataProtectionSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDataProtectionSettingsCommandInput - {@link CreateDataProtectionSettingsCommandInput}
 * @returns {@link CreateDataProtectionSettingsCommandOutput}
 * @see {@link CreateDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateDataProtectionSettingsCommandOutput} for command's `response` shape.
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
export class CreateDataProtectionSettingsCommand extends $Command
  .classBuilder<
    CreateDataProtectionSettingsCommandInput,
    CreateDataProtectionSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "CreateDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "CreateDataProtectionSettingsCommand")
  .sc(CreateDataProtectionSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataProtectionSettingsRequest;
      output: CreateDataProtectionSettingsResponse;
    };
    sdk: {
      input: CreateDataProtectionSettingsCommandInput;
      output: CreateDataProtectionSettingsCommandOutput;
    };
  };
}
