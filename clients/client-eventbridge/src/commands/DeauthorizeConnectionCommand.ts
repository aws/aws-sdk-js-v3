// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import type { DeauthorizeConnectionRequest, DeauthorizeConnectionResponse } from "../models/models_0";
import { DeauthorizeConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeauthorizeConnectionCommand}.
 */
export interface DeauthorizeConnectionCommandInput extends DeauthorizeConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeauthorizeConnectionCommand}.
 */
export interface DeauthorizeConnectionCommandOutput extends DeauthorizeConnectionResponse, __MetadataBearer {}

/**
 * <p>Removes all authorization parameters from the connection. This lets you remove the secret
 *       from the connection so you can reuse it without having to create a new connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeauthorizeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeauthorizeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // DeauthorizeConnectionRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeauthorizeConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeauthorizeConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING" || "ACTIVE" || "FAILED_CONNECTIVITY",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeauthorizeConnectionCommandInput - {@link DeauthorizeConnectionCommandInput}
 * @returns {@link DeauthorizeConnectionCommandOutput}
 * @see {@link DeauthorizeConnectionCommandInput} for command's `input` shape.
 * @see {@link DeauthorizeConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class DeauthorizeConnectionCommand extends $Command
  .classBuilder<
    DeauthorizeConnectionCommandInput,
    DeauthorizeConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DeauthorizeConnection", {})
  .n("EventBridgeClient", "DeauthorizeConnectionCommand")
  .sc(DeauthorizeConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeauthorizeConnectionRequest;
      output: DeauthorizeConnectionResponse;
    };
    sdk: {
      input: DeauthorizeConnectionCommandInput;
      output: DeauthorizeConnectionCommandOutput;
    };
  };
}
