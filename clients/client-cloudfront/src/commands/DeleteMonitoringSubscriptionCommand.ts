// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMonitoringSubscriptionRequest, DeleteMonitoringSubscriptionResult } from "../models/models_0";
import { DeleteMonitoringSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMonitoringSubscriptionCommand}.
 */
export interface DeleteMonitoringSubscriptionCommandInput extends DeleteMonitoringSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMonitoringSubscriptionCommand}.
 */
export interface DeleteMonitoringSubscriptionCommandOutput extends DeleteMonitoringSubscriptionResult, __MetadataBearer {}

/**
 * Disables additional CloudWatch metrics for the specified CloudFront distribution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteMonitoringSubscriptionRequest
 *   DistributionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitoringSubscriptionCommandInput - {@link DeleteMonitoringSubscriptionCommandInput}
 * @returns {@link DeleteMonitoringSubscriptionCommandOutput}
 * @see {@link DeleteMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitoringSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *
 * The specified distribution does not exist.
 *
 * @throws {@link NoSuchMonitoringSubscription} (client fault)
 *
 * A monitoring subscription does not exist for the specified distribution.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteMonitoringSubscriptionCommand extends command<DeleteMonitoringSubscriptionCommandInput, DeleteMonitoringSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMonitoringSubscription",
  DeleteMonitoringSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMonitoringSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteMonitoringSubscriptionCommandInput;
      output: DeleteMonitoringSubscriptionCommandOutput;
    };
  };
}
