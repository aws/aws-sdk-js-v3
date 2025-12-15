// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateFlowRequest, AssociateFlowResponse } from "../models/models_0";
import { AssociateFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateFlowCommand}.
 */
export interface AssociateFlowCommandInput extends AssociateFlowRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFlowCommand}.
 */
export interface AssociateFlowCommandOutput extends AssociateFlowResponse, __MetadataBearer {}

/**
 * <p>Associates a connect resource to a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   FlowId: "STRING_VALUE", // required
 *   ResourceType: "SMS_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL" || "ANALYTICS_CONNECTOR" || "WHATSAPP_MESSAGING_PHONE_NUMBER", // required
 * };
 * const command = new AssociateFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateFlowCommandInput - {@link AssociateFlowCommandInput}
 * @returns {@link AssociateFlowCommandOutput}
 * @see {@link AssociateFlowCommandInput} for command's `input` shape.
 * @see {@link AssociateFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class AssociateFlowCommand extends $Command
  .classBuilder<
    AssociateFlowCommandInput,
    AssociateFlowCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateFlow", {})
  .n("ConnectClient", "AssociateFlowCommand")
  .sc(AssociateFlow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFlowRequest;
      output: {};
    };
    sdk: {
      input: AssociateFlowCommandInput;
      output: AssociateFlowCommandOutput;
    };
  };
}
