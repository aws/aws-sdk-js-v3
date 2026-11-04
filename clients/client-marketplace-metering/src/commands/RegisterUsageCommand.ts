// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterUsageRequest, RegisterUsageResult } from "../models/models_0";
import { RegisterUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterUsageCommand}.
 */
export interface RegisterUsageCommandInput extends RegisterUsageRequest {}
/**
 * @public
 *
 * The output of {@link RegisterUsageCommand}.
 */
export interface RegisterUsageCommandOutput extends RegisterUsageResult, __MetadataBearer {}

/**
 * Paid container software products sold through Amazon Web Services Marketplace must integrate with the Amazon Web Services Marketplace Metering Service and call the `RegisterUsage` operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call `RegisterUsage`, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of `RegisterUsage`. `RegisterUsage` performs two primary functions: metering and entitlement.
 *
 * - *Entitlement*: `RegisterUsage` allows you to verify that the customer running your paid software is subscribed to your product on Amazon Web Services Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with `RegisterUsage` is only required to guard against unauthorized use at container startup, as such a `CustomerNotSubscribedException` or `PlatformNotSupportedException` will only be thrown on the initial call to `RegisterUsage`. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a `CustomerNotSubscribedException`, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.
 * - *Metering*: `RegisterUsage` meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged for 10 tasks. Software metering is handled by the Amazon Web Services Marketplace metering control plane—your software is not required to perform metering-specific actions other than to call `RegisterUsage` to commence metering. The Amazon Web Services Marketplace metering control plane will also bill customers for running ECS tasks and Amazon EKS pods, regardless of the customer's subscription state, which removes the need for your software to run entitlement checks at runtime. For containers, `RegisterUsage` should be called immediately at launch. If you don’t register the container within the first 6 hours of the launch, Amazon Web Services Marketplace Metering Service doesn’t provide any metering guarantees for previous months. Metering will continue, however, for the current month forward until the container ends. `RegisterUsage` is for metering paid hourly container products.
 *
 *   For Amazon Web Services Regions that support `RegisterUsage`, see [RegisterUsage Region support](https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#registerusage-region-support).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, RegisterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, RegisterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * // import type { MarketplaceMeteringClientConfig } from "@aws-sdk/client-marketplace-metering";
 * const config = {}; // type is MarketplaceMeteringClientConfig
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // RegisterUsageRequest
 *   ProductCode: "STRING_VALUE", // required
 *   PublicKeyVersion: Number("int"), // required
 *   Nonce: "STRING_VALUE",
 * };
 * const command = new RegisterUsageCommand(input);
 * const response = await client.send(command);
 * // { // RegisterUsageResult
 * //   PublicKeyRotationTimestamp: new Date("TIMESTAMP"),
 * //   Signature: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterUsageCommandInput - {@link RegisterUsageCommandInput}
 * @returns {@link RegisterUsageCommandOutput}
 * @see {@link RegisterUsageCommandInput} for command's `input` shape.
 * @see {@link RegisterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link CustomerNotEntitledException} (client fault)
 *
 * Exception thrown when the customer does not have a valid subscription for the product.
 *
 * @throws {@link DisabledApiException} (client fault)
 *
 * The API is disabled in the Region.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the Amazon Web Services forums.
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *
 * The product code passed does not match the product code used for publishing the product.
 *
 * @throws {@link InvalidPublicKeyVersionException} (client fault)
 *
 * Public Key version is invalid.
 *
 * @throws {@link InvalidRegionException} (client fault)
 *
 * `RegisterUsage` must be called in the same Amazon Web Services Region the ECS task was launched in. This prevents a container from hardcoding a Region (e.g. withRegion(“us-east-1”) when calling `RegisterUsage`.
 *
 * @throws {@link PlatformNotSupportedException} (client fault)
 *
 * Amazon Web Services Marketplace does not support metering usage from the underlying platform. Currently, Amazon ECS, Amazon EKS, and Fargate are supported.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The calls to the API are throttled.
 *
 * @throws {@link MarketplaceMeteringServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceMetering service.
 *
 * @public
 */
export class RegisterUsageCommand extends command<RegisterUsageCommandInput, RegisterUsageCommandOutput>(
  _ep0,
  _mw0,
  "RegisterUsage",
  RegisterUsage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterUsageRequest;
      output: RegisterUsageResult;
    };
    sdk: {
      input: RegisterUsageCommandInput;
      output: RegisterUsageCommandOutput;
    };
  };
}
