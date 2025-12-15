// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import type { GetBuiltinSlotTypesRequest, GetBuiltinSlotTypesResponse } from "../models/models_0";
import { GetBuiltinSlotTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBuiltinSlotTypesCommand}.
 */
export interface GetBuiltinSlotTypesCommandInput extends GetBuiltinSlotTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetBuiltinSlotTypesCommand}.
 */
export interface GetBuiltinSlotTypesCommandOutput extends GetBuiltinSlotTypesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of built-in slot types that meet the specified
 *       criteria.</p>
 *          <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
 *         Kit</i>.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltInSlotTypes</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBuiltinSlotTypesRequest
 *   locale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 *   signatureContains: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetBuiltinSlotTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetBuiltinSlotTypesResponse
 * //   slotTypes: [ // BuiltinSlotTypeMetadataList
 * //     { // BuiltinSlotTypeMetadata
 * //       signature: "STRING_VALUE",
 * //       supportedLocales: [ // LocaleList
 * //         "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBuiltinSlotTypesCommandInput - {@link GetBuiltinSlotTypesCommandInput}
 * @returns {@link GetBuiltinSlotTypesCommandOutput}
 * @see {@link GetBuiltinSlotTypesCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class GetBuiltinSlotTypesCommand extends $Command
  .classBuilder<
    GetBuiltinSlotTypesCommandInput,
    GetBuiltinSlotTypesCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetBuiltinSlotTypes", {})
  .n("LexModelBuildingServiceClient", "GetBuiltinSlotTypesCommand")
  .sc(GetBuiltinSlotTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBuiltinSlotTypesRequest;
      output: GetBuiltinSlotTypesResponse;
    };
    sdk: {
      input: GetBuiltinSlotTypesCommandInput;
      output: GetBuiltinSlotTypesCommandOutput;
    };
  };
}
