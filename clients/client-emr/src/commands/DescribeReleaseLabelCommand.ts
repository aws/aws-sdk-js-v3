// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReleaseLabelInput, DescribeReleaseLabelOutput } from "../models/models_0";
import { de_DescribeReleaseLabelCommand, se_DescribeReleaseLabelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReleaseLabelCommand}.
 */
export interface DescribeReleaseLabelCommandInput extends DescribeReleaseLabelInput {}
/**
 * @public
 *
 * The output of {@link DescribeReleaseLabelCommand}.
 */
export interface DescribeReleaseLabelCommandOutput extends DescribeReleaseLabelOutput, __MetadataBearer {}

/**
 * <p>Provides Amazon EMR release label details, such as the releases available the
 *          Region where the API request is run, and the available applications for a specific Amazon EMR release label. Can also list Amazon EMR releases that support a
 *          specified version of Spark.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeReleaseLabelCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeReleaseLabelCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // DescribeReleaseLabelInput
 *   ReleaseLabel: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeReleaseLabelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReleaseLabelOutput
 * //   ReleaseLabel: "STRING_VALUE",
 * //   Applications: [ // SimplifiedApplicationList
 * //     { // SimplifiedApplication
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   AvailableOSReleases: [ // OSReleaseList
 * //     { // OSRelease
 * //       Label: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReleaseLabelCommandInput - {@link DescribeReleaseLabelCommandInput}
 * @returns {@link DescribeReleaseLabelCommandOutput}
 * @see {@link DescribeReleaseLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeReleaseLabelCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class DescribeReleaseLabelCommand extends $Command
  .classBuilder<
    DescribeReleaseLabelCommandInput,
    DescribeReleaseLabelCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "DescribeReleaseLabel", {})
  .n("EMRClient", "DescribeReleaseLabelCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReleaseLabelCommand)
  .de(de_DescribeReleaseLabelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReleaseLabelInput;
      output: DescribeReleaseLabelOutput;
    };
    sdk: {
      input: DescribeReleaseLabelCommandInput;
      output: DescribeReleaseLabelCommandOutput;
    };
  };
}
