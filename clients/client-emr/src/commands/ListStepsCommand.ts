// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStepsInput, ListStepsOutput } from "../models/models_0";
import { ListSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides a list of steps for the cluster in reverse order unless you specify `stepIds` with the request or filter by `StepStates`. You can specify a maximum of 10 `stepIDs`. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a `Marker`, which is a pagination token that indicates the next set of steps to retrieve.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
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
 * //       LogUri: "STRING_VALUE",
 * //       EncryptionKeyArn: "STRING_VALUE",
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
 *
 * This exception occurs when there is an internal failure in the Amazon EMR service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception occurs when there is something wrong with user input.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class ListStepsCommand extends command<ListStepsCommandInput, ListStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListSteps",
  ListSteps$
) {
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
