// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { DeleteLaunchRequest, DeleteLaunchResponse } from "../models/models_0";
import { de_DeleteLaunchCommand, se_DeleteLaunchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLaunchCommand}.
 */
export interface DeleteLaunchCommandInput extends DeleteLaunchRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchCommand}.
 */
export interface DeleteLaunchCommandOutput extends DeleteLaunchResponse, __MetadataBearer {}

/**
 * <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p>
 *          <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, DeleteLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, DeleteLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // DeleteLaunchRequest
 *   project: "STRING_VALUE", // required
 *   launch: "STRING_VALUE", // required
 * };
 * const command = new DeleteLaunchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLaunchCommandInput - {@link DeleteLaunchCommandInput}
 * @returns {@link DeleteLaunchCommandOutput}
 * @see {@link DeleteLaunchCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class DeleteLaunchCommand extends $Command
  .classBuilder<
    DeleteLaunchCommandInput,
    DeleteLaunchCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "DeleteLaunch", {})
  .n("EvidentlyClient", "DeleteLaunchCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLaunchCommand)
  .de(de_DeleteLaunchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLaunchRequest;
      output: {};
    };
    sdk: {
      input: DeleteLaunchCommandInput;
      output: DeleteLaunchCommandOutput;
    };
  };
}
