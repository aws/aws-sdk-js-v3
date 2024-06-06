// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePredefinedAttributeRequest } from "../models/models_0";
import { de_DeletePredefinedAttributeCommand, se_DeletePredefinedAttributeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePredefinedAttributeCommand}.
 */
export interface DeletePredefinedAttributeCommandInput extends DeletePredefinedAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DeletePredefinedAttributeCommand}.
 */
export interface DeletePredefinedAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a predefined attribute from the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeletePredefinedAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeletePredefinedAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeletePredefinedAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeletePredefinedAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePredefinedAttributeCommandInput - {@link DeletePredefinedAttributeCommandInput}
 * @returns {@link DeletePredefinedAttributeCommandOutput}
 * @see {@link DeletePredefinedAttributeCommandInput} for command's `input` shape.
 * @see {@link DeletePredefinedAttributeCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use. Please try another.</p>
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
 * @public
 */
export class DeletePredefinedAttributeCommand extends $Command
  .classBuilder<
    DeletePredefinedAttributeCommandInput,
    DeletePredefinedAttributeCommandOutput,
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
  .s("AmazonConnectService", "DeletePredefinedAttribute", {})
  .n("ConnectClient", "DeletePredefinedAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DeletePredefinedAttributeCommand)
  .de(de_DeletePredefinedAttributeCommand)
  .build() {}
