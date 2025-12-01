// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSpaceRequest } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteSpace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSpaceCommand}.
 */
export interface DeleteSpaceCommandInput extends DeleteSpaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSpaceCommand}.
 */
export interface DeleteSpaceCommandOutput extends __MetadataBearer {}

/**
 * <p>Used to delete a space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteSpaceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteSpaceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteSpaceRequest
 *   DomainId: "STRING_VALUE", // required
 *   SpaceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSpaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSpaceCommandInput - {@link DeleteSpaceCommandInput}
 * @returns {@link DeleteSpaceCommandOutput}
 * @see {@link DeleteSpaceCommandInput} for command's `input` shape.
 * @see {@link DeleteSpaceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
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
export class DeleteSpaceCommand extends $Command
  .classBuilder<
    DeleteSpaceCommandInput,
    DeleteSpaceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteSpace", {})
  .n("SageMakerClient", "DeleteSpaceCommand")
  .sc(DeleteSpace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSpaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteSpaceCommandInput;
      output: DeleteSpaceCommandOutput;
    };
  };
}
