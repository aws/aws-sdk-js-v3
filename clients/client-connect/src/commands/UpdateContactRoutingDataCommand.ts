// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContactRoutingDataResponse } from "../models/models_2";
import { UpdateContactRoutingDataRequest } from "../models/models_3";
import { de_UpdateContactRoutingDataCommand, se_UpdateContactRoutingDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactRoutingDataCommand}.
 */
export interface UpdateContactRoutingDataCommandInput extends UpdateContactRoutingDataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactRoutingDataCommand}.
 */
export interface UpdateContactRoutingDataCommandOutput extends UpdateContactRoutingDataResponse, __MetadataBearer {}

/**
 * <p>Updates routing priority and age on the contact (<b>QueuePriority</b> and <b>QueueTimeAdjustmentInSeconds</b>).
 *    These properties can be used to change a customer's position in the queue. For example, you can
 *    move a contact to the back of the queue by setting a lower routing priority relative to other
 *    contacts in queue; or you can move a contact to the front of the queue by increasing the routing
 *    age which will make the contact look artificially older and therefore higher up in the
 *    first-in-first-out routing order. Note that adjusting the routing age of a contact affects only
 *    its position in queue, and not its actual queue wait time as reported through metrics. These
 *    properties can also be updated by using <a href="https://docs.aws.amazon.com/connect/latest/adminguide/change-routing-priority.html">the Set routing priority / age flow
 *     block</a>.</p>
 *          <note>
 *             <p>Either <b>QueuePriority</b> or <b>QueueTimeAdjustmentInSeconds</b> should be provided within the request body, but not
 *     both.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactRoutingDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactRoutingDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactRoutingDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   QueueTimeAdjustmentSeconds: Number("int"),
 *   QueuePriority: Number("long"),
 *   RoutingCriteria: { // RoutingCriteriaInput
 *     Steps: [ // RoutingCriteriaInputSteps
 *       { // RoutingCriteriaInputStep
 *         Expiry: { // RoutingCriteriaInputStepExpiry
 *           DurationInSeconds: Number("int"),
 *         },
 *         Expression: { // Expression
 *           AttributeCondition: { // AttributeCondition
 *             Name: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             ProficiencyLevel: Number("float"),
 *             MatchCriteria: { // MatchCriteria
 *               AgentsCriteria: { // AgentsCriteria
 *                 AgentIds: [ // AgentIds
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             ComparisonOperator: "STRING_VALUE",
 *           },
 *           AndExpression: [ // Expressions
 *             {
 *               AttributeCondition: {
 *                 Name: "STRING_VALUE",
 *                 Value: "STRING_VALUE",
 *                 ProficiencyLevel: Number("float"),
 *                 MatchCriteria: {
 *                   AgentsCriteria: {
 *                     AgentIds: [
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 ComparisonOperator: "STRING_VALUE",
 *               },
 *               AndExpression: [
 *                 "<Expression>",
 *               ],
 *               OrExpression: [
 *                 "<Expression>",
 *               ],
 *             },
 *           ],
 *           OrExpression: [
 *             "<Expression>",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateContactRoutingDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactRoutingDataCommandInput - {@link UpdateContactRoutingDataCommandInput}
 * @returns {@link UpdateContactRoutingDataCommandOutput}
 * @see {@link UpdateContactRoutingDataCommandInput} for command's `input` shape.
 * @see {@link UpdateContactRoutingDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class UpdateContactRoutingDataCommand extends $Command
  .classBuilder<
    UpdateContactRoutingDataCommandInput,
    UpdateContactRoutingDataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateContactRoutingData", {})
  .n("ConnectClient", "UpdateContactRoutingDataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContactRoutingDataCommand)
  .de(de_UpdateContactRoutingDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactRoutingDataRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactRoutingDataCommandInput;
      output: UpdateContactRoutingDataCommandOutput;
    };
  };
}
