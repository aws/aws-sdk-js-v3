// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBotVersionsRequest, GetBotVersionsResponse } from "../models/models_0";
import { GetBotVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBotVersionsCommand}.
 */
export interface GetBotVersionsCommandInput extends GetBotVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetBotVersionsCommand}.
 */
export interface GetBotVersionsCommandOutput extends GetBotVersionsResponse, __MetadataBearer {}

/**
 * Gets information about all of the versions of a bot.
 *
 * The `GetBotVersions` operation returns a `BotMetadata` object for each version of a bot. For example, if a bot has three numbered versions, the `GetBotVersions` operation returns four `BotMetadata` objects in the response, one for each numbered version and one for the `$LATEST` version.
 *
 * The `GetBotVersions` operation always returns at least one version, the `$LATEST` version.
 *
 * This operation requires permissions for the `lex:GetBotVersions` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotVersionsRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetBotVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetBotVersionsResponse
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
 * @param GetBotVersionsCommandInput - {@link GetBotVersionsCommandInput}
 * @returns {@link GetBotVersionsCommandOutput}
 * @see {@link GetBotVersionsCommandInput} for command's `input` shape.
 * @see {@link GetBotVersionsCommandOutput} for command's `response` shape.
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
export class GetBotVersionsCommand extends command<GetBotVersionsCommandInput, GetBotVersionsCommandOutput>(
  _ep0,
  _mw0,
  "GetBotVersions",
  GetBotVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotVersionsRequest;
      output: GetBotVersionsResponse;
    };
    sdk: {
      input: GetBotVersionsCommandInput;
      output: GetBotVersionsCommandOutput;
    };
  };
}
