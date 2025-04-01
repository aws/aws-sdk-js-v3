// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListMediaInsightsPipelineConfigurationsRequest,
  ListMediaInsightsPipelineConfigurationsResponse,
  ListMediaInsightsPipelineConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListMediaInsightsPipelineConfigurationsCommand,
  se_ListMediaInsightsPipelineConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMediaInsightsPipelineConfigurationsCommand}.
 */
export interface ListMediaInsightsPipelineConfigurationsCommandInput
  extends ListMediaInsightsPipelineConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaInsightsPipelineConfigurationsCommand}.
 */
export interface ListMediaInsightsPipelineConfigurationsCommandOutput
  extends ListMediaInsightsPipelineConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the available media insights pipeline configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaInsightsPipelineConfigurationsCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaInsightsPipelineConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // ListMediaInsightsPipelineConfigurationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaInsightsPipelineConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaInsightsPipelineConfigurationsResponse
 * //   MediaInsightsPipelineConfigurations: [ // MediaInsightsPipelineConfigurationSummaryList
 * //     { // MediaInsightsPipelineConfigurationSummary
 * //       MediaInsightsPipelineConfigurationName: "STRING_VALUE",
 * //       MediaInsightsPipelineConfigurationId: "STRING_VALUE",
 * //       MediaInsightsPipelineConfigurationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMediaInsightsPipelineConfigurationsCommandInput - {@link ListMediaInsightsPipelineConfigurationsCommandInput}
 * @returns {@link ListMediaInsightsPipelineConfigurationsCommandOutput}
 * @see {@link ListMediaInsightsPipelineConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListMediaInsightsPipelineConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 *
 * @public
 */
export class ListMediaInsightsPipelineConfigurationsCommand extends $Command
  .classBuilder<
    ListMediaInsightsPipelineConfigurationsCommandInput,
    ListMediaInsightsPipelineConfigurationsCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKMediaPipelinesService", "ListMediaInsightsPipelineConfigurations", {})
  .n("ChimeSDKMediaPipelinesClient", "ListMediaInsightsPipelineConfigurationsCommand")
  .f(void 0, ListMediaInsightsPipelineConfigurationsResponseFilterSensitiveLog)
  .ser(se_ListMediaInsightsPipelineConfigurationsCommand)
  .de(de_ListMediaInsightsPipelineConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMediaInsightsPipelineConfigurationsRequest;
      output: ListMediaInsightsPipelineConfigurationsResponse;
    };
    sdk: {
      input: ListMediaInsightsPipelineConfigurationsCommandInput;
      output: ListMediaInsightsPipelineConfigurationsCommandOutput;
    };
  };
}
