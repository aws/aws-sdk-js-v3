// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateActionRequest, UpdateActionResponse } from "../models/models_5";
import { de_UpdateActionCommand, se_UpdateActionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateActionCommand}.
 */
export interface UpdateActionCommandInput extends UpdateActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateActionCommand}.
 */
export interface UpdateActionCommandOutput extends UpdateActionResponse, __MetadataBearer {}

/**
 * <p>Updates an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateActionRequest
 *   ActionName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Status: "Unknown" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   Properties: { // LineageEntityParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PropertiesToRemove: [ // ListLineageEntityParameterKey
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionResponse
 * //   ActionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateActionCommandInput - {@link UpdateActionCommandInput}
 * @returns {@link UpdateActionCommandOutput}
 * @see {@link UpdateActionCommandInput} for command's `input` shape.
 * @see {@link UpdateActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class UpdateActionCommand extends $Command
  .classBuilder<
    UpdateActionCommandInput,
    UpdateActionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateAction", {})
  .n("SageMakerClient", "UpdateActionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateActionCommand)
  .de(de_UpdateActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateActionRequest;
      output: UpdateActionResponse;
    };
    sdk: {
      input: UpdateActionCommandInput;
      output: UpdateActionCommandOutput;
    };
  };
}
