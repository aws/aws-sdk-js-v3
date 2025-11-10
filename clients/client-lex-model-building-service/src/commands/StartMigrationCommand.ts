// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { StartMigrationRequest, StartMigrationResponse } from "../models/models_0";
import { StartMigration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMigrationCommand}.
 */
export interface StartMigrationCommandInput extends StartMigrationRequest {}
/**
 * @public
 *
 * The output of {@link StartMigrationCommand}.
 */
export interface StartMigrationCommandOutput extends StartMigrationResponse, __MetadataBearer {}

/**
 * <p>Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when
 *       you want to take advantage of the new features of Amazon Lex V2.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex
 *         developer guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, StartMigrationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, StartMigrationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // StartMigrationRequest
 *   v1BotName: "STRING_VALUE", // required
 *   v1BotVersion: "STRING_VALUE", // required
 *   v2BotName: "STRING_VALUE", // required
 *   v2BotRole: "STRING_VALUE", // required
 *   migrationStrategy: "CREATE_NEW" || "UPDATE_EXISTING", // required
 * };
 * const command = new StartMigrationCommand(input);
 * const response = await client.send(command);
 * // { // StartMigrationResponse
 * //   v1BotName: "STRING_VALUE",
 * //   v1BotVersion: "STRING_VALUE",
 * //   v1BotLocale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   v2BotId: "STRING_VALUE",
 * //   v2BotRole: "STRING_VALUE",
 * //   migrationId: "STRING_VALUE",
 * //   migrationStrategy: "CREATE_NEW" || "UPDATE_EXISTING",
 * //   migrationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartMigrationCommandInput - {@link StartMigrationCommandInput}
 * @returns {@link StartMigrationCommandOutput}
 * @see {@link StartMigrationCommandInput} for command's `input` shape.
 * @see {@link StartMigrationCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Your IAM user or role does not have permission to call the Amazon Lex V2 APIs
 *       required to migrate your bot.</p>
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
export class StartMigrationCommand extends $Command
  .classBuilder<
    StartMigrationCommandInput,
    StartMigrationCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "StartMigration", {})
  .n("LexModelBuildingServiceClient", "StartMigrationCommand")
  .sc(StartMigration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMigrationRequest;
      output: StartMigrationResponse;
    };
    sdk: {
      input: StartMigrationCommandInput;
      output: StartMigrationCommandOutput;
    };
  };
}
