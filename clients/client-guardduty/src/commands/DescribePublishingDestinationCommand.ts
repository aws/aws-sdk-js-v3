// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { DescribePublishingDestinationRequest, DescribePublishingDestinationResponse } from "../models/models_0";
import { DescribePublishingDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePublishingDestinationCommand}.
 */
export interface DescribePublishingDestinationCommandInput extends DescribePublishingDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DescribePublishingDestinationCommand}.
 */
export interface DescribePublishingDestinationCommandOutput
  extends DescribePublishingDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the publishing destination specified by the provided
 *         <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DescribePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DescribePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DescribePublishingDestinationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 * };
 * const command = new DescribePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * // { // DescribePublishingDestinationResponse
 * //   DestinationId: "STRING_VALUE", // required
 * //   DestinationType: "S3", // required
 * //   Status: "PENDING_VERIFICATION" || "PUBLISHING" || "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY" || "STOPPED", // required
 * //   PublishingFailureStartTimestamp: Number("long"), // required
 * //   DestinationProperties: { // DestinationProperties
 * //     DestinationArn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePublishingDestinationCommandInput - {@link DescribePublishingDestinationCommandInput}
 * @returns {@link DescribePublishingDestinationCommandOutput}
 * @see {@link DescribePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class DescribePublishingDestinationCommand extends $Command
  .classBuilder<
    DescribePublishingDestinationCommandInput,
    DescribePublishingDestinationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DescribePublishingDestination", {})
  .n("GuardDutyClient", "DescribePublishingDestinationCommand")
  .sc(DescribePublishingDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePublishingDestinationRequest;
      output: DescribePublishingDestinationResponse;
    };
    sdk: {
      input: DescribePublishingDestinationCommandInput;
      output: DescribePublishingDestinationCommandOutput;
    };
  };
}
