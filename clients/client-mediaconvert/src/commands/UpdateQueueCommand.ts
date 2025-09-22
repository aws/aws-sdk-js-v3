// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { UpdateQueueRequest, UpdateQueueResponse } from "../models/models_2";
import { UpdateQueue } from "../schemas/schemas_9_Queue";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandInput extends UpdateQueueRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandOutput extends UpdateQueueResponse, __MetadataBearer {}

/**
 * Modify one of your existing queues.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdateQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdateQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // UpdateQueueRequest
 *   ConcurrentJobs: Number("int"),
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   ReservationPlanSettings: { // ReservationPlanSettings
 *     Commitment: "ONE_YEAR", // required
 *     RenewalType: "AUTO_RENEW" || "EXPIRE", // required
 *     ReservedSlots: Number("int"), // required
 *   },
 *   Status: "ACTIVE" || "PAUSED",
 * };
 * const command = new UpdateQueueCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQueueResponse
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
 * @param UpdateQueueCommandInput - {@link UpdateQueueCommandInput}
 * @returns {@link UpdateQueueCommandOutput}
 * @see {@link UpdateQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateQueueCommand extends $Command
  .classBuilder<
    UpdateQueueCommandInput,
    UpdateQueueCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConvert", "UpdateQueue", {})
  .n("MediaConvertClient", "UpdateQueueCommand")
  .sc(UpdateQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueRequest;
      output: UpdateQueueResponse;
    };
    sdk: {
      input: UpdateQueueCommandInput;
      output: UpdateQueueCommandOutput;
    };
  };
}
