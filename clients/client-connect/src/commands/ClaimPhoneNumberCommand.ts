// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ClaimPhoneNumberRequest, ClaimPhoneNumberResponse } from "../models/models_0";
import { ClaimPhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Claims an available phone number to your Connect Customer instance or traffic distribution group. You can call this API only in the same Amazon Web Services Region where the Connect Customer instance or traffic distribution group was created.
 *
 * For more information about how to use this operation, see [Claim a phone number in your country](https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-number.html) and [Claim phone numbers to traffic distribution groups](https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-numbers-traffic-distribution-groups.html) in the *Connect Customer Administrator Guide*.
 *
 * > **Important:** You can call the [SearchAvailablePhoneNumbers](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html) API for available phone numbers that you can claim. Call the [DescribePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html) API to verify the status of a previous [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html) operation.
 *
 * If you plan to claim and release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired.
 *
 * By default you can claim and release up to 200% of your maximum number of active phone numbers. If you claim and release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 180 days past the oldest number released has expired.
 *
 * For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ClaimPhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ClaimPhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ClaimPhoneNumberCommand extends command<ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "ClaimPhoneNumber",
  ClaimPhoneNumber$
) {
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
