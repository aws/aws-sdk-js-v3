// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTaskTemplateRequest, UpdateTaskTemplateResponse } from "../models/models_2";
import { de_UpdateTaskTemplateCommand, se_UpdateTaskTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTaskTemplateCommand}.
 */
export interface UpdateTaskTemplateCommandInput extends UpdateTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTaskTemplateCommand}.
 */
export interface UpdateTaskTemplateCommandOutput extends UpdateTaskTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates details about a specific task template in the specified Amazon Connect instance.
 *    This operation does not support partial updates. Instead it does a full update of template
 *    content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateTaskTemplateRequest
 *   TaskTemplateId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE",
 *   Constraints: { // TaskTemplateConstraints
 *     RequiredFields: [ // RequiredTaskTemplateFields
 *       { // RequiredFieldInfo
 *         Id: { // TaskTemplateFieldIdentifier
 *           Name: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     ReadOnlyFields: [ // ReadOnlyTaskTemplateFields
 *       { // ReadOnlyFieldInfo
 *         Id: {
 *           Name: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     InvisibleFields: [ // InvisibleTaskTemplateFields
 *       { // InvisibleFieldInfo
 *         Id: {
 *           Name: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   Defaults: { // TaskTemplateDefaults
 *     DefaultFieldValues: [ // TaskTemplateDefaultFieldValueList
 *       { // TaskTemplateDefaultFieldValue
 *         Id: {
 *           Name: "STRING_VALUE",
 *         },
 *         DefaultValue: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Status: "ACTIVE" || "INACTIVE",
 *   Fields: [ // TaskTemplateFields
 *     { // TaskTemplateField
 *       Id: {
 *         Name: "STRING_VALUE",
 *       },
 *       Description: "STRING_VALUE",
 *       Type: "NAME" || "DESCRIPTION" || "SCHEDULED_TIME" || "QUICK_CONNECT" || "URL" || "NUMBER" || "TEXT" || "TEXT_AREA" || "DATE_TIME" || "BOOLEAN" || "SINGLE_SELECT" || "EMAIL",
 *       SingleSelectOptions: [ // SingleSelectOptions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTaskTemplateResponse
 * //   InstanceId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ContactFlowId: "STRING_VALUE",
 * //   Constraints: { // TaskTemplateConstraints
 * //     RequiredFields: [ // RequiredTaskTemplateFields
 * //       { // RequiredFieldInfo
 * //         Id: { // TaskTemplateFieldIdentifier
 * //           Name: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ReadOnlyFields: [ // ReadOnlyTaskTemplateFields
 * //       { // ReadOnlyFieldInfo
 * //         Id: {
 * //           Name: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     InvisibleFields: [ // InvisibleTaskTemplateFields
 * //       { // InvisibleFieldInfo
 * //         Id: {
 * //           Name: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   Defaults: { // TaskTemplateDefaults
 * //     DefaultFieldValues: [ // TaskTemplateDefaultFieldValueList
 * //       { // TaskTemplateDefaultFieldValue
 * //         Id: {
 * //           Name: "STRING_VALUE",
 * //         },
 * //         DefaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Fields: [ // TaskTemplateFields
 * //     { // TaskTemplateField
 * //       Id: {
 * //         Name: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Type: "NAME" || "DESCRIPTION" || "SCHEDULED_TIME" || "QUICK_CONNECT" || "URL" || "NUMBER" || "TEXT" || "TEXT_AREA" || "DATE_TIME" || "BOOLEAN" || "SINGLE_SELECT" || "EMAIL",
 * //       SingleSelectOptions: [ // SingleSelectOptions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Status: "ACTIVE" || "INACTIVE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateTaskTemplateCommandInput - {@link UpdateTaskTemplateCommandInput}
 * @returns {@link UpdateTaskTemplateCommandOutput}
 * @see {@link UpdateTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class UpdateTaskTemplateCommand extends $Command
  .classBuilder<
    UpdateTaskTemplateCommandInput,
    UpdateTaskTemplateCommandOutput,
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
  .s("AmazonConnectService", "UpdateTaskTemplate", {})
  .n("ConnectClient", "UpdateTaskTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTaskTemplateCommand)
  .de(de_UpdateTaskTemplateCommand)
  .build() {}
