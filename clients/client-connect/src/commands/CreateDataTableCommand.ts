// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataTableRequest, CreateDataTableResponse } from "../models/models_0";
import { CreateDataTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataTableCommand}.
 */
export interface CreateDataTableCommandInput extends CreateDataTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataTableCommand}.
 */
export interface CreateDataTableCommandOutput extends CreateDataTableResponse, __MetadataBearer {}

/**
 * <p>Creates a new data table with the specified properties. Supports the creation of all table properties except for attributes and values. A table with no attributes and values is a valid state for a table. The number of tables per instance is limited to 100 per instance. Customers can request an increase by using AWS Service Quotas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateDataTableCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateDataTableCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateDataTableRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TimeZone: "STRING_VALUE", // required
 *   ValueLockLevel: "NONE" || "DATA_TABLE" || "PRIMARY_VALUE" || "ATTRIBUTE" || "VALUE", // required
 *   Status: "PUBLISHED", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataTableResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
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
 * @param CreateDataTableCommandInput - {@link CreateDataTableCommandInput}
 * @returns {@link CreateDataTableCommandOutput}
 * @see {@link CreateDataTableCommandInput} for command's `input` shape.
 * @see {@link CreateDataTableCommandOutput} for command's `response` shape.
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
export class CreateDataTableCommand extends $Command
  .classBuilder<
    CreateDataTableCommandInput,
    CreateDataTableCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateDataTable", {})
  .n("ConnectClient", "CreateDataTableCommand")
  .sc(CreateDataTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataTableRequest;
      output: CreateDataTableResponse;
    };
    sdk: {
      input: CreateDataTableCommandInput;
      output: CreateDataTableCommandOutput;
    };
  };
}
