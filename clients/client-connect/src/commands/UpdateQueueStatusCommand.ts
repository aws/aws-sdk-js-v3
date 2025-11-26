// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UpdateQueueStatusRequest } from "../models/models_3";
=======
import type { UpdateQueueStatusRequest } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UpdateQueueStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueStatusCommand}.
 */
export interface UpdateQueueStatusCommandInput extends UpdateQueueStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueStatusCommand}.
 */
export interface UpdateQueueStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the status of the queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   Status: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateQueueStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueStatusCommandInput - {@link UpdateQueueStatusCommandInput}
 * @returns {@link UpdateQueueStatusCommandOutput}
 * @see {@link UpdateQueueStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueStatusCommandOutput} for command's `response` shape.
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
export class UpdateQueueStatusCommand extends $Command
  .classBuilder<
    UpdateQueueStatusCommandInput,
    UpdateQueueStatusCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateQueueStatus", {})
  .n("ConnectClient", "UpdateQueueStatusCommand")
  .sc(UpdateQueueStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueStatusCommandInput;
      output: UpdateQueueStatusCommandOutput;
    };
  };
}
