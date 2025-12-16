// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeStepInput, DescribeStepOutput } from "../models/models_0";
import { DescribeStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStepCommand}.
 */
export interface DescribeStepCommandInput extends DescribeStepInput {}
/**
 * @public
 *
 * The output of {@link DescribeStepCommand}.
 */
export interface DescribeStepCommandOutput extends DescribeStepOutput, __MetadataBearer {}

/**
 * <p>Provides more detail about the cluster step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStepCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStepCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // DescribeStepInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStepCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStepOutput
 * //   Step: { // Step
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Config: { // HadoopStepConfig
 * //       Jar: "STRING_VALUE",
 * //       Properties: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MainClass: "STRING_VALUE",
 * //       Args: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 * //     Status: { // StepStatus
 * //       State: "PENDING" || "CANCEL_PENDING" || "RUNNING" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED",
 * //       StateChangeReason: { // StepStateChangeReason
 * //         Code: "NONE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       FailureDetails: { // FailureDetails
 * //         Reason: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //         LogFile: "STRING_VALUE",
 * //       },
 * //       Timeline: { // StepTimeline
 * //         CreationDateTime: new Date("TIMESTAMP"),
 * //         StartDateTime: new Date("TIMESTAMP"),
 * //         EndDateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     LogUri: "STRING_VALUE",
 * //     EncryptionKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStepCommandInput - {@link DescribeStepCommandInput}
 * @returns {@link DescribeStepCommandOutput}
 * @see {@link DescribeStepCommandInput} for command's `input` shape.
 * @see {@link DescribeStepCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeStepCommand extends $Command
  .classBuilder<
    DescribeStepCommandInput,
    DescribeStepCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "DescribeStep", {})
  .n("EMRClient", "DescribeStepCommand")
  .sc(DescribeStep$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStepInput;
      output: DescribeStepOutput;
    };
    sdk: {
      input: DescribeStepCommandInput;
      output: DescribeStepCommandOutput;
    };
  };
}
