// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBuiltinIntentsRequest, GetBuiltinIntentsResponse } from "../models/models_0";
import { GetBuiltinIntents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBuiltinIntentsCommand}.
 */
export interface GetBuiltinIntentsCommandInput extends GetBuiltinIntentsRequest {}
/**
 * @public
 *
 * The output of {@link GetBuiltinIntentsCommand}.
 */
export interface GetBuiltinIntentsCommandOutput extends GetBuiltinIntentsResponse, __MetadataBearer {}

/**
 * Gets a list of built-in intents that meet the specified criteria.
 *
 * This operation requires permission for the `lex:GetBuiltinIntents` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBuiltinIntentsRequest
 *   locale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 *   signatureContains: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetBuiltinIntentsCommand(input);
 * const response = await client.send(command);
 * // { // GetBuiltinIntentsResponse
 * //   intents: [ // BuiltinIntentMetadataList
 * //     { // BuiltinIntentMetadata
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
 * @param GetBuiltinIntentsCommandInput - {@link GetBuiltinIntentsCommandInput}
 * @returns {@link GetBuiltinIntentsCommandOutput}
 * @see {@link GetBuiltinIntentsCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentsCommandOutput} for command's `response` shape.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class GetBuiltinIntentsCommand extends command<GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput>(
  _ep0,
  _mw0,
  "GetBuiltinIntents",
  GetBuiltinIntents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBuiltinIntentsRequest;
      output: GetBuiltinIntentsResponse;
    };
    sdk: {
      input: GetBuiltinIntentsCommandInput;
      output: GetBuiltinIntentsCommandOutput;
    };
  };
}
