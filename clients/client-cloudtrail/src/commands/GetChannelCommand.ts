// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetChannelRequest, GetChannelResponse } from "../models/models_0";
import { GetChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelCommand}.
 */
export interface GetChannelCommandInput extends GetChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelCommand}.
 */
export interface GetChannelCommandOutput extends GetChannelResponse, __MetadataBearer {}

/**
 * <p> Returns information about a specific channel.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetChannelCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetChannelCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetChannelRequest
 *   Channel: "STRING_VALUE", // required
 * };
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Source: "STRING_VALUE",
 * //   SourceConfig: { // SourceConfig
 * //     ApplyToAllRegions: true || false,
 * //     AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //       { // AdvancedEventSelector
 * //         Name: "STRING_VALUE",
 * //         FieldSelectors: [ // AdvancedFieldSelectors // required
 * //           { // AdvancedFieldSelector
 * //             Field: "STRING_VALUE", // required
 * //             Equals: [ // Operator
 * //               "STRING_VALUE",
 * //             ],
 * //             StartsWith: [
 * //               "STRING_VALUE",
 * //             ],
 * //             EndsWith: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NotEquals: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NotStartsWith: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NotEndsWith: "<Operator>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   Destinations: [ // Destinations
 * //     { // Destination
 * //       Type: "EVENT_DATA_STORE" || "AWS_SERVICE", // required
 * //       Location: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IngestionStatus: { // IngestionStatus
 * //     LatestIngestionSuccessTime: new Date("TIMESTAMP"),
 * //     LatestIngestionSuccessEventID: "STRING_VALUE",
 * //     LatestIngestionErrorCode: "STRING_VALUE",
 * //     LatestIngestionAttemptTime: new Date("TIMESTAMP"),
 * //     LatestIngestionAttemptEventID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelCommandInput - {@link GetChannelCommandInput}
 * @returns {@link GetChannelCommandOutput}
 * @see {@link GetChannelCommandInput} for command's `input` shape.
 * @see {@link GetChannelCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ChannelARNInvalidException} (client fault)
 *  <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 *
 * @throws {@link ChannelNotFoundException} (client fault)
 *  <p>This exception is thrown when CloudTrail cannot find the specified channel.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class GetChannelCommand extends $Command
  .classBuilder<
    GetChannelCommandInput,
    GetChannelCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "GetChannel", {})
  .n("CloudTrailClient", "GetChannelCommand")
  .sc(GetChannel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelRequest;
      output: GetChannelResponse;
    };
    sdk: {
      input: GetChannelCommandInput;
      output: GetChannelCommandOutput;
    };
  };
}
