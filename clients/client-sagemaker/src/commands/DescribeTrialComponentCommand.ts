// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrialComponentRequest, DescribeTrialComponentResponse } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrialComponent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrialComponentCommand}.
 */
export interface DescribeTrialComponentCommandInput extends DescribeTrialComponentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrialComponentCommand}.
 */
export interface DescribeTrialComponentCommandOutput extends DescribeTrialComponentResponse, __MetadataBearer {}

/**
 * <p>Provides a list of a trials component's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeTrialComponentRequest
 *   TrialComponentName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrialComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrialComponentResponse
 * //   TrialComponentName: "STRING_VALUE",
 * //   TrialComponentArn: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Source: { // TrialComponentSource
 * //     SourceArn: "STRING_VALUE", // required
 * //     SourceType: "STRING_VALUE",
 * //   },
 * //   Status: { // TrialComponentStatus
 * //     PrimaryStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   Parameters: { // TrialComponentParameters
 * //     "<keys>": { // TrialComponentParameterValue Union: only one key present
 * //       StringValue: "STRING_VALUE",
 * //       NumberValue: Number("double"),
 * //     },
 * //   },
 * //   InputArtifacts: { // TrialComponentArtifacts
 * //     "<keys>": { // TrialComponentArtifact
 * //       MediaType: "STRING_VALUE",
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   OutputArtifacts: {
 * //     "<keys>": {
 * //       MediaType: "STRING_VALUE",
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   MetadataProperties: { // MetadataProperties
 * //     CommitId: "STRING_VALUE",
 * //     Repository: "STRING_VALUE",
 * //     GeneratedBy: "STRING_VALUE",
 * //     ProjectId: "STRING_VALUE",
 * //   },
 * //   Metrics: [ // TrialComponentMetricSummaries
 * //     { // TrialComponentMetricSummary
 * //       MetricName: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       TimeStamp: new Date("TIMESTAMP"),
 * //       Max: Number("double"),
 * //       Min: Number("double"),
 * //       Last: Number("double"),
 * //       Count: Number("int"),
 * //       Avg: Number("double"),
 * //       StdDev: Number("double"),
 * //     },
 * //   ],
 * //   LineageGroupArn: "STRING_VALUE",
 * //   Sources: [ // TrialComponentSources
 * //     {
 * //       SourceArn: "STRING_VALUE", // required
 * //       SourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrialComponentCommandInput - {@link DescribeTrialComponentCommandInput}
 * @returns {@link DescribeTrialComponentCommandOutput}
 * @see {@link DescribeTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class DescribeTrialComponentCommand extends $Command
  .classBuilder<
    DescribeTrialComponentCommandInput,
    DescribeTrialComponentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeTrialComponent", {})
  .n("SageMakerClient", "DescribeTrialComponentCommand")
  .sc(DescribeTrialComponent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrialComponentRequest;
      output: DescribeTrialComponentResponse;
    };
    sdk: {
      input: DescribeTrialComponentCommandInput;
      output: DescribeTrialComponentCommandOutput;
    };
  };
}
