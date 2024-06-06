// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTaskTemplateRequest, DeleteTaskTemplateResponse } from "../models/models_0";
import { de_DeleteTaskTemplateCommand, se_DeleteTaskTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTaskTemplateCommand}.
 */
export interface DeleteTaskTemplateCommandInput extends DeleteTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaskTemplateCommand}.
 */
export interface DeleteTaskTemplateCommandOutput extends DeleteTaskTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes the task template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteTaskTemplateRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TaskTemplateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTaskTemplateCommandInput - {@link DeleteTaskTemplateCommandInput}
 * @returns {@link DeleteTaskTemplateCommandOutput}
 * @see {@link DeleteTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteTaskTemplateCommand extends $Command
  .classBuilder<
    DeleteTaskTemplateCommandInput,
    DeleteTaskTemplateCommandOutput,
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
  .s("AmazonConnectService", "DeleteTaskTemplate", {})
  .n("ConnectClient", "DeleteTaskTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTaskTemplateCommand)
  .de(de_DeleteTaskTemplateCommand)
  .build() {}
