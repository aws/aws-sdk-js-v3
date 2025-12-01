// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataTableAttributeRequest, DeleteDataTableAttributeResponse } from "../models/models_1";
import { DeleteDataTableAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataTableAttributeCommand}.
 */
export interface DeleteDataTableAttributeCommandInput extends DeleteDataTableAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataTableAttributeCommand}.
 */
export interface DeleteDataTableAttributeCommandOutput extends DeleteDataTableAttributeResponse, __MetadataBearer {}

/**
 * <p>Deletes an attribute and all its values from a data table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteDataTableAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteDataTableAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteDataTableAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataTableAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataTableAttributeResponse
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
 * @param DeleteDataTableAttributeCommandInput - {@link DeleteDataTableAttributeCommandInput}
 * @returns {@link DeleteDataTableAttributeCommandOutput}
 * @see {@link DeleteDataTableAttributeCommandInput} for command's `input` shape.
 * @see {@link DeleteDataTableAttributeCommandOutput} for command's `response` shape.
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
export class DeleteDataTableAttributeCommand extends $Command
  .classBuilder<
    DeleteDataTableAttributeCommandInput,
    DeleteDataTableAttributeCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteDataTableAttribute", {})
  .n("ConnectClient", "DeleteDataTableAttributeCommand")
  .sc(DeleteDataTableAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataTableAttributeRequest;
      output: DeleteDataTableAttributeResponse;
    };
    sdk: {
      input: DeleteDataTableAttributeCommandInput;
      output: DeleteDataTableAttributeCommandOutput;
    };
  };
}
