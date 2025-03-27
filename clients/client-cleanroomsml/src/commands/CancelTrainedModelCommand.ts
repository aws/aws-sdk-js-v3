// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelTrainedModelRequest } from "../models/models_0";
import { de_CancelTrainedModelCommand, se_CancelTrainedModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelTrainedModelCommand}.
 */
export interface CancelTrainedModelCommandInput extends CancelTrainedModelRequest {}
/**
 * @public
 *
 * The output of {@link CancelTrainedModelCommand}.
 */
export interface CancelTrainedModelCommandOutput extends __MetadataBearer {}

/**
 * <p>Submits a request to cancel the trained model job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CancelTrainedModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CancelTrainedModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CancelTrainedModelRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE", // required
 * };
 * const command = new CancelTrainedModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTrainedModelCommandInput - {@link CancelTrainedModelCommandInput}
 * @returns {@link CancelTrainedModelCommandOutput}
 * @see {@link CancelTrainedModelCommandInput} for command's `input` shape.
 * @see {@link CancelTrainedModelCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CancelTrainedModelCommand extends $Command
  .classBuilder<
    CancelTrainedModelCommandInput,
    CancelTrainedModelCommandOutput,
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
  .s("AWSStarkControlService", "CancelTrainedModel", {})
  .n("CleanRoomsMLClient", "CancelTrainedModelCommand")
  .f(void 0, void 0)
  .ser(se_CancelTrainedModelCommand)
  .de(de_CancelTrainedModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTrainedModelRequest;
      output: {};
    };
    sdk: {
      input: CancelTrainedModelCommandInput;
      output: CancelTrainedModelCommandOutput;
    };
  };
}
