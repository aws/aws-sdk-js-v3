// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTimeOffRequest, GetTimeOffResponse } from "../models/models_0";
import { GetTimeOff$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTimeOffCommand}.
 */
export interface GetTimeOffCommandInput extends GetTimeOffRequest {}
/**
 * @public
 *
 * The output of {@link GetTimeOffCommand}.
 */
export interface GetTimeOffCommandOutput extends GetTimeOffResponse, __MetadataBearer {}

/**
 * <p>Returns a time off request, including its current status and validation results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectSchedulingClient, GetTimeOffCommand } from "@aws-sdk/client-connectscheduling"; // ES Modules import
 * // const { ConnectSchedulingClient, GetTimeOffCommand } = require("@aws-sdk/client-connectscheduling"); // CommonJS import
 * // import type { ConnectSchedulingClientConfig } from "@aws-sdk/client-connectscheduling";
 * const config = {}; // type is ConnectSchedulingClientConfig
 * const client = new ConnectSchedulingClient(config);
 * const input = { // GetTimeOffRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   TimeOffId: "STRING_VALUE", // required
 * };
 * const command = new GetTimeOffCommand(input);
 * const response = await client.send(command);
 * // { // GetTimeOffResponse
 * //   TimeOffId: "STRING_VALUE", // required
 * //   UserId: "STRING_VALUE", // required
 * //   ShiftActivityId: "STRING_VALUE", // required
 * //   StartAt: new Date("TIMESTAMP"), // required
 * //   EndAt: new Date("TIMESTAMP"), // required
 * //   Status: "PENDING" || "APPROVED" || "REJECTED" || "CANCELLED" || "AWAITING_APPROVAL", // required
 * //   Description: "STRING_VALUE",
 * //   ValidationResults: [ // TimeOffValidationResults
 * //     { // TimeOffValidationResult
 * //       Severity: "WARNING" || "ERROR", // required
 * //       Code: "INSUFFICIENT_USER_TIME_OFF_BALANCE" || "INSUFFICIENT_GROUP_TIME_OFF_ALLOWANCE" || "INSUFFICIENT_STAFFING_GROUP_TIME_OFF_ALLOWANCE" || "CONFLICTING_TIME_OFF_REQUEST", // required
 * //     },
 * //   ],
 * //   CreatedBy: { // ActorInfo Union: only one key present
 * //     ConnectUserArn: "STRING_VALUE",
 * //     AWSIdentityArn: "STRING_VALUE",
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedBy: {//  Union: only one key present
 * //     ConnectUserArn: "STRING_VALUE",
 * //     AWSIdentityArn: "STRING_VALUE",
 * //   },
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetTimeOffCommandInput - {@link GetTimeOffCommandInput}
 * @returns {@link GetTimeOffCommandOutput}
 * @see {@link GetTimeOffCommandInput} for command's `input` shape.
 * @see {@link GetTimeOffCommandOutput} for command's `response` shape.
 * @see {@link ConnectSchedulingClientResolvedConfig | config} for ConnectSchedulingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConnectSchedulingServiceException}
 * <p>Base exception class for all service exceptions from ConnectScheduling service.</p>
 *
 *
 * @example To get a time off request
 * ```javascript
 * // The following example gets a time off request that was approved past a failed group allowance rule, which is reported as a WARNING.
 * const input = {
 *   InstanceId: "12345678-1234-1234-1234-123456789012",
 *   TimeOffId: "abcdef12-3456-7890-abcd-ef1234567890",
 *   UserId: "87654321-4321-4321-4321-210987654321"
 * };
 * const command = new GetTimeOffCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreatedAt: 1793644200,
 *   CreatedBy: {
 *     ConnectUserArn: "arn:aws:connect:us-west-2:123456789012:instance/12345678-1234-1234-1234-123456789012/agent/87654321-4321-4321-4321-210987654321"
 *   },
 *   Description: "Family event",
 *   EndAt: 1795453200,
 *   ShiftActivityId: "11112222-3333-4444-5555-666677778888",
 *   StartAt: 1795424400,
 *   Status: "APPROVED",
 *   TimeOffId: "abcdef12-3456-7890-abcd-ef1234567890",
 *   UpdatedAt: 1793721900,
 *   UpdatedBy: {
 *     ConnectUserArn: "arn:aws:connect:us-west-2:123456789012:instance/12345678-1234-1234-1234-123456789012/agent/99998888-7777-6666-5555-444433332222"
 *   },
 *   UserId: "87654321-4321-4321-4321-210987654321",
 *   ValidationResults: [
 *     {
 *       Code: "INSUFFICIENT_GROUP_TIME_OFF_ALLOWANCE",
 *       Severity: "WARNING"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTimeOffCommand extends command<GetTimeOffCommandInput, GetTimeOffCommandOutput>(
  _ep0,
  _mw0,
  "GetTimeOff",
  GetTimeOff$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTimeOffRequest;
      output: GetTimeOffResponse;
    };
    sdk: {
      input: GetTimeOffCommandInput;
      output: GetTimeOffCommandOutput;
    };
  };
}
