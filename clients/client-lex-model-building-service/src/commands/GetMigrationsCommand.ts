// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetMigrationsRequest, GetMigrationsResponse } from "../models/models_0";
import { de_GetMigrationsCommand, se_GetMigrationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMigrationsCommand}.
 */
export interface GetMigrationsCommandInput extends GetMigrationsRequest {}
/**
 * @public
 *
 * The output of {@link GetMigrationsCommand}.
 */
export interface GetMigrationsCommandOutput extends GetMigrationsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetMigrationsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetMigrationsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetMigrationsRequest
 *   sortByAttribute: "V1_BOT_NAME" || "MIGRATION_DATE_TIME",
 *   sortByOrder: "ASCENDING" || "DESCENDING",
 *   v1BotNameContains: "STRING_VALUE",
 *   migrationStatusEquals: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetMigrationsCommand(input);
 * const response = await client.send(command);
 * // { // GetMigrationsResponse
 * //   migrationSummaries: [ // MigrationSummaryList
 * //     { // MigrationSummary
 * //       migrationId: "STRING_VALUE",
 * //       v1BotName: "STRING_VALUE",
 * //       v1BotVersion: "STRING_VALUE",
 * //       v1BotLocale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //       v2BotId: "STRING_VALUE",
 * //       v2BotRole: "STRING_VALUE",
 * //       migrationStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //       migrationStrategy: "CREATE_NEW" || "UPDATE_EXISTING",
 * //       migrationTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMigrationsCommandInput - {@link GetMigrationsCommandInput}
 * @returns {@link GetMigrationsCommandOutput}
 * @see {@link GetMigrationsCommandInput} for command's `input` shape.
 * @see {@link GetMigrationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetMigrationsCommand extends $Command
  .classBuilder<
    GetMigrationsCommandInput,
    GetMigrationsCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "GetMigrations", {})
  .n("LexModelBuildingServiceClient", "GetMigrationsCommand")
  .f(void 0, void 0)
  .ser(se_GetMigrationsCommand)
  .de(de_GetMigrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMigrationsRequest;
      output: GetMigrationsResponse;
    };
    sdk: {
      input: GetMigrationsCommandInput;
      output: GetMigrationsCommandOutput;
    };
  };
}
