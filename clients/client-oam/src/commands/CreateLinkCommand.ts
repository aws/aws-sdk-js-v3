// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLinkInput, CreateLinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_CreateLinkCommand, se_CreateLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLinkCommand}.
 */
export interface CreateLinkCommandInput extends CreateLinkInput {}
/**
 * @public
 *
 * The output of {@link CreateLinkCommand}.
 */
export interface CreateLinkCommandOutput extends CreateLinkOutput, __MetadataBearer {}

/**
 * <p>Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created,
 *       data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters
 *       that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.</p>
 *          <p>Before you create a link, you must create a sink in the monitoring account and create a
 *       sink policy in that account. The sink policy must permit the source account to link to it. You
 *       can grant permission to source accounts by granting permission to an entire organization or to
 *       individual accounts.</p>
 *          <p>For more information, see
 *        <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and
 *        <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p>
 *          <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p>
 *          <p>Each source account can be linked to as many as five monitoring accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, CreateLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, CreateLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // CreateLinkInput
 *   LabelTemplate: "STRING_VALUE", // required
 *   ResourceTypes: [ // ResourceTypesInput // required
 *     "AWS::CloudWatch::Metric" || "AWS::Logs::LogGroup" || "AWS::XRay::Trace" || "AWS::ApplicationInsights::Application" || "AWS::InternetMonitor::Monitor" || "AWS::ApplicationSignals::Service" || "AWS::ApplicationSignals::ServiceLevelObjective",
 *   ],
 *   SinkIdentifier: "STRING_VALUE", // required
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LinkConfiguration: { // LinkConfiguration
 *     LogGroupConfiguration: { // LogGroupConfiguration
 *       Filter: "STRING_VALUE", // required
 *     },
 *     MetricConfiguration: { // MetricConfiguration
 *       Filter: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateLinkOutput
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
 * @param CreateLinkCommandInput - {@link CreateLinkCommandInput}
 * @returns {@link CreateLinkCommandOutput}
 * @see {@link CreateLinkCommandInput} for command's `input` shape.
 * @see {@link CreateLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class CreateLinkCommand extends $Command
  .classBuilder<
    CreateLinkCommandInput,
    CreateLinkCommandOutput,
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
  .s("oamservice", "CreateLink", {})
  .n("OAMClient", "CreateLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateLinkCommand)
  .de(de_CreateLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLinkInput;
      output: CreateLinkOutput;
    };
    sdk: {
      input: CreateLinkCommandInput;
      output: CreateLinkCommandOutput;
    };
  };
}
