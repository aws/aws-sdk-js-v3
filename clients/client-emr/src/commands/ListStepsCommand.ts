// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStepsInput, ListStepsOutput } from "../models/models_0";
import { de_ListStepsCommand, se_ListStepsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStepsCommand}.
 */
export interface ListStepsCommandInput extends ListStepsInput {}
/**
 * @public
 *
 * The output of {@link ListStepsCommand}.
 */
export interface ListStepsCommandOutput extends ListStepsOutput, __MetadataBearer {}

/**
 * <p>Provides a list of steps for the cluster in reverse order unless you specify
 *             <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can
 *          specify a maximum of 10 <code>stepIDs</code>. The CLI automatically
 *          paginates results to return a list greater than 50 steps. To return more than 50 steps
 *          using the CLI, specify a <code>Marker</code>, which is a pagination token
 *          that indicates the next set of steps to retrieve.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListStepsInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepStates: [ // StepStateList
 *     "PENDING" || "CANCEL_PENDING" || "RUNNING" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED",
 *   ],
 *   StepIds: [ // XmlStringList
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListStepsOutput
 * //   Steps: [ // StepSummaryList
 * //     { // StepSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Config: { // HadoopStepConfig
 * //         Jar: "STRING_VALUE",
 * //         Properties: { // StringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         MainClass: "STRING_VALUE",
 * //         Args: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 * //       Status: { // StepStatus
 * //         State: "PENDING" || "CANCEL_PENDING" || "RUNNING" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED",
 * //         StateChangeReason: { // StepStateChangeReason
 * //           Code: "NONE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         FailureDetails: { // FailureDetails
 * //           Reason: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //           LogFile: "STRING_VALUE",
 * //         },
 * //         Timeline: { // StepTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           StartDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStepsCommandInput - {@link ListStepsCommandInput}
 * @returns {@link ListStepsCommandOutput}
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
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
export class ListStepsCommand extends $Command
  .classBuilder<
    ListStepsCommandInput,
    ListStepsCommandOutput,
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
  .s("ElasticMapReduce", "ListSteps", {})
  .n("EMRClient", "ListStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListStepsCommand)
  .de(de_ListStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStepsInput;
      output: ListStepsOutput;
    };
    sdk: {
      input: ListStepsCommandInput;
      output: ListStepsCommandOutput;
    };
  };
}
