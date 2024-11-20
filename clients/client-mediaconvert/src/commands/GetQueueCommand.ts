// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { GetQueueRequest, GetQueueResponse } from "../models/models_2";
import { de_GetQueueCommand, se_GetQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueueCommand}.
 */
export interface GetQueueCommandInput extends GetQueueRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueCommand}.
 */
export interface GetQueueCommandOutput extends GetQueueResponse, __MetadataBearer {}

/**
 * Retrieve the JSON for a specific queue.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // GetQueueRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetQueueCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueResponse
 * //   Queue: { // Queue
 * //     Arn: "STRING_VALUE",
 * //     ConcurrentJobs: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     Name: "STRING_VALUE", // required
 * //     PricingPlan: "ON_DEMAND" || "RESERVED",
 * //     ProgressingJobsCount: Number("int"),
 * //     ReservationPlan: { // ReservationPlan
 * //       Commitment: "ONE_YEAR",
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       PurchasedAt: new Date("TIMESTAMP"),
 * //       RenewalType: "AUTO_RENEW" || "EXPIRE",
 * //       ReservedSlots: Number("int"),
 * //       Status: "ACTIVE" || "EXPIRED",
 * //     },
 * //     ServiceOverrides: [ // __listOfServiceOverride
 * //       { // ServiceOverride
 * //         Message: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         OverrideValue: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "ACTIVE" || "PAUSED",
 * //     SubmittedJobsCount: Number("int"),
 * //     Type: "SYSTEM" || "CUSTOM",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueueCommandInput - {@link GetQueueCommandInput}
 * @returns {@link GetQueueCommandOutput}
 * @see {@link GetQueueCommandInput} for command's `input` shape.
 * @see {@link GetQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 * @public
 */
export class GetQueueCommand extends $Command
  .classBuilder<
    GetQueueCommandInput,
    GetQueueCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConvert", "GetQueue", {})
  .n("MediaConvertClient", "GetQueueCommand")
  .f(void 0, void 0)
  .ser(se_GetQueueCommand)
  .de(de_GetQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueRequest;
      output: GetQueueResponse;
    };
    sdk: {
      input: GetQueueCommandInput;
      output: GetQueueCommandOutput;
    };
  };
}
