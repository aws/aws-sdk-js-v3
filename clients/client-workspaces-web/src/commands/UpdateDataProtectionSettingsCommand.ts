// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDataProtectionSettingsRequest,
  UpdateDataProtectionSettingsRequestFilterSensitiveLog,
  UpdateDataProtectionSettingsResponse,
  UpdateDataProtectionSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateDataProtectionSettingsCommand,
  se_UpdateDataProtectionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataProtectionSettingsCommand}.
 */
export interface UpdateDataProtectionSettingsCommandInput extends UpdateDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataProtectionSettingsCommand}.
 */
export interface UpdateDataProtectionSettingsCommandOutput
  extends UpdateDataProtectionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Updates data protection settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateDataProtectionSettingsRequest
 *   dataProtectionSettingsArn: "STRING_VALUE", // required
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
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataProtectionSettingsResponse
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
 * @param UpdateDataProtectionSettingsCommandInput - {@link UpdateDataProtectionSettingsCommandInput}
 * @returns {@link UpdateDataProtectionSettingsCommandOutput}
 * @see {@link UpdateDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataProtectionSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateDataProtectionSettingsCommand extends $Command
  .classBuilder<
    UpdateDataProtectionSettingsCommandInput,
    UpdateDataProtectionSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "UpdateDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "UpdateDataProtectionSettingsCommand")
  .f(UpdateDataProtectionSettingsRequestFilterSensitiveLog, UpdateDataProtectionSettingsResponseFilterSensitiveLog)
  .ser(se_UpdateDataProtectionSettingsCommand)
  .de(de_UpdateDataProtectionSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataProtectionSettingsRequest;
      output: UpdateDataProtectionSettingsResponse;
    };
    sdk: {
      input: UpdateDataProtectionSettingsCommandInput;
      output: UpdateDataProtectionSettingsCommandOutput;
    };
  };
}
