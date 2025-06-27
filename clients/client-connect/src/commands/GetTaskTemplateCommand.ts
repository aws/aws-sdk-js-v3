// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTaskTemplateRequest, GetTaskTemplateResponse } from "../models/models_1";
import { de_GetTaskTemplateCommand, se_GetTaskTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTaskTemplateCommand}.
 */
export interface GetTaskTemplateCommandInput extends GetTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskTemplateCommand}.
 */
export interface GetTaskTemplateCommandOutput extends GetTaskTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets details about a specific task template in the specified Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetTaskTemplateRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TaskTemplateId: "STRING_VALUE", // required
 *   SnapshotVersion: "STRING_VALUE",
 * };
 * const command = new GetTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskTemplateResponse
 * //   InstanceId: "STRING_VALUE",
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   ContactFlowId: "STRING_VALUE",
 * //   SelfAssignFlowId: "STRING_VALUE",
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
 * //       Type: "NAME" || "DESCRIPTION" || "SCHEDULED_TIME" || "QUICK_CONNECT" || "URL" || "NUMBER" || "TEXT" || "TEXT_AREA" || "DATE_TIME" || "BOOLEAN" || "SINGLE_SELECT" || "EMAIL" || "SELF_ASSIGN" || "EXPIRY_DURATION",
 * //       SingleSelectOptions: [ // SingleSelectOptions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Status: "ACTIVE" || "INACTIVE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTaskTemplateCommandInput - {@link GetTaskTemplateCommandInput}
 * @returns {@link GetTaskTemplateCommandOutput}
 * @see {@link GetTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTaskTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetTaskTemplateCommand extends $Command
  .classBuilder<
    GetTaskTemplateCommandInput,
    GetTaskTemplateCommandOutput,
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
  .s("AmazonConnectService", "GetTaskTemplate", {})
  .n("ConnectClient", "GetTaskTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetTaskTemplateCommand)
  .de(de_GetTaskTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaskTemplateRequest;
      output: GetTaskTemplateResponse;
    };
    sdk: {
      input: GetTaskTemplateCommandInput;
      output: GetTaskTemplateCommandOutput;
    };
  };
}
