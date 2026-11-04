// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBuiltinIntentRequest, GetBuiltinIntentResponse } from "../models/models_0";
import { GetBuiltinIntent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBuiltinIntentCommand}.
 */
export interface GetBuiltinIntentCommandInput extends GetBuiltinIntentRequest {}
/**
 * @public
 *
 * The output of {@link GetBuiltinIntentCommand}.
 */
export interface GetBuiltinIntentCommandOutput extends GetBuiltinIntentResponse, __MetadataBearer {}

/**
 * Returns information about a built-in intent.
 *
 * This operation requires permission for the `lex:GetBuiltinIntent` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBuiltinIntentRequest
 *   signature: "STRING_VALUE", // required
 * };
 * const command = new GetBuiltinIntentCommand(input);
 * const response = await client.send(command);
 * // { // GetBuiltinIntentResponse
 * //   signature: "STRING_VALUE",
 * //   supportedLocales: [ // LocaleList
 * //     "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   ],
 * //   slots: [ // BuiltinIntentSlotList
 * //     { // BuiltinIntentSlot
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBuiltinIntentCommandInput - {@link GetBuiltinIntentCommandInput}
 * @returns {@link GetBuiltinIntentCommandOutput}
 * @see {@link GetBuiltinIntentCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal Amazon Lex error occurred. Try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a limit. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource and try again.
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class GetBuiltinIntentCommand extends command<GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput>(
  _ep0,
  _mw0,
  "GetBuiltinIntent",
  GetBuiltinIntent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBuiltinIntentRequest;
      output: GetBuiltinIntentResponse;
    };
    sdk: {
      input: GetBuiltinIntentCommandInput;
      output: GetBuiltinIntentCommandOutput;
    };
  };
}
