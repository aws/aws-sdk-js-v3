// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateNodeFromTemplateJobRequest, CreateNodeFromTemplateJobResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { CreateNodeFromTemplateJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNodeFromTemplateJobCommand}.
 */
export interface CreateNodeFromTemplateJobCommandInput extends CreateNodeFromTemplateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateNodeFromTemplateJobCommand}.
 */
export interface CreateNodeFromTemplateJobCommandOutput extends CreateNodeFromTemplateJobResponse, __MetadataBearer {}

/**
 * <p>Creates a camera stream node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, CreateNodeFromTemplateJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, CreateNodeFromTemplateJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // CreateNodeFromTemplateJobRequest
 *   TemplateType: "STRING_VALUE", // required
 *   OutputPackageName: "STRING_VALUE", // required
 *   OutputPackageVersion: "STRING_VALUE", // required
 *   NodeName: "STRING_VALUE", // required
 *   NodeDescription: "STRING_VALUE",
 *   TemplateParameters: { // TemplateParametersMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   JobTags: [ // JobTagsList
 *     { // JobResourceTags
 *       ResourceType: "STRING_VALUE", // required
 *       Tags: { // TagMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateNodeFromTemplateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateNodeFromTemplateJobResponse
 * //   JobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateNodeFromTemplateJobCommandInput - {@link CreateNodeFromTemplateJobCommandInput}
 * @returns {@link CreateNodeFromTemplateJobCommandOutput}
 * @see {@link CreateNodeFromTemplateJobCommandInput} for command's `input` shape.
 * @see {@link CreateNodeFromTemplateJobCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class CreateNodeFromTemplateJobCommand extends $Command
  .classBuilder<
    CreateNodeFromTemplateJobCommandInput,
    CreateNodeFromTemplateJobCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "CreateNodeFromTemplateJob", {})
  .n("PanoramaClient", "CreateNodeFromTemplateJobCommand")
  .sc(CreateNodeFromTemplateJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNodeFromTemplateJobRequest;
      output: CreateNodeFromTemplateJobResponse;
    };
    sdk: {
      input: CreateNodeFromTemplateJobCommandInput;
      output: CreateNodeFromTemplateJobCommandOutput;
    };
  };
}
