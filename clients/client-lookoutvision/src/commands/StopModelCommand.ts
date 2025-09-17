// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { StopModelRequest, StopModelResponse } from "../models/models_0";
import { de_StopModelCommand, se_StopModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopModelCommand}.
 */
export interface StopModelCommandInput extends StopModelRequest {}
/**
 * @public
 *
 * The output of {@link StopModelCommand}.
 */
export interface StopModelCommandOutput extends StopModelResponse, __MetadataBearer {}

/**
 * <p>Stops the hosting of a running model. The operation might take a while to complete. To
 *          check the current status, call <a>DescribeModel</a>. </p>
 *          <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:StopModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, StopModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, StopModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // import type { LookoutVisionClientConfig } from "@aws-sdk/client-lookoutvision";
 * const config = {}; // type is LookoutVisionClientConfig
 * const client = new LookoutVisionClient(config);
 * const input = { // StopModelRequest
 *   ProjectName: "STRING_VALUE", // required
 *   ModelVersion: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StopModelCommand(input);
 * const response = await client.send(command);
 * // { // StopModelResponse
 * //   Status: "STARTING_HOSTING" || "HOSTED" || "HOSTING_FAILED" || "STOPPING_HOSTING" || "SYSTEM_UPDATING",
 * // };
 *
 * ```
 *
 * @param StopModelCommandInput - {@link StopModelCommandInput}
 * @returns {@link StopModelCommandOutput}
 * @see {@link StopModelCommandInput} for command's `input` shape.
 * @see {@link StopModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 *
 * @public
 */
export class StopModelCommand extends $Command
  .classBuilder<
    StopModelCommandInput,
    StopModelCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "StopModel", {})
  .n("LookoutVisionClient", "StopModelCommand")
  .f(void 0, void 0)
  .ser(se_StopModelCommand)
  .de(de_StopModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopModelRequest;
      output: StopModelResponse;
    };
    sdk: {
      input: StopModelCommandInput;
      output: StopModelCommandOutput;
    };
  };
}
