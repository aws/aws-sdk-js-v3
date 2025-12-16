// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInboundExternalLinkRequest, GetInboundExternalLinkResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { GetInboundExternalLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInboundExternalLinkCommand}.
 */
export interface GetInboundExternalLinkCommandInput extends GetInboundExternalLinkRequest {}
/**
 * @public
 *
 * The output of {@link GetInboundExternalLinkCommand}.
 */
export interface GetInboundExternalLinkCommandOutput extends GetInboundExternalLinkResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an inbound external link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetInboundExternalLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetInboundExternalLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetInboundExternalLinkRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 * };
 * const command = new GetInboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetInboundExternalLinkResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * //   domainName: "STRING_VALUE", // required
 * //   flowModules: [ // ModuleConfigurationList
 * //     { // ModuleConfiguration
 * //       version: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       dependsOn: [ // FlowModuleNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       moduleParameters: { // ModuleParameters Union: only one key present
 * //         noBid: { // NoBidModuleParameters
 * //           reason: "STRING_VALUE",
 * //           reasonCode: Number("int"),
 * //           passThroughPercentage: Number("float"),
 * //         },
 * //         openRtbAttribute: { // OpenRtbAttributeModuleParameters
 * //           filterType: "INCLUDE" || "EXCLUDE", // required
 * //           filterConfiguration: [ // FilterConfiguration // required
 * //             { // Filter
 * //               criteria: [ // FilterCriteria // required
 * //                 { // FilterCriterion
 * //                   path: "STRING_VALUE", // required
 * //                   values: [ // ValueList // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           action: { // Action Union: only one key present
 * //             noBid: { // NoBidAction
 * //               noBidReasonCode: Number("int"),
 * //             },
 * //             headerTag: { // HeaderTagAction
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           holdbackPercentage: Number("float"), // required
 * //         },
 * //         rateLimiter: { // RateLimiterModuleParameters
 * //           tps: Number("float"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   pendingFlowModules: [
 * //     {
 * //       version: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       dependsOn: [
 * //         "STRING_VALUE",
 * //       ],
 * //       moduleParameters: {//  Union: only one key present
 * //         noBid: {
 * //           reason: "STRING_VALUE",
 * //           reasonCode: Number("int"),
 * //           passThroughPercentage: Number("float"),
 * //         },
 * //         openRtbAttribute: {
 * //           filterType: "INCLUDE" || "EXCLUDE", // required
 * //           filterConfiguration: [ // required
 * //             {
 * //               criteria: [ // required
 * //                 {
 * //                   path: "STRING_VALUE", // required
 * //                   values: [ // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           action: {//  Union: only one key present
 * //             noBid: {
 * //               noBidReasonCode: Number("int"),
 * //             },
 * //             headerTag: {
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           holdbackPercentage: Number("float"), // required
 * //         },
 * //         rateLimiter: {
 * //           tps: Number("float"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   attributes: { // LinkAttributes
 * //     responderErrorMasking: [ // ResponderErrorMasking
 * //       { // ResponderErrorMaskingForHttpCode
 * //         httpCode: "STRING_VALUE", // required
 * //         action: "NO_BID" || "PASSTHROUGH", // required
 * //         loggingTypes: [ // ResponderErrorMaskingLoggingTypes // required
 * //           "NONE" || "METRIC" || "RESPONSE",
 * //         ],
 * //         responseLoggingPercentage: Number("float"),
 * //       },
 * //     ],
 * //     customerProvidedId: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   logSettings: { // LinkLogSettings
 * //     applicationLogs: { // LinkApplicationLogConfiguration
 * //       sampling: { // LinkApplicationLogSampling
 * //         errorLog: Number("double"), // required
 * //         filterLog: Number("double"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInboundExternalLinkCommandInput - {@link GetInboundExternalLinkCommandInput}
 * @returns {@link GetInboundExternalLinkCommandOutput}
 * @see {@link GetInboundExternalLinkCommandInput} for command's `input` shape.
 * @see {@link GetInboundExternalLinkCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get inbound external link details
 * ```javascript
 * // Get details of an inbound external link
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321"
 * };
 * const command = new GetInboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2024-01-15T10:30:00Z",
 *   domainName: "rtb-gw-12345678.example.com",
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   status: "ACTIVE",
 *   updatedAt: "2024-01-15T10:35:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInboundExternalLinkCommand extends $Command
  .classBuilder<
    GetInboundExternalLinkCommandInput,
    GetInboundExternalLinkCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "GetInboundExternalLink", {})
  .n("RTBFabricClient", "GetInboundExternalLinkCommand")
  .sc(GetInboundExternalLink$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInboundExternalLinkRequest;
      output: GetInboundExternalLinkResponse;
    };
    sdk: {
      input: GetInboundExternalLinkCommandInput;
      output: GetInboundExternalLinkCommandOutput;
    };
  };
}
