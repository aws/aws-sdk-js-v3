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
 * Updates the task template association on an existing task contact. You can update the task template on a contact before assignment to support tasks that are created without a template (for example [Rules](https://docs.aws.amazon.com/connect/latest/adminguide/connect-rules.html) or [disconnect flows](https://docs.aws.amazon.com/connect/latest/adminguide/set-disconnect-flow.html)) or change the agent interaction form to represent the latest task data (for example an initial request that was submitted as a refund gets updated to an account cancellation and requires a new template).
 *
 * This operation can only be used with task contacts that are in progress and not connected to an agent. A task template can be updated a maximum of 5 times per contact.
 *
 * The task's references must be compatible with the fields of the target task template. If the target template has a required field, the task must have a corresponding reference with a matching name and compatible type. The following task template field types map to reference types:
 *
 * - `TEXT`, `TEXT_AREA`, `BOOLEAN`, and `SINGLE_SELECT` map to references of type `STRING`.
 * - `NUMBER` maps to references of type `NUMBER`.
 * - `DATE_TIME` maps to references of type `DATE`.
 * - `URL` maps to references of type `URL`.
 * - `EMAIL` maps to references of type `EMAIL`.
 *
 * References corresponding to `TEXT` fields must be fewer than 512 characters. `TEXT_AREA` fields must be fewer than 4,096 characters. `BOOLEAN` fields must have a value of `true` or `false`.
 *
 * An `InvalidRequestException` occurs when `UpdateContactTaskTemplate` is called on a connected or terminated task, when it is called on non-task contacts, and when the task contact already uses the provided task template. A `PropertyValidationException` occurs when the task's references conflict with the task template's fields, for example if the task is missing a reference that matches a required field, or if the task has a reference that matches a required field's name but not its datatype.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link PropertyValidationException} (client fault)
 *
 * The property is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
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
