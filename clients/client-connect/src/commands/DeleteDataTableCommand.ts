// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDataTableRequest, DeleteDataTableResponse } from "../models/models_1";
import { DeleteDataTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataTableCommand}.
 */
export interface DeleteDataTableCommandInput extends DeleteDataTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataTableCommand}.
 */
export interface DeleteDataTableCommandOutput extends DeleteDataTableResponse, __MetadataBearer {}

/**
 * <p>Deletes a data table and all associated attributes, versions, audits, and values. Does not update any references to the data table, even from other data tables. This includes dynamic values and conditional validations. System managed data tables are not deletable by customers. API users may delete the table at any time. When deletion is requested from the admin website, a warning is shown alerting the user of the most recent time the table and its values were accessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteDataTableCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteDataTableCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteDataTableRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataTableCommandInput - {@link DeleteDataTableCommandInput}
 * @returns {@link DeleteDataTableCommandOutput}
 * @see {@link DeleteDataTableCommandInput} for command's `input` shape.
 * @see {@link DeleteDataTableCommandOutput} for command's `response` shape.
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
export class DeleteDataTableCommand extends $Command
  .classBuilder<
    DeleteDataTableCommandInput,
    DeleteDataTableCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteDataTable", {})
  .n("ConnectClient", "DeleteDataTableCommand")
  .sc(DeleteDataTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataTableCommandInput;
      output: DeleteDataTableCommandOutput;
    };
  };
}
