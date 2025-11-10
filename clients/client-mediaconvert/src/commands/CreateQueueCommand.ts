// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { CreateQueueRequest, CreateQueueResponse } from "../models/models_2";
import { CreateQueue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResponse, __MetadataBearer {}

/**
 * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreateQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreateQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // CreateQueueRequest
 *   ConcurrentJobs: Number("int"),
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   PricingPlan: "ON_DEMAND" || "RESERVED",
 *   ReservationPlanSettings: { // ReservationPlanSettings
 *     Commitment: "ONE_YEAR", // required
 *     RenewalType: "AUTO_RENEW" || "EXPIRE", // required
 *     ReservedSlots: Number("int"), // required
 *   },
 *   Status: "ACTIVE" || "PAUSED",
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResponse
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
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You attempted to create more resources than the service allows based on service quotas.
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
export class CreateQueueCommand extends $Command
  .classBuilder<
    CreateQueueCommandInput,
    CreateQueueCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConvert", "CreateQueue", {})
  .n("MediaConvertClient", "CreateQueueCommand")
  .sc(CreateQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueRequest;
      output: CreateQueueResponse;
    };
    sdk: {
      input: CreateQueueCommandInput;
      output: CreateQueueCommandOutput;
    };
  };
}
