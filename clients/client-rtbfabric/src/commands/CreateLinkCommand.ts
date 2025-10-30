// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLinkRequest, CreateLinkResponse } from "../models/models_0";
import { de_CreateLinkCommand, se_CreateLinkCommand } from "../protocols/Aws_restJson1";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLinkCommand}.
 */
export interface CreateLinkCommandInput extends CreateLinkRequest {}
/**
 * @public
 *
 * The output of {@link CreateLinkCommand}.
 */
export interface CreateLinkCommandOutput extends CreateLinkResponse, __MetadataBearer {}

/**
 * <p>Creates a new link between gateways.</p> <p>Establishes a connection that allows gateways to communicate and exchange bid requests and responses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, CreateLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, CreateLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // CreateLinkRequest
 *   gatewayId: "STRING_VALUE", // required
 *   peerGatewayId: "STRING_VALUE", // required
 *   attributes: { // LinkAttributes
 *     responderErrorMasking: [ // ResponderErrorMasking
 *       { // ResponderErrorMaskingForHttpCode
 *         httpCode: "STRING_VALUE", // required
 *         action: "NO_BID" || "PASSTHROUGH", // required
 *         loggingTypes: [ // ResponderErrorMaskingLoggingTypes // required
 *           "NONE" || "METRIC" || "RESPONSE",
 *         ],
 *         responseLoggingPercentage: Number("float"),
 *       },
 *     ],
 *     customerProvidedId: "STRING_VALUE",
 *   },
 *   httpResponderAllowed: true || false,
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   logSettings: { // LinkLogSettings
 *     applicationLogs: { // LinkApplicationLogConfiguration
 *       sampling: { // LinkApplicationLogSampling
 *         errorLog: Number("double"), // required
 *         filterLog: Number("double"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateLinkResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   peerGatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   direction: "RESPONSE" || "REQUEST",
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
 * //   linkId: "STRING_VALUE", // required
 * //   customerProvidedId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLinkCommandInput - {@link CreateLinkCommandInput}
 * @returns {@link CreateLinkCommandOutput}
 * @see {@link CreateLinkCommandInput} for command's `input` shape.
 * @see {@link CreateLinkCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because you exceeded a service quota.</p>
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
 * @example Create a new link
 * ```javascript
 * // Creates a new link between RTB applications
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   logSettings: {
 *     applicationLogs: {
 *       sampling: {
 *         errorLog: 100.0,
 *         filterLog: 0.0
 *       }
 *     }
 *   },
 *   peerGatewayId: "rtb-gw-87654321"
 * };
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2024-01-15T10:30:00Z",
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   peerGatewayId: "rtb-gw-87654321",
 *   status: "PENDING_REQUEST",
 *   updatedAt: "2024-01-15T10:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLinkCommand extends $Command
  .classBuilder<
    CreateLinkCommandInput,
    CreateLinkCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RTBFabric", "CreateLink", {})
  .n("RTBFabricClient", "CreateLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateLinkCommand)
  .de(de_CreateLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLinkRequest;
      output: CreateLinkResponse;
    };
    sdk: {
      input: CreateLinkCommandInput;
      output: CreateLinkCommandOutput;
    };
  };
}
