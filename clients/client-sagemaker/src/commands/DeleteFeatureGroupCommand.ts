// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFeatureGroupRequest } from "../models/models_2";
import { de_DeleteFeatureGroupCommand, se_DeleteFeatureGroupCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFeatureGroupCommand}.
 */
export interface DeleteFeatureGroupCommandInput extends DeleteFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFeatureGroupCommand}.
 */
export interface DeleteFeatureGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete the <code>FeatureGroup</code> and any data that was written to the
 *             <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from
 *          the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p>
 *          <p>Data written into the <code>OfflineStore</code> will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your
 *             <code>OfflineStore</code> are not deleted. </p>
 *          <p>Note that it can take approximately 10-15 minutes to delete an <code>OnlineStore</code>
 *             <code>FeatureGroup</code> with the <code>InMemory</code>
 *             <code>StorageType</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFeatureGroupCommandInput - {@link DeleteFeatureGroupCommandInput}
 * @returns {@link DeleteFeatureGroupCommandOutput}
 * @see {@link DeleteFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteFeatureGroupCommand extends $Command
  .classBuilder<
    DeleteFeatureGroupCommandInput,
    DeleteFeatureGroupCommandOutput,
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
  .s("SageMaker", "DeleteFeatureGroup", {})
  .n("SageMakerClient", "DeleteFeatureGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFeatureGroupCommand)
  .de(de_DeleteFeatureGroupCommand)
  .build() {}
