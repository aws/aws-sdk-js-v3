// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectHealthClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeactivateSubscriptionInput, DeactivateSubscriptionOutput } from "../models/models_0";
import { DeactivateSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateSubscriptionCommand}.
 */
export interface DeactivateSubscriptionCommandInput extends DeactivateSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link DeactivateSubscriptionCommand}.
 */
export interface DeactivateSubscriptionCommandOutput extends DeactivateSubscriptionOutput, __MetadataBearer {}

/**
 * <p>Deactivates a Subscription to stop billing for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, DeactivateSubscriptionCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, DeactivateSubscriptionCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // DeactivateSubscriptionInput
 *   domainId: "STRING_VALUE", // required
 *   subscriptionId: "STRING_VALUE", // required
 * };
 * const command = new DeactivateSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateSubscriptionOutput
 * //   subscription: { // SubscriptionDescription
 * //     domainId: "STRING_VALUE", // required
 * //     subscriptionId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     status: "ACTIVE" || "INACTIVE" || "DELETED", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     activatedAt: new Date("TIMESTAMP"),
 * //     deactivatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeactivateSubscriptionCommandInput - {@link DeactivateSubscriptionCommandInput}
 * @returns {@link DeactivateSubscriptionCommandOutput}
 * @see {@link DeactivateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeactivateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error is thrown when a transient error causes our API to fail.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This error is thrown when the client supplies invalid input to the API.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class DeactivateSubscriptionCommand extends $Command
  .classBuilder<
    DeactivateSubscriptionCommandInput,
    DeactivateSubscriptionCommandOutput,
    ConnectHealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectHealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ConnectHealth", "DeactivateSubscription", {})
  .n("ConnectHealthClient", "DeactivateSubscriptionCommand")
  .sc(DeactivateSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateSubscriptionInput;
      output: DeactivateSubscriptionOutput;
    };
    sdk: {
      input: DeactivateSubscriptionCommandInput;
      output: DeactivateSubscriptionCommandOutput;
    };
  };
}
