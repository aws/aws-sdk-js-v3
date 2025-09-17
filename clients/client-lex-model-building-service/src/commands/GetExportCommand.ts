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
import { GetExportRequest, GetExportResponse } from "../models/models_0";
import { de_GetExportCommand, se_GetExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportCommand}.
 */
export interface GetExportCommandInput extends GetExportRequest {}
/**
 * @public
 *
 * The output of {@link GetExportCommand}.
 */
export interface GetExportCommandOutput extends GetExportResponse, __MetadataBearer {}

/**
 * <p>Exports the contents of a Amazon Lex resource in a specified format.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetExportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetExportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetExportRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 *   resourceType: "BOT" || "INTENT" || "SLOT_TYPE", // required
 *   exportType: "ALEXA_SKILLS_KIT" || "LEX", // required
 * };
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * // { // GetExportResponse
 * //   name: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   resourceType: "BOT" || "INTENT" || "SLOT_TYPE",
 * //   exportType: "ALEXA_SKILLS_KIT" || "LEX",
 * //   exportStatus: "IN_PROGRESS" || "READY" || "FAILED",
 * //   failureReason: "STRING_VALUE",
 * //   url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExportCommandInput - {@link GetExportCommandInput}
 * @returns {@link GetExportCommandOutput}
 * @see {@link GetExportCommandInput} for command's `input` shape.
 * @see {@link GetExportCommandOutput} for command's `response` shape.
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
export class GetExportCommand extends $Command
  .classBuilder<
    GetExportCommandInput,
    GetExportCommandOutput,
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
  .s("AWSDeepSenseModelBuildingService", "GetExport", {})
  .n("LexModelBuildingServiceClient", "GetExportCommand")
  .f(void 0, void 0)
  .ser(se_GetExportCommand)
  .de(de_GetExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportRequest;
      output: GetExportResponse;
    };
    sdk: {
      input: GetExportCommandInput;
      output: GetExportCommandOutput;
    };
  };
}
