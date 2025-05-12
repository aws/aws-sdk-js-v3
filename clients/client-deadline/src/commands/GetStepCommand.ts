// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetStepRequest, GetStepResponse, GetStepResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetStepCommand, se_GetStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStepCommand}.
 */
export interface GetStepCommandInput extends GetStepRequest {}
/**
 * @public
 *
 * The output of {@link GetStepCommand}.
 */
export interface GetStepCommandOutput extends GetStepResponse, __MetadataBearer {}

/**
 * <p>Gets a step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetStepCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetStepCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // GetStepRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   stepId: "STRING_VALUE", // required
 * };
 * const command = new GetStepCommand(input);
 * const response = await client.send(command);
 * // { // GetStepResponse
 * //   stepId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   lifecycleStatus: "CREATE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED", // required
 * //   lifecycleStatusMessage: "STRING_VALUE",
 * //   taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE", // required
 * //   taskRunStatusCounts: { // TaskRunStatusCounts // required
 * //     "<keys>": Number("int"),
 * //   },
 * //   targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   dependencyCounts: { // DependencyCounts
 * //     dependenciesResolved: Number("int"), // required
 * //     dependenciesUnresolved: Number("int"), // required
 * //     consumersResolved: Number("int"), // required
 * //     consumersUnresolved: Number("int"), // required
 * //   },
 * //   requiredCapabilities: { // StepRequiredCapabilities
 * //     attributes: [ // StepAttributeCapabilities // required
 * //       { // StepAttributeCapability
 * //         name: "STRING_VALUE", // required
 * //         anyOf: [ // ListAttributeCapabilityValue
 * //           "STRING_VALUE",
 * //         ],
 * //         allOf: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     amounts: [ // StepAmountCapabilities // required
 * //       { // StepAmountCapability
 * //         name: "STRING_VALUE", // required
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         value: Number("double"),
 * //       },
 * //     ],
 * //   },
 * //   parameterSpace: { // ParameterSpace
 * //     parameters: [ // StepParameterList // required
 * //       { // StepParameter
 * //         name: "STRING_VALUE", // required
 * //         type: "INT" || "FLOAT" || "STRING" || "PATH", // required
 * //       },
 * //     ],
 * //     combination: "STRING_VALUE",
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStepCommandInput - {@link GetStepCommandInput}
 * @returns {@link GetStepCommandOutput}
 * @see {@link GetStepCommandInput} for command's `input` shape.
 * @see {@link GetStepCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetStepCommand extends $Command
  .classBuilder<
    GetStepCommandInput,
    GetStepCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "GetStep", {})
  .n("DeadlineClient", "GetStepCommand")
  .f(void 0, GetStepResponseFilterSensitiveLog)
  .ser(se_GetStepCommand)
  .de(de_GetStepCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStepRequest;
      output: GetStepResponse;
    };
    sdk: {
      input: GetStepCommandInput;
      output: GetStepCommandOutput;
    };
  };
}
