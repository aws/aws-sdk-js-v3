// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountSubscriptionRequest, DescribeAccountSubscriptionResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeAccountSubscription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountSubscriptionCommand}.
 */
export interface DescribeAccountSubscriptionCommandInput extends DescribeAccountSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountSubscriptionCommand}.
 */
export interface DescribeAccountSubscriptionCommandOutput
  extends DescribeAccountSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Use the DescribeAccountSubscription operation to receive a description of an Quick Sight account's subscription. A successful API call returns an <code>AccountInfo</code> object that includes an account's name, subscription status, authentication type, edition, and notification email address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAccountSubscriptionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountSubscriptionResponse
 * //   AccountInfo: { // AccountInfo
 * //     AccountName: "STRING_VALUE",
 * //     Edition: "STANDARD" || "ENTERPRISE" || "ENTERPRISE_AND_Q",
 * //     NotificationEmail: "STRING_VALUE",
 * //     AuthenticationType: "STRING_VALUE",
 * //     AccountSubscriptionStatus: "STRING_VALUE",
 * //     IAMIdentityCenterInstanceArn: "STRING_VALUE",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountSubscriptionCommandInput - {@link DescribeAccountSubscriptionCommandInput}
 * @returns {@link DescribeAccountSubscriptionCommandOutput}
 * @see {@link DescribeAccountSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeAccountSubscriptionCommand extends $Command
  .classBuilder<
    DescribeAccountSubscriptionCommandInput,
    DescribeAccountSubscriptionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeAccountSubscription", {})
  .n("QuickSightClient", "DescribeAccountSubscriptionCommand")
  .sc(DescribeAccountSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountSubscriptionRequest;
      output: DescribeAccountSubscriptionResponse;
    };
    sdk: {
      input: DescribeAccountSubscriptionCommandInput;
      output: DescribeAccountSubscriptionCommandOutput;
    };
  };
}
