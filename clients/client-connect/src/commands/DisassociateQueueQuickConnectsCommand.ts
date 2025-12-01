// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateQueueQuickConnectsRequest } from "../models/models_1";
import { DisassociateQueueQuickConnects } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateQueueQuickConnectsCommand}.
 */
export interface DisassociateQueueQuickConnectsCommandInput extends DisassociateQueueQuickConnectsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateQueueQuickConnectsCommand}.
 */
export interface DisassociateQueueQuickConnectsCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a set of quick connects from a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateQueueQuickConnectsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   QuickConnectIds: [ // QuickConnectsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateQueueQuickConnectsCommandInput - {@link DisassociateQueueQuickConnectsCommandInput}
 * @returns {@link DisassociateQueueQuickConnectsCommandOutput}
 * @see {@link DisassociateQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link DisassociateQueueQuickConnectsCommandOutput} for command's `response` shape.
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
export class DisassociateQueueQuickConnectsCommand extends $Command
  .classBuilder<
    DisassociateQueueQuickConnectsCommandInput,
    DisassociateQueueQuickConnectsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateQueueQuickConnects", {})
  .n("ConnectClient", "DisassociateQueueQuickConnectsCommand")
  .sc(DisassociateQueueQuickConnects)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateQueueQuickConnectsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateQueueQuickConnectsCommandInput;
      output: DisassociateQueueQuickConnectsCommandOutput;
    };
  };
}
