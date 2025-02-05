// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateNodeFromTemplateJobRequest,
  CreateNodeFromTemplateJobRequestFilterSensitiveLog,
  CreateNodeFromTemplateJobResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_CreateNodeFromTemplateJobCommand, se_CreateNodeFromTemplateJobCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "CreateNodeFromTemplateJob", {})
  .n("PanoramaClient", "CreateNodeFromTemplateJobCommand")
  .f(CreateNodeFromTemplateJobRequestFilterSensitiveLog, void 0)
  .ser(se_CreateNodeFromTemplateJobCommand)
  .de(de_CreateNodeFromTemplateJobCommand)
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
