// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBotAliasRequest, GetBotAliasResponse } from "../models/models_0";
import { GetBotAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBotAliasCommand}.
 */
export interface GetBotAliasCommandInput extends GetBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetBotAliasCommand}.
 */
export interface GetBotAliasCommandOutput extends GetBotAliasResponse, __MetadataBearer {}

/**
 * Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases.
 *
 * This operation requires permissions for the `lex:GetBotAlias` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotAliasRequest
 *   name: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 * };
 * const command = new GetBotAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetBotAliasResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   checksum: "STRING_VALUE",
 * //   conversationLogs: { // ConversationLogsResponse
 * //     logSettings: [ // LogSettingsResponseList
 * //       { // LogSettingsResponse
 * //         logType: "AUDIO" || "TEXT",
 * //         destination: "CLOUDWATCH_LOGS" || "S3",
 * //         kmsKeyArn: "STRING_VALUE",
 * //         resourceArn: "STRING_VALUE",
 * //         resourcePrefix: "STRING_VALUE",
 * //       },
 * //     ],
 * //     iamRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBotAliasCommandInput - {@link GetBotAliasCommandInput}
 * @returns {@link GetBotAliasCommandOutput}
 * @see {@link GetBotAliasCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasCommandOutput} for command's `response` shape.
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
export class GetBotAliasCommand extends command<GetBotAliasCommandInput, GetBotAliasCommandOutput>(
  _ep0,
  _mw0,
  "GetBotAlias",
  GetBotAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotAliasRequest;
      output: GetBotAliasResponse;
    };
    sdk: {
      input: GetBotAliasCommandInput;
      output: GetBotAliasCommandOutput;
    };
  };
}
