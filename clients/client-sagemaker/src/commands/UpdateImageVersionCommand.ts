// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateImageVersionRequest, UpdateImageVersionResponse } from "../models/models_4";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateImageVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateImageVersionCommand}.
 */
export interface UpdateImageVersionCommandInput extends UpdateImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageVersionCommand}.
 */
export interface UpdateImageVersionCommandOutput extends UpdateImageVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of a SageMaker AI image version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateImageVersionRequest
 *   ImageName: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE",
 *   Version: Number("int"),
 *   AliasesToAdd: [ // SageMakerImageVersionAliases
 *     "STRING_VALUE",
 *   ],
 *   AliasesToDelete: [
 *     "STRING_VALUE",
 *   ],
 *   VendorGuidance: "NOT_PROVIDED" || "STABLE" || "TO_BE_ARCHIVED" || "ARCHIVED",
 *   JobType: "TRAINING" || "INFERENCE" || "NOTEBOOK_KERNEL",
 *   MLFramework: "STRING_VALUE",
 *   ProgrammingLang: "STRING_VALUE",
 *   Processor: "CPU" || "GPU",
 *   Horovod: true || false,
 *   ReleaseNotes: "STRING_VALUE",
 * };
 * const command = new UpdateImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageVersionResponse
 * //   ImageVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImageVersionCommandInput - {@link UpdateImageVersionCommandInput}
 * @returns {@link UpdateImageVersionCommandOutput}
 * @see {@link UpdateImageVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateImageVersionCommandOutput} for command's `response` shape.
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
export class UpdateImageVersionCommand extends $Command
  .classBuilder<
    UpdateImageVersionCommandInput,
    UpdateImageVersionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "UpdateImageVersion", {})
  .n("SageMakerClient", "UpdateImageVersionCommand")
  .sc(UpdateImageVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImageVersionRequest;
      output: UpdateImageVersionResponse;
    };
    sdk: {
      input: UpdateImageVersionCommandInput;
      output: UpdateImageVersionCommandOutput;
    };
  };
}
