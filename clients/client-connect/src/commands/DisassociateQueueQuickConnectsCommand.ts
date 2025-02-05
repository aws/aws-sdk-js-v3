// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateQueueQuickConnectsRequest } from "../models/models_1";
import {
  de_DisassociateQueueQuickConnectsCommand,
  se_DisassociateQueueQuickConnectsCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Disassociates a set of quick connects from a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DisassociateQueueQuickConnects", {})
  .n("ConnectClient", "DisassociateQueueQuickConnectsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateQueueQuickConnectsCommand)
  .de(de_DisassociateQueueQuickConnectsCommand)
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
