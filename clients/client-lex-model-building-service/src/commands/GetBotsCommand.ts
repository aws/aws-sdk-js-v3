// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBotsRequest, GetBotsResponse } from "../models/models_0";
import { GetBots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBotsCommand}.
 */
export interface GetBotsCommandInput extends GetBotsRequest {}
/**
 * @public
 *
 * The output of {@link GetBotsCommand}.
 */
export interface GetBotsCommandOutput extends GetBotsResponse, __MetadataBearer {}

/**
 * Returns bot information as follows:
 *
 * - If you provide the `nameContains` field, the response includes information for the `$LATEST` version of all bots whose name contains the specified string.
 * - If you don't specify the `nameContains` field, the operation returns information about the `$LATEST` version of all of your bots.
 *
 * This operation requires permission for the `lex:GetBots` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetBotsCommand(input);
 * const response = await client.send(command);
 * // { // GetBotsResponse
 * //   bots: [ // BotMetadataList
 * //     { // BotMetadata
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "BUILDING" || "READY" || "READY_BASIC_TESTING" || "FAILED" || "NOT_BUILT",
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       createdDate: new Date("TIMESTAMP"),
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBotsCommandInput - {@link GetBotsCommandInput}
 * @returns {@link GetBotsCommandOutput}
 * @see {@link GetBotsCommandInput} for command's `input` shape.
 * @see {@link GetBotsCommandOutput} for command's `response` shape.
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
 * @example To get a list of bots
 * ```javascript
 * // This example shows how to get a list of all of the bots in your account.
 * const input = {
 *   maxResults: 5,
 *   nextToken: ""
 * };
 * const command = new GetBotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   bots: [
 *     {
 *       createdDate: 1.494360160133E9,
 *       description: "Orders a pizza from a local pizzeria.",
 *       lastUpdatedDate: 1.494360160133E9,
 *       name: "DocOrderPizzaBot",
 *       status: "NOT_BUILT",
 *       version: "$LATEST"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBotsCommand extends command<GetBotsCommandInput, GetBotsCommandOutput>(
  _ep0,
  _mw0,
  "GetBots",
  GetBots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotsRequest;
      output: GetBotsResponse;
    };
    sdk: {
      input: GetBotsCommandInput;
      output: GetBotsCommandOutput;
    };
  };
}
