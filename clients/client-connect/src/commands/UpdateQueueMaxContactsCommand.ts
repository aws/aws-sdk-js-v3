// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueMaxContactsRequest } from "../models/models_3";
import { de_UpdateQueueMaxContactsCommand, se_UpdateQueueMaxContactsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueMaxContactsCommand}.
 */
export interface UpdateQueueMaxContactsCommandInput extends UpdateQueueMaxContactsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueMaxContactsCommand}.
 */
export interface UpdateQueueMaxContactsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the maximum number of contacts allowed in a queue before it is considered
 *    full.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueMaxContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueMaxContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueMaxContactsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   MaxContacts: Number("int"),
 * };
 * const command = new UpdateQueueMaxContactsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueMaxContactsCommandInput - {@link UpdateQueueMaxContactsCommandInput}
 * @returns {@link UpdateQueueMaxContactsCommandOutput}
 * @see {@link UpdateQueueMaxContactsCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueMaxContactsCommandOutput} for command's `response` shape.
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
export class UpdateQueueMaxContactsCommand extends $Command
  .classBuilder<
    UpdateQueueMaxContactsCommandInput,
    UpdateQueueMaxContactsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateQueueMaxContacts", {})
  .n("ConnectClient", "UpdateQueueMaxContactsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQueueMaxContactsCommand)
  .de(de_UpdateQueueMaxContactsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueMaxContactsRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueMaxContactsCommandInput;
      output: UpdateQueueMaxContactsCommandOutput;
    };
  };
}
