// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListPublishingDestinationsRequest, ListPublishingDestinationsResponse } from "../models/models_1";
import { ListPublishingDestinations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPublishingDestinationsCommand}.
 */
export interface ListPublishingDestinationsCommandInput extends ListPublishingDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPublishingDestinationsCommand}.
 */
export interface ListPublishingDestinationsCommandOutput extends ListPublishingDestinationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of publishing destinations associated with the specified
 *         <code>detectorId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListPublishingDestinationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListPublishingDestinationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListPublishingDestinationsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPublishingDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPublishingDestinationsResponse
 * //   Destinations: [ // Destinations // required
 * //     { // Destination
 * //       DestinationId: "STRING_VALUE", // required
 * //       DestinationType: "S3", // required
 * //       Status: "PENDING_VERIFICATION" || "PUBLISHING" || "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY" || "STOPPED", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPublishingDestinationsCommandInput - {@link ListPublishingDestinationsCommandInput}
 * @returns {@link ListPublishingDestinationsCommandOutput}
 * @see {@link ListPublishingDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListPublishingDestinationsCommandOutput} for command's `response` shape.
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
export class ListPublishingDestinationsCommand extends $Command
  .classBuilder<
    ListPublishingDestinationsCommandInput,
    ListPublishingDestinationsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "ListPublishingDestinations", {})
  .n("GuardDutyClient", "ListPublishingDestinationsCommand")
  .sc(ListPublishingDestinations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPublishingDestinationsRequest;
      output: ListPublishingDestinationsResponse;
    };
    sdk: {
      input: ListPublishingDestinationsCommandInput;
      output: ListPublishingDestinationsCommandOutput;
    };
  };
}
