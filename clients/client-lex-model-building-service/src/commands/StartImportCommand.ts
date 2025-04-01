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
import { StartImportRequest, StartImportResponse } from "../models/models_0";
import { de_StartImportCommand, se_StartImportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportCommand}.
 */
export interface StartImportCommandInput extends StartImportRequest {}
/**
 * @public
 *
 * The output of {@link StartImportCommand}.
 */
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * <p>Starts a job to import a resource to Amazon Lex.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, StartImportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, StartImportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // StartImportRequest
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   resourceType: "BOT" || "INTENT" || "SLOT_TYPE", // required
 *   mergeStrategy: "OVERWRITE_LATEST" || "FAIL_ON_CONFLICT", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * // { // StartImportResponse
 * //   name: "STRING_VALUE",
 * //   resourceType: "BOT" || "INTENT" || "SLOT_TYPE",
 * //   mergeStrategy: "OVERWRITE_LATEST" || "FAIL_ON_CONFLICT",
 * //   importId: "STRING_VALUE",
 * //   importStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartImportCommandInput - {@link StartImportCommandInput}
 * @returns {@link StartImportCommandOutput}
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
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
export class StartImportCommand extends $Command
  .classBuilder<
    StartImportCommandInput,
    StartImportCommandOutput,
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
  .s("AWSDeepSenseModelBuildingService", "StartImport", {})
  .n("LexModelBuildingServiceClient", "StartImportCommand")
  .f(void 0, void 0)
  .ser(se_StartImportCommand)
  .de(de_StartImportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportRequest;
      output: StartImportResponse;
    };
    sdk: {
      input: StartImportCommandInput;
      output: StartImportCommandOutput;
    };
  };
}
