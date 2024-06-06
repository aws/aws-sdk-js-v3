// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartTaskContactRequest,
  StartTaskContactRequestFilterSensitiveLog,
  StartTaskContactResponse,
} from "../models/models_2";
import { de_StartTaskContactCommand, se_StartTaskContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTaskContactCommand}.
 */
export interface StartTaskContactCommandInput extends StartTaskContactRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskContactCommand}.
 */
export interface StartTaskContactCommandOutput extends StartTaskContactResponse, __MetadataBearer {}

/**
 * <p>Initiates a flow to start a new task contact. For more information about task contacts, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html">Concepts: Tasks in
 *      Amazon Connect</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *          <p>When using <code>PreviousContactId</code> and <code>RelatedContactId</code> input
 *    parameters, note the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PreviousContactId</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Any updates to user-defined task contact attributes on any contact linked through the
 *        same <code>PreviousContactId</code> will affect every contact in the chain.</p>
 *                   </li>
 *                   <li>
 *                      <p>There can be a maximum of 12 linked task contacts in a chain. That is, 12 task contacts
 *        can be created that share the same <code>PreviousContactId</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedContactId</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Copies contact attributes from the related task contact to the new contact.</p>
 *                   </li>
 *                   <li>
 *                      <p>Any update on attributes in a new task contact does not update attributes on previous
 *        contact.</p>
 *                   </li>
 *                   <li>
 *                      <p>There’s no limit on the number of task contacts that can be created that use the same
 *         <code>RelatedContactId</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>In addition, when calling StartTaskContact include only one of these parameters:
 *     <code>ContactFlowID</code>, <code>QuickConnectID</code>, or <code>TaskTemplateID</code>. Only
 *    one parameter is required as long as the task template has a flow configured to run it. If more
 *    than one parameter is specified, or only the <code>TaskTemplateID</code> is specified but it does
 *    not have a flow configured, the request returns an error because Amazon Connect cannot
 *    identify the unique flow to run when the task is created.</p>
 *          <p>A <code>ServiceQuotaExceededException</code> occurs when the number of open tasks exceeds
 *    the active tasks quota or there are already 12 tasks referencing the same
 *     <code>PreviousContactId</code>. For more information about service quotas for task contacts, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect service quotas</a> in the <i>Amazon Connect Administrator
 *     Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartTaskContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartTaskContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // StartTaskContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PreviousContactId: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE",
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE", // required
 *   References: { // ContactReferences
 *     "<keys>": { // Reference
 *       Value: "STRING_VALUE", // required
 *       Type: "URL" || "ATTACHMENT" || "NUMBER" || "STRING" || "DATE" || "EMAIL", // required
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   ScheduledTime: new Date("TIMESTAMP"),
 *   TaskTemplateId: "STRING_VALUE",
 *   QuickConnectId: "STRING_VALUE",
 *   RelatedContactId: "STRING_VALUE",
 * };
 * const command = new StartTaskContactCommand(input);
 * const response = await client.send(command);
 * // { // StartTaskContactResponse
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTaskContactCommandInput - {@link StartTaskContactCommandInput}
 * @returns {@link StartTaskContactCommandOutput}
 * @see {@link StartTaskContactCommandInput} for command's `input` shape.
 * @see {@link StartTaskContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class StartTaskContactCommand extends $Command
  .classBuilder<
    StartTaskContactCommandInput,
    StartTaskContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "StartTaskContact", {})
  .n("ConnectClient", "StartTaskContactCommand")
  .f(StartTaskContactRequestFilterSensitiveLog, void 0)
  .ser(se_StartTaskContactCommand)
  .de(de_StartTaskContactCommand)
  .build() {}
