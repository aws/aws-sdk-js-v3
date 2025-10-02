// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrainedModelOutputRequest } from "../models/models_0";
import { de_DeleteTrainedModelOutputCommand, se_DeleteTrainedModelOutputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrainedModelOutputCommand}.
 */
export interface DeleteTrainedModelOutputCommandInput extends DeleteTrainedModelOutputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrainedModelOutputCommand}.
 */
export interface DeleteTrainedModelOutputCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the model artifacts stored by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteTrainedModelOutputCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteTrainedModelOutputCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteTrainedModelOutputRequest
 *   trainedModelArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   versionIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteTrainedModelOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrainedModelOutputCommandInput - {@link DeleteTrainedModelOutputCommandInput}
 * @returns {@link DeleteTrainedModelOutputCommandOutput}
 * @see {@link DeleteTrainedModelOutputCommandInput} for command's `input` shape.
 * @see {@link DeleteTrainedModelOutputCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
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
export class DeleteTrainedModelOutputCommand extends $Command
  .classBuilder<
    DeleteTrainedModelOutputCommandInput,
    DeleteTrainedModelOutputCommandOutput,
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
  .s("AWSStarkControlService", "DeleteTrainedModelOutput", {})
  .n("CleanRoomsMLClient", "DeleteTrainedModelOutputCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrainedModelOutputCommand)
  .de(de_DeleteTrainedModelOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrainedModelOutputRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrainedModelOutputCommandInput;
      output: DeleteTrainedModelOutputCommandOutput;
    };
  };
}
