// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UpdateQueueHoursOfOperationRequest } from "../models/models_3";
=======
import type { UpdateQueueHoursOfOperationRequest } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UpdateQueueHoursOfOperation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueHoursOfOperationCommand}.
 */
export interface UpdateQueueHoursOfOperationCommandInput extends UpdateQueueHoursOfOperationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueHoursOfOperationCommand}.
 */
export interface UpdateQueueHoursOfOperationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the hours of operation for the specified queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueHoursOfOperationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 * };
 * const command = new UpdateQueueHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueHoursOfOperationCommandInput - {@link UpdateQueueHoursOfOperationCommandInput}
 * @returns {@link UpdateQueueHoursOfOperationCommandOutput}
 * @see {@link UpdateQueueHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueHoursOfOperationCommandOutput} for command's `response` shape.
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
export class UpdateQueueHoursOfOperationCommand extends $Command
  .classBuilder<
    UpdateQueueHoursOfOperationCommandInput,
    UpdateQueueHoursOfOperationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateQueueHoursOfOperation", {})
  .n("ConnectClient", "UpdateQueueHoursOfOperationCommand")
  .sc(UpdateQueueHoursOfOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueHoursOfOperationRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueHoursOfOperationCommandInput;
      output: UpdateQueueHoursOfOperationCommandOutput;
    };
  };
}
