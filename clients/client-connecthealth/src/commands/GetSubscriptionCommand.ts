// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectHealthClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSubscriptionInput, GetSubscriptionOutput } from "../models/models_0";
import { GetSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionCommand}.
 */
export interface GetSubscriptionCommandInput extends GetSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionCommand}.
 */
export interface GetSubscriptionCommandOutput extends GetSubscriptionOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a Subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, GetSubscriptionCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, GetSubscriptionCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // GetSubscriptionInput
 *   domainId: "STRING_VALUE", // required
 *   subscriptionId: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionOutput
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
 * @param GetSubscriptionCommandInput - {@link GetSubscriptionCommandInput}
 * @returns {@link GetSubscriptionCommandOutput}
 * @see {@link GetSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionCommandOutput} for command's `response` shape.
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
export class GetSubscriptionCommand extends $Command
  .classBuilder<
    GetSubscriptionCommandInput,
    GetSubscriptionCommandOutput,
    ConnectHealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectHealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ConnectHealth", "GetSubscription", {})
  .n("ConnectHealthClient", "GetSubscriptionCommand")
  .sc(GetSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionInput;
      output: GetSubscriptionOutput;
    };
    sdk: {
      input: GetSubscriptionCommandInput;
      output: GetSubscriptionCommandOutput;
    };
  };
}
