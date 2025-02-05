// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeNodeFromTemplateJobRequest,
  DescribeNodeFromTemplateJobResponse,
  DescribeNodeFromTemplateJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_DescribeNodeFromTemplateJobCommand,
  se_DescribeNodeFromTemplateJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNodeFromTemplateJobCommand}.
 */
export interface DescribeNodeFromTemplateJobCommandInput extends DescribeNodeFromTemplateJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodeFromTemplateJobCommand}.
 */
export interface DescribeNodeFromTemplateJobCommandOutput
  extends DescribeNodeFromTemplateJobResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a job to create a camera stream node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeNodeFromTemplateJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeNodeFromTemplateJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PanoramaClient(config);
 * const input = { // DescribeNodeFromTemplateJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNodeFromTemplateJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNodeFromTemplateJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * //   StatusMessage: "STRING_VALUE", // required
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //   OutputPackageName: "STRING_VALUE", // required
 * //   OutputPackageVersion: "STRING_VALUE", // required
 * //   NodeName: "STRING_VALUE", // required
 * //   NodeDescription: "STRING_VALUE",
 * //   TemplateType: "STRING_VALUE", // required
 * //   TemplateParameters: { // TemplateParametersMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   JobTags: [ // JobTagsList
 * //     { // JobResourceTags
 * //       ResourceType: "STRING_VALUE", // required
 * //       Tags: { // TagMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeNodeFromTemplateJobCommandInput - {@link DescribeNodeFromTemplateJobCommandInput}
 * @returns {@link DescribeNodeFromTemplateJobCommandOutput}
 * @see {@link DescribeNodeFromTemplateJobCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeFromTemplateJobCommandOutput} for command's `response` shape.
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
export class DescribeNodeFromTemplateJobCommand extends $Command
  .classBuilder<
    DescribeNodeFromTemplateJobCommandInput,
    DescribeNodeFromTemplateJobCommandOutput,
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
  .s("OmniCloudServiceLambda", "DescribeNodeFromTemplateJob", {})
  .n("PanoramaClient", "DescribeNodeFromTemplateJobCommand")
  .f(void 0, DescribeNodeFromTemplateJobResponseFilterSensitiveLog)
  .ser(se_DescribeNodeFromTemplateJobCommand)
  .de(de_DescribeNodeFromTemplateJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNodeFromTemplateJobRequest;
      output: DescribeNodeFromTemplateJobResponse;
    };
    sdk: {
      input: DescribeNodeFromTemplateJobCommandInput;
      output: DescribeNodeFromTemplateJobCommandOutput;
    };
  };
}
