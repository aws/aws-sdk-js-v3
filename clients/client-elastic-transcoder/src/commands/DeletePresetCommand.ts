// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePresetRequest, DeletePresetResponse } from "../models/models_0";
import { de_DeletePresetCommand, se_DeletePresetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePresetCommand}.
 */
export interface DeletePresetCommandInput extends DeletePresetRequest {}
/**
 * @public
 *
 * The output of {@link DeletePresetCommand}.
 */
export interface DeletePresetCommandOutput extends DeletePresetResponse, __MetadataBearer {}

/**
 * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p>
 *         <note>
 *             <p>You can't delete the default presets that are included with Elastic Transcoder.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, DeletePresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, DeletePresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // DeletePresetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeletePresetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePresetCommandInput - {@link DeletePresetCommandInput}
 * @returns {@link DeletePresetCommandOutput}
 * @see {@link DeletePresetCommandInput} for command's `input` shape.
 * @see {@link DeletePresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 *
 * @public
 */
export class DeletePresetCommand extends $Command
  .classBuilder<
    DeletePresetCommandInput,
    DeletePresetCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EtsCustomerService", "DeletePreset", {})
  .n("ElasticTranscoderClient", "DeletePresetCommand")
  .f(void 0, void 0)
  .ser(se_DeletePresetCommand)
  .de(de_DeletePresetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePresetRequest;
      output: {};
    };
    sdk: {
      input: DeletePresetCommandInput;
      output: DeletePresetCommandOutput;
    };
  };
}
