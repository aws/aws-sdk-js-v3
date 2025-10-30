// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAnomalyDetectorRequest } from "../models/models_0";
import { de_DeleteAnomalyDetectorCommand, se_DeleteAnomalyDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnomalyDetectorCommand}.
 */
export interface DeleteAnomalyDetectorCommandInput extends DeleteAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnomalyDetectorCommand}.
 */
export interface DeleteAnomalyDetectorCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes an anomaly detector from a workspace. This operation is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteAnomalyDetectorRequest
 *   workspaceId: "STRING_VALUE", // required
 *   anomalyDetectorId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnomalyDetectorCommandInput - {@link DeleteAnomalyDetectorCommandInput}
 * @returns {@link DeleteAnomalyDetectorCommandOutput}
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class DeleteAnomalyDetectorCommand extends $Command
  .classBuilder<
    DeleteAnomalyDetectorCommandInput,
    DeleteAnomalyDetectorCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "DeleteAnomalyDetector", {})
  .n("AmpClient", "DeleteAnomalyDetectorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAnomalyDetectorCommand)
  .de(de_DeleteAnomalyDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteAnomalyDetectorCommandInput;
      output: DeleteAnomalyDetectorCommandOutput;
    };
  };
}
