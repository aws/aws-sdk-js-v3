// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContactEvaluationRequest } from "../models/models_0";
import { de_DeleteContactEvaluationCommand, se_DeleteContactEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContactEvaluationCommand}.
 */
export interface DeleteContactEvaluationCommandInput extends DeleteContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactEvaluationCommand}.
 */
export interface DeleteContactEvaluationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a contact evaluation in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactEvaluationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactEvaluationCommandInput - {@link DeleteContactEvaluationCommandInput}
 * @returns {@link DeleteContactEvaluationCommandOutput}
 * @see {@link DeleteContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link DeleteContactEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
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
export class DeleteContactEvaluationCommand extends $Command
  .classBuilder<
    DeleteContactEvaluationCommandInput,
    DeleteContactEvaluationCommandOutput,
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
  .s("AmazonConnectService", "DeleteContactEvaluation", {})
  .n("ConnectClient", "DeleteContactEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContactEvaluationCommand)
  .de(de_DeleteContactEvaluationCommand)
  .build() {}
