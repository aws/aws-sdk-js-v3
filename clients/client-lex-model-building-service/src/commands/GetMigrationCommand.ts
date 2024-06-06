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
import { GetMigrationRequest, GetMigrationResponse } from "../models/models_0";
import { de_GetMigrationCommand, se_GetMigrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMigrationCommand}.
 */
export interface GetMigrationCommandInput extends GetMigrationRequest {}
/**
 * @public
 *
 * The output of {@link GetMigrationCommand}.
 */
export interface GetMigrationCommandOutput extends GetMigrationResponse, __MetadataBearer {}

/**
 * <p>Provides details about an ongoing or complete migration from an
 *       Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration
 *       alerts and warnings related to the migration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetMigrationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetMigrationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetMigrationRequest
 *   migrationId: "STRING_VALUE", // required
 * };
 * const command = new GetMigrationCommand(input);
 * const response = await client.send(command);
 * // { // GetMigrationResponse
 * //   migrationId: "STRING_VALUE",
 * //   v1BotName: "STRING_VALUE",
 * //   v1BotVersion: "STRING_VALUE",
 * //   v1BotLocale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   v2BotId: "STRING_VALUE",
 * //   v2BotRole: "STRING_VALUE",
 * //   migrationStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //   migrationStrategy: "CREATE_NEW" || "UPDATE_EXISTING",
 * //   migrationTimestamp: new Date("TIMESTAMP"),
 * //   alerts: [ // MigrationAlerts
 * //     { // MigrationAlert
 * //       type: "ERROR" || "WARN",
 * //       message: "STRING_VALUE",
 * //       details: [ // MigrationAlertDetails
 * //         "STRING_VALUE",
 * //       ],
 * //       referenceURLs: [ // MigrationAlertReferenceURLs
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMigrationCommandInput - {@link GetMigrationCommandInput}
 * @returns {@link GetMigrationCommandOutput}
 * @see {@link GetMigrationCommandInput} for command's `input` shape.
 * @see {@link GetMigrationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetMigrationCommand extends $Command
  .classBuilder<
    GetMigrationCommandInput,
    GetMigrationCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "GetMigration", {})
  .n("LexModelBuildingServiceClient", "GetMigrationCommand")
  .f(void 0, void 0)
  .ser(se_GetMigrationCommand)
  .de(de_GetMigrationCommand)
  .build() {}
