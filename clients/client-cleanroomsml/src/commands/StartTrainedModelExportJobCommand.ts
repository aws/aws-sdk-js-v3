// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTrainedModelExportJobRequest } from "../models/models_0";
import { de_StartTrainedModelExportJobCommand, se_StartTrainedModelExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTrainedModelExportJobCommand}.
 */
export interface StartTrainedModelExportJobCommandInput extends StartTrainedModelExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTrainedModelExportJobCommand}.
 */
export interface StartTrainedModelExportJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Provides the information necessary to start a trained model export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, StartTrainedModelExportJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, StartTrainedModelExportJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // StartTrainedModelExportJobRequest
 *   name: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   outputConfiguration: { // TrainedModelExportOutputConfiguration
 *     members: [ // TrainedModelExportReceiverMembers // required
 *       { // TrainedModelExportReceiverMember
 *         accountId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new StartTrainedModelExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartTrainedModelExportJobCommandInput - {@link StartTrainedModelExportJobCommandInput}
 * @returns {@link StartTrainedModelExportJobCommandOutput}
 * @see {@link StartTrainedModelExportJobCommandInput} for command's `input` shape.
 * @see {@link StartTrainedModelExportJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class StartTrainedModelExportJobCommand extends $Command
  .classBuilder<
    StartTrainedModelExportJobCommandInput,
    StartTrainedModelExportJobCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "StartTrainedModelExportJob", {})
  .n("CleanRoomsMLClient", "StartTrainedModelExportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartTrainedModelExportJobCommand)
  .de(de_StartTrainedModelExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTrainedModelExportJobRequest;
      output: {};
    };
    sdk: {
      input: StartTrainedModelExportJobCommandInput;
      output: StartTrainedModelExportJobCommandOutput;
    };
  };
}
