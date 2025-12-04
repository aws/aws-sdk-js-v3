// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDataTableAttributeRequest, UpdateDataTableAttributeResponse } from "../models/models_3";
import { UpdateDataTableAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataTableAttributeCommand}.
 */
export interface UpdateDataTableAttributeCommandInput extends UpdateDataTableAttributeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataTableAttributeCommand}.
 */
export interface UpdateDataTableAttributeCommandOutput extends UpdateDataTableAttributeResponse, __MetadataBearer {}

/**
 * <p>Updates all properties for an attribute using all properties from CreateDataTableAttribute. There are no other granular update endpoints. It does not act as a patch operation - all properties must be provided. System managed attributes are not mutable by customers. Changing an attribute's validation does not invalidate existing values since validation only runs when values are created or updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateDataTableAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateDataTableAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateDataTableAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ValueType: "TEXT" || "NUMBER" || "BOOLEAN" || "TEXT_LIST" || "NUMBER_LIST", // required
 *   Description: "STRING_VALUE",
 *   Primary: true || false,
 *   Validation: { // Validation
 *     MinLength: Number("int"),
 *     MaxLength: Number("int"),
 *     MinValues: Number("int"),
 *     MaxValues: Number("int"),
 *     IgnoreCase: true || false,
 *     Minimum: Number("double"),
 *     Maximum: Number("double"),
 *     ExclusiveMinimum: Number("double"),
 *     ExclusiveMaximum: Number("double"),
 *     MultipleOf: Number("double"),
 *     Enum: { // ValidationEnum
 *       Strict: true || false,
 *       Values: [ // ValidationEnumValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateDataTableAttributeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataTableAttributeResponse
 * //   Name: "STRING_VALUE", // required
 * //   LockVersion: { // DataTableLockVersion
 * //     DataTable: "STRING_VALUE",
 * //     Attribute: "STRING_VALUE",
 * //     PrimaryValues: "STRING_VALUE",
 * //     Value: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataTableAttributeCommandInput - {@link UpdateDataTableAttributeCommandInput}
 * @returns {@link UpdateDataTableAttributeCommandOutput}
 * @see {@link UpdateDataTableAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateDataTableAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or contact
 *    state.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class UpdateDataTableAttributeCommand extends $Command
  .classBuilder<
    UpdateDataTableAttributeCommandInput,
    UpdateDataTableAttributeCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateDataTableAttribute", {})
  .n("ConnectClient", "UpdateDataTableAttributeCommand")
  .sc(UpdateDataTableAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataTableAttributeRequest;
      output: UpdateDataTableAttributeResponse;
    };
    sdk: {
      input: UpdateDataTableAttributeCommandInput;
      output: UpdateDataTableAttributeCommandOutput;
    };
  };
}
