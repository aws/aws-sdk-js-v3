// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTaskTemplateRequest, CreateTaskTemplateResponse } from "../models/models_0";
import { CreateTaskTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTaskTemplateCommand}.
 */
export interface CreateTaskTemplateCommandInput extends CreateTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateTaskTemplateCommand}.
 */
export interface CreateTaskTemplateCommandOutput extends CreateTaskTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a new task template in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateTaskTemplateRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE",
 *   SelfAssignFlowId: "STRING_VALUE",
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
 *   Fields: [ // TaskTemplateFields // required
 *     { // TaskTemplateField
 *       Id: {
 *         Name: "STRING_VALUE",
 *       },
 *       Description: "STRING_VALUE",
 *       Type: "NAME" || "DESCRIPTION" || "SCHEDULED_TIME" || "QUICK_CONNECT" || "URL" || "NUMBER" || "TEXT" || "TEXT_AREA" || "DATE_TIME" || "BOOLEAN" || "SINGLE_SELECT" || "EMAIL" || "SELF_ASSIGN" || "EXPIRY_DURATION",
 *       SingleSelectOptions: [ // SingleSelectOptions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateTaskTemplateResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTaskTemplateCommandInput - {@link CreateTaskTemplateCommandInput}
 * @returns {@link CreateTaskTemplateCommandOutput}
 * @see {@link CreateTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTaskTemplateCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateTaskTemplateCommand extends $Command
  .classBuilder<
    CreateTaskTemplateCommandInput,
    CreateTaskTemplateCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateTaskTemplate", {})
  .n("ConnectClient", "CreateTaskTemplateCommand")
  .sc(CreateTaskTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTaskTemplateRequest;
      output: CreateTaskTemplateResponse;
    };
    sdk: {
      input: CreateTaskTemplateCommandInput;
      output: CreateTaskTemplateCommandOutput;
    };
  };
}
