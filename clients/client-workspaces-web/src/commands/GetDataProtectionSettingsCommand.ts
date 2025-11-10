// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataProtectionSettingsRequest, GetDataProtectionSettingsResponse } from "../models/models_0";
import { GetDataProtectionSettings } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataProtectionSettingsCommand}.
 */
export interface GetDataProtectionSettingsCommandInput extends GetDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataProtectionSettingsCommand}.
 */
export interface GetDataProtectionSettingsCommandOutput extends GetDataProtectionSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets the data protection settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetDataProtectionSettingsRequest
 *   dataProtectionSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataProtectionSettingsResponse
 * //   dataProtectionSettings: { // DataProtectionSettings
 * //     dataProtectionSettingsArn: "STRING_VALUE", // required
 * //     inlineRedactionConfiguration: { // InlineRedactionConfiguration
 * //       inlineRedactionPatterns: [ // InlineRedactionPatterns // required
 * //         { // InlineRedactionPattern
 * //           builtInPatternId: "STRING_VALUE",
 * //           customPattern: { // CustomPattern
 * //             patternName: "STRING_VALUE", // required
 * //             patternRegex: "STRING_VALUE", // required
 * //             patternDescription: "STRING_VALUE",
 * //             keywordRegex: "STRING_VALUE",
 * //           },
 * //           redactionPlaceHolder: { // RedactionPlaceHolder
 * //             redactionPlaceHolderType: "STRING_VALUE", // required
 * //             redactionPlaceHolderText: "STRING_VALUE",
 * //           },
 * //           enforcedUrls: [ // InlineRedactionUrls
 * //             "STRING_VALUE",
 * //           ],
 * //           exemptUrls: [
 * //             "STRING_VALUE",
 * //           ],
 * //           confidenceLevel: Number("int"),
 * //         },
 * //       ],
 * //       globalEnforcedUrls: [ // GlobalInlineRedactionUrls
 * //         "STRING_VALUE",
 * //       ],
 * //       globalExemptUrls: [
 * //         "STRING_VALUE",
 * //       ],
 * //       globalConfidenceLevel: Number("int"),
 * //     },
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
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
 * @param GetDataProtectionSettingsCommandInput - {@link GetDataProtectionSettingsCommandInput}
 * @returns {@link GetDataProtectionSettingsCommandOutput}
 * @see {@link GetDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataProtectionSettingsCommandOutput} for command's `response` shape.
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
export class GetDataProtectionSettingsCommand extends $Command
  .classBuilder<
    GetDataProtectionSettingsCommandInput,
    GetDataProtectionSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "GetDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "GetDataProtectionSettingsCommand")
  .sc(GetDataProtectionSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataProtectionSettingsRequest;
      output: GetDataProtectionSettingsResponse;
    };
    sdk: {
      input: GetDataProtectionSettingsCommandInput;
      output: GetDataProtectionSettingsCommandOutput;
    };
  };
}
