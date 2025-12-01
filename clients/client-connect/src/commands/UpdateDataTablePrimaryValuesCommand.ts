// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataTablePrimaryValuesRequest, UpdateDataTablePrimaryValuesResponse } from "../models/models_3";
import { UpdateDataTablePrimaryValues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataTablePrimaryValuesCommand}.
 */
export interface UpdateDataTablePrimaryValuesCommandInput extends UpdateDataTablePrimaryValuesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataTablePrimaryValuesCommand}.
 */
export interface UpdateDataTablePrimaryValuesCommandOutput
  extends UpdateDataTablePrimaryValuesResponse,
    __MetadataBearer {}

/**
 * <p>Updates the primary values for a record. This operation affects all existing values that are currently associated to the record and its primary values. Users that have restrictions on attributes and/or primary values are not authorized to use this endpoint. The combination of new primary values must be unique within the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateDataTablePrimaryValuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateDataTablePrimaryValuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateDataTablePrimaryValuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   PrimaryValues: [ // PrimaryValuesSet // required
 *     { // PrimaryValue
 *       AttributeName: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NewPrimaryValues: [ // required
 *     {
 *       AttributeName: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   LockVersion: { // DataTableLockVersion
 *     DataTable: "STRING_VALUE",
 *     Attribute: "STRING_VALUE",
 *     PrimaryValues: "STRING_VALUE",
 *     Value: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDataTablePrimaryValuesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataTablePrimaryValuesResponse
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
 * @param UpdateDataTablePrimaryValuesCommandInput - {@link UpdateDataTablePrimaryValuesCommandInput}
 * @returns {@link UpdateDataTablePrimaryValuesCommandOutput}
 * @see {@link UpdateDataTablePrimaryValuesCommandInput} for command's `input` shape.
 * @see {@link UpdateDataTablePrimaryValuesCommandOutput} for command's `response` shape.
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
export class UpdateDataTablePrimaryValuesCommand extends $Command
  .classBuilder<
    UpdateDataTablePrimaryValuesCommandInput,
    UpdateDataTablePrimaryValuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateDataTablePrimaryValues", {})
  .n("ConnectClient", "UpdateDataTablePrimaryValuesCommand")
  .sc(UpdateDataTablePrimaryValues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataTablePrimaryValuesRequest;
      output: UpdateDataTablePrimaryValuesResponse;
    };
    sdk: {
      input: UpdateDataTablePrimaryValuesCommandInput;
      output: UpdateDataTablePrimaryValuesCommandOutput;
    };
  };
}
