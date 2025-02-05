// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLinkInput, UpdateLinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_UpdateLinkCommand, se_UpdateLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLinkCommand}.
 */
export interface UpdateLinkCommandInput extends UpdateLinkInput {}
/**
 * @public
 *
 * The output of {@link UpdateLinkCommand}.
 */
export interface UpdateLinkCommandOutput extends UpdateLinkOutput, __MetadataBearer {}

/**
 * <p>Use this operation to change what types of data are shared from a source account to its linked
 *       monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p>
 *          <p>When you update a link, you can optionally specify filters
 *      that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.</p>
 *          <p>To update the list of tags associated with the sink, use
 *        <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, UpdateLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, UpdateLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OAMClient(config);
 * const input = { // UpdateLinkInput
 *   Identifier: "STRING_VALUE", // required
 *   ResourceTypes: [ // ResourceTypesInput // required
 *     "AWS::CloudWatch::Metric" || "AWS::Logs::LogGroup" || "AWS::XRay::Trace" || "AWS::ApplicationInsights::Application" || "AWS::InternetMonitor::Monitor",
 *   ],
 *   LinkConfiguration: { // LinkConfiguration
 *     LogGroupConfiguration: { // LogGroupConfiguration
 *       Filter: "STRING_VALUE", // required
 *     },
 *     MetricConfiguration: { // MetricConfiguration
 *       Filter: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateLinkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLinkOutput
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Label: "STRING_VALUE",
 * //   LabelTemplate: "STRING_VALUE",
 * //   ResourceTypes: [ // ResourceTypesOutput
 * //     "STRING_VALUE",
 * //   ],
 * //   SinkArn: "STRING_VALUE",
 * //   Tags: { // TagMapOutput
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LinkConfiguration: { // LinkConfiguration
 * //     LogGroupConfiguration: { // LogGroupConfiguration
 * //       Filter: "STRING_VALUE", // required
 * //     },
 * //     MetricConfiguration: { // MetricConfiguration
 * //       Filter: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLinkCommandInput - {@link UpdateLinkCommandInput}
 * @returns {@link UpdateLinkCommandOutput}
 * @see {@link UpdateLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 * @public
 */
export class UpdateLinkCommand extends $Command
  .classBuilder<
    UpdateLinkCommandInput,
    UpdateLinkCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("oamservice", "UpdateLink", {})
  .n("OAMClient", "UpdateLinkCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLinkCommand)
  .de(de_UpdateLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLinkInput;
      output: UpdateLinkOutput;
    };
    sdk: {
      input: UpdateLinkCommandInput;
      output: UpdateLinkCommandOutput;
    };
  };
}
