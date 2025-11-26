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
import type { GetBotVersionsRequest, GetBotVersionsResponse } from "../models/models_0";
import { GetBotVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>GetBotVersions</code> operation returns a
 *         <code>BotMetadata</code> object for each version of a bot. For example,
 *       if a bot has three numbered versions, the <code>GetBotVersions</code>
 *       operation returns four <code>BotMetadata</code> objects in the response,
 *       one for each numbered version and one for the <code>$LATEST</code>
 *       version. </p>
 *          <p>The <code>GetBotVersions</code> operation always returns at least
 *       one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotVersions</code> action.</p>
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class GetBotVersionsCommand extends $Command
  .classBuilder<
    GetBotVersionsCommandInput,
    GetBotVersionsCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetBotVersions", {})
  .n("LexModelBuildingServiceClient", "GetBotVersionsCommand")
  .sc(GetBotVersions)
  .build() {
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
