// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactTaskTemplateRequest, UpdateContactTaskTemplateResponse } from "../models/models_3";
import { UpdateContactTaskTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactTaskTemplateCommand}.
 */
export interface UpdateContactTaskTemplateCommandInput extends UpdateContactTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactTaskTemplateCommand}.
 */
export interface UpdateContactTaskTemplateCommandOutput extends UpdateContactTaskTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates the task template association on an existing task contact. You can update the task template on a contact
 *    before assignment to support tasks that are created without a template (for example <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-rules.html">Rules</a> or <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-disconnect-flow.html">disconnect flows</a>) or change the agent interaction
 *    form to represent the latest task data (for example an initial request that was submitted as a refund gets updated to
 *    an account cancellation and requires a new template).</p>
 *          <p>This operation can only be used with task contacts that are in progress and not connected to an agent. A task
 *    template can be updated a maximum of 5 times per contact.</p>
 *          <p>The task's references must be compatible with the fields of the target task template. If the target template has
 *    a required field, the task must have a corresponding reference with a matching name and compatible type. The
 *    following task template field types map to reference types:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>TEXT</code>, <code>TEXT_AREA</code>, <code>BOOLEAN</code>, and <code>SINGLE_SELECT</code> map to
 *      references of type <code>STRING</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NUMBER</code> maps to references of type <code>NUMBER</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DATE_TIME</code> maps to references of type <code>DATE</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>URL</code> maps to references of type <code>URL</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EMAIL</code> maps to references of type <code>EMAIL</code>.</p>
 *             </li>
 *          </ul>
 *          <p>References corresponding to <code>TEXT</code> fields must be fewer than 512 characters.
 *    <code>TEXT_AREA</code> fields must be fewer than 4,096 characters. <code>BOOLEAN</code> fields must have a value
 *    of <code>true</code> or <code>false</code>.</p>
 *          <p>An <code>InvalidRequestException</code> occurs when <code>UpdateContactTaskTemplate</code> is called on a
 *    connected or terminated task, when it is called on non-task contacts, and when the task contact already uses the
 *    provided task template. A <code>PropertyValidationException</code> occurs when the task's references conflict with
 *    the task template's fields, for example if the task is missing a reference that matches a required field, or if the
 *    task has a reference that matches a required field's name but not its datatype.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactTaskTemplateRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TaskTemplateId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new UpdateContactTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactTaskTemplateCommandInput - {@link UpdateContactTaskTemplateCommandInput}
 * @returns {@link UpdateContactTaskTemplateCommandOutput}
 * @see {@link UpdateContactTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateContactTaskTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link PropertyValidationException} (client fault)
 *  <p>The property is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateContactTaskTemplateCommand extends command<UpdateContactTaskTemplateCommandInput, UpdateContactTaskTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactTaskTemplate",
  UpdateContactTaskTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactTaskTemplateRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactTaskTemplateCommandInput;
      output: UpdateContactTaskTemplateCommandOutput;
    };
  };
}
