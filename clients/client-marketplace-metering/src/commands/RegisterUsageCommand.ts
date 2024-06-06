// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { RegisterUsageRequest, RegisterUsageResult } from "../models/models_0";
import { de_RegisterUsageCommand, se_RegisterUsageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Paid container software products sold through AWS Marketplace must integrate with the
 *             AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for
 *             software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS
 *             aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you
 *             would like to receive usage data in your seller reports. The sections below explain the
 *             behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary
 *             functions: metering and entitlement.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Entitlement</i>: <code>RegisterUsage</code> allows you to
 *                     verify that the customer running your paid software is subscribed to your
 *                     product on AWS Marketplace, enabling you to guard against unauthorized use. Your
 *                     container image that integrates with <code>RegisterUsage</code> is only required
 *                     to guard against unauthorized use at container startup, as such a
 *                         <code>CustomerNotSubscribedException</code> or
 *                         <code>PlatformNotSupportedException</code> will only be thrown on the
 *                     initial call to <code>RegisterUsage</code>. Subsequent calls from the same
 *                     Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a
 *                         <code>CustomerNotSubscribedException</code>, even if the customer
 *                     unsubscribes while the Amazon ECS task or Amazon EKS pod is still
 *                     running.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Metering</i>: <code>RegisterUsage</code> meters software use
 *                     per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the
 *                     second. A minimum of 1 minute of usage applies to tasks that are short lived.
 *                     For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a
 *                     service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a
 *                     task on all 10 cluster nodes and the customer will be charged: (10 *
 *                     hourly_rate). Metering for software use is automatically handled by the AWS
 *                     Marketplace Metering Control Plane -- your software is not required to perform
 *                     any metering specific actions, other than call <code>RegisterUsage</code> once
 *                     for metering of software use to commence. The AWS Marketplace Metering Control
 *                     Plane will also continue to bill customers for running ECS tasks and Amazon EKS
 *                     pods, regardless of the customers subscription state, removing the need for your
 *                     software to perform entitlement checks at runtime.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, RegisterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, RegisterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
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
 *  <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
 *
 * @throws {@link DisabledApiException} (client fault)
 *  <p>The API is disabled in the Region.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *  <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 *
 * @throws {@link InvalidPublicKeyVersionException} (client fault)
 *  <p>Public Key version is invalid.</p>
 *
 * @throws {@link InvalidRegionException} (client fault)
 *  <p>
 *             <code>RegisterUsage</code> must be called in the same AWS Region the ECS task was
 *             launched in. This prevents a container from hardcoding a Region (e.g.
 *             withRegion(“us-east-1”) when calling <code>RegisterUsage</code>.</p>
 *
 * @throws {@link PlatformNotSupportedException} (client fault)
 *  <p>AWS Marketplace does not support metering usage from the underlying platform.
 *             Currently, Amazon ECS, Amazon EKS, and AWS Fargate are supported.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the API are throttled.</p>
 *
 * @throws {@link MarketplaceMeteringServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceMetering service.</p>
 *
 * @public
 */
export class RegisterUsageCommand extends $Command
  .classBuilder<
    RegisterUsageCommandInput,
    RegisterUsageCommandOutput,
    MarketplaceMeteringClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MarketplaceMeteringClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPMeteringService", "RegisterUsage", {})
  .n("MarketplaceMeteringClient", "RegisterUsageCommand")
  .f(void 0, void 0)
  .ser(se_RegisterUsageCommand)
  .de(de_RegisterUsageCommand)
  .build() {}
