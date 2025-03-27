// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ClaimPhoneNumberRequest, ClaimPhoneNumberResponse } from "../models/models_0";
import { de_ClaimPhoneNumberCommand, se_ClaimPhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ClaimPhoneNumberCommand}.
 */
export interface ClaimPhoneNumberCommandInput extends ClaimPhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link ClaimPhoneNumberCommand}.
 */
export interface ClaimPhoneNumberCommandOutput extends ClaimPhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Claims an available phone number to your Amazon Connect instance or traffic distribution
 *    group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created.</p>
 *          <p>For more information about how to use this operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-number.html">Claim a phone number in your
 *     country</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-numbers-traffic-distribution-groups.html">Claim phone
 *     numbers to traffic distribution groups</a> in the <i>Amazon Connect Administrator
 *     Guide</i>. </p>
 *          <important>
 *             <p>You can call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html">SearchAvailablePhoneNumbers</a> API for available phone numbers that you can claim. Call
 *     the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a>
 *     operation.</p>
 *          </important>
 *          <p>If you plan to claim and release numbers frequently,
 *                 contact us for a service quota exception. Otherwise, it is possible you will be blocked from
 *                 claiming and releasing any more numbers until up to 180 days past the oldest number
 *                 released has expired.</p>
 *          <p>By default you can claim and release up to 200% of your maximum number of active
 *                 phone numbers. If you claim and release phone numbers using
 *                 the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number
 *                 service level quota, you will be blocked from claiming any more numbers until 180
 *                 days past the oldest number released has expired. </p>
 *          <p>For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180
 *                 day period you release 99, claim 99, and then release 99, you will have exceeded the
 *                 200% limit. At that point you are blocked from claiming any more numbers until you
 *                 open an Amazon Web Services support ticket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ClaimPhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ClaimPhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ClaimPhoneNumberRequest
 *   TargetArn: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   PhoneNumber: "STRING_VALUE", // required
 *   PhoneNumberDescription: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ClaimPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // ClaimPhoneNumberResponse
 * //   PhoneNumberId: "STRING_VALUE",
 * //   PhoneNumberArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ClaimPhoneNumberCommandInput - {@link ClaimPhoneNumberCommandInput}
 * @returns {@link ClaimPhoneNumberCommandOutput}
 * @see {@link ClaimPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ClaimPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
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
export class ClaimPhoneNumberCommand extends $Command
  .classBuilder<
    ClaimPhoneNumberCommandInput,
    ClaimPhoneNumberCommandOutput,
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
  .s("AmazonConnectService", "ClaimPhoneNumber", {})
  .n("ConnectClient", "ClaimPhoneNumberCommand")
  .f(void 0, void 0)
  .ser(se_ClaimPhoneNumberCommand)
  .de(de_ClaimPhoneNumberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ClaimPhoneNumberRequest;
      output: ClaimPhoneNumberResponse;
    };
    sdk: {
      input: ClaimPhoneNumberCommandInput;
      output: ClaimPhoneNumberCommandOutput;
    };
  };
}
