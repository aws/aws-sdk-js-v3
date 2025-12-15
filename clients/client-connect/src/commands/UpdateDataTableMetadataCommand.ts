// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDataTableMetadataRequest, UpdateDataTableMetadataResponse } from "../models/models_3";
import { UpdateDataTableMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataTableMetadataCommand}.
 */
export interface UpdateDataTableMetadataCommandInput extends UpdateDataTableMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataTableMetadataCommand}.
 */
export interface UpdateDataTableMetadataCommandOutput extends UpdateDataTableMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates the metadata properties of a data table. Accepts all fields similar to CreateDataTable, except for
 *    fields and tags. There are no other granular update endpoints. It does not act as a patch operation - all properties
 *    must be provided or defaults will be used. Fields follow the same requirements as CreateDataTable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateDataTableMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateDataTableMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateDataTableMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ValueLockLevel: "NONE" || "DATA_TABLE" || "PRIMARY_VALUE" || "ATTRIBUTE" || "VALUE", // required
 *   TimeZone: "STRING_VALUE", // required
 * };
 * const command = new UpdateDataTableMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataTableMetadataResponse
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
 * @param UpdateDataTableMetadataCommandInput - {@link UpdateDataTableMetadataCommandInput}
 * @returns {@link UpdateDataTableMetadataCommandOutput}
 * @see {@link UpdateDataTableMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDataTableMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or contact
 *    state.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
export class UpdateDataTableMetadataCommand extends $Command
  .classBuilder<
    UpdateDataTableMetadataCommandInput,
    UpdateDataTableMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateDataTableMetadata", {})
  .n("ConnectClient", "UpdateDataTableMetadataCommand")
  .sc(UpdateDataTableMetadata$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataTableMetadataRequest;
      output: UpdateDataTableMetadataResponse;
    };
    sdk: {
      input: UpdateDataTableMetadataCommandInput;
      output: UpdateDataTableMetadataCommandOutput;
    };
  };
}
