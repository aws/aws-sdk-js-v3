// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataProtectionSettingsRequest, CreateDataProtectionSettingsResponse } from "../models/models_0";
import { CreateDataProtectionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a data protection settings resource that can be associated with a web portal.
 *
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
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class CreateDataProtectionSettingsCommand extends command<CreateDataProtectionSettingsCommandInput, CreateDataProtectionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataProtectionSettings",
  CreateDataProtectionSettings$
) {
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
