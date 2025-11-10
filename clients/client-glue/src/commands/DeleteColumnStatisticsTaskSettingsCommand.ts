// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  DeleteColumnStatisticsTaskSettingsRequest,
  DeleteColumnStatisticsTaskSettingsResponse,
} from "../models/models_1";
import { DeleteColumnStatisticsTaskSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteColumnStatisticsTaskSettingsCommand}.
 */
export interface DeleteColumnStatisticsTaskSettingsCommandInput extends DeleteColumnStatisticsTaskSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteColumnStatisticsTaskSettingsCommand}.
 */
export interface DeleteColumnStatisticsTaskSettingsCommandOutput
  extends DeleteColumnStatisticsTaskSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes settings for a column statistics task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsTaskSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsTaskSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteColumnStatisticsTaskSettingsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DeleteColumnStatisticsTaskSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteColumnStatisticsTaskSettingsCommandInput - {@link DeleteColumnStatisticsTaskSettingsCommandInput}
 * @returns {@link DeleteColumnStatisticsTaskSettingsCommandOutput}
 * @see {@link DeleteColumnStatisticsTaskSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsTaskSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteColumnStatisticsTaskSettingsCommand extends $Command
  .classBuilder<
    DeleteColumnStatisticsTaskSettingsCommandInput,
    DeleteColumnStatisticsTaskSettingsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteColumnStatisticsTaskSettings", {})
  .n("GlueClient", "DeleteColumnStatisticsTaskSettingsCommand")
  .sc(DeleteColumnStatisticsTaskSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteColumnStatisticsTaskSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteColumnStatisticsTaskSettingsCommandInput;
      output: DeleteColumnStatisticsTaskSettingsCommandOutput;
    };
  };
}
