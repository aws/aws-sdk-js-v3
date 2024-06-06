// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkforceRequest, DeleteWorkforceResponse } from "../models/models_2";
import { de_DeleteWorkforceCommand, se_DeleteWorkforceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkforceCommand}.
 */
export interface DeleteWorkforceCommandInput extends DeleteWorkforceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkforceCommand}.
 */
export interface DeleteWorkforceCommandOutput extends DeleteWorkforceResponse, __MetadataBearer {}

/**
 * <p>Use this operation to delete a workforce.</p>
 *          <p>If you want to create a new workforce in an Amazon Web Services Region where
 *       a workforce already exists, use this operation to delete the
 *       existing workforce and then use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateWorkforce.html">CreateWorkforce</a>
 *       to create a new workforce.</p>
 *          <important>
 *             <p>If a private workforce contains one or more work teams, you must use
 *                 the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a>
 *             operation to delete all work teams before you delete the workforce.
 *             If you try to delete a workforce that contains one or more work teams,
 *             you will recieve a <code>ResourceInUse</code> error.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteWorkforceRequest
 *   WorkforceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkforceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkforceCommandInput - {@link DeleteWorkforceCommandInput}
 * @returns {@link DeleteWorkforceCommandOutput}
 * @see {@link DeleteWorkforceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteWorkforceCommand extends $Command
  .classBuilder<
    DeleteWorkforceCommandInput,
    DeleteWorkforceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteWorkforce", {})
  .n("SageMakerClient", "DeleteWorkforceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkforceCommand)
  .de(de_DeleteWorkforceCommand)
  .build() {}
