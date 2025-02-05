// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredModelAlgorithmRequest } from "../models/models_0";
import {
  de_DeleteConfiguredModelAlgorithmCommand,
  se_DeleteConfiguredModelAlgorithmCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredModelAlgorithmCommand}.
 */
export interface DeleteConfiguredModelAlgorithmCommandInput extends DeleteConfiguredModelAlgorithmRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredModelAlgorithmCommand}.
 */
export interface DeleteConfiguredModelAlgorithmCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a configured model algorithm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteConfiguredModelAlgorithmCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteConfiguredModelAlgorithmCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteConfiguredModelAlgorithmRequest
 *   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredModelAlgorithmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredModelAlgorithmCommandInput - {@link DeleteConfiguredModelAlgorithmCommandInput}
 * @returns {@link DeleteConfiguredModelAlgorithmCommandOutput}
 * @see {@link DeleteConfiguredModelAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredModelAlgorithmCommandOutput} for command's `response` shape.
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
export class DeleteConfiguredModelAlgorithmCommand extends $Command
  .classBuilder<
    DeleteConfiguredModelAlgorithmCommandInput,
    DeleteConfiguredModelAlgorithmCommandOutput,
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
  .s("AWSStarkControlService", "DeleteConfiguredModelAlgorithm", {})
  .n("CleanRoomsMLClient", "DeleteConfiguredModelAlgorithmCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredModelAlgorithmCommand)
  .de(de_DeleteConfiguredModelAlgorithmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredModelAlgorithmRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredModelAlgorithmCommandInput;
      output: DeleteConfiguredModelAlgorithmCommandOutput;
    };
  };
}
