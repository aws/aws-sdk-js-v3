// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLinkModuleFlowRequest, UpdateLinkModuleFlowResponse } from "../models/models_0";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { UpdateLinkModuleFlow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLinkModuleFlowCommand}.
 */
export interface UpdateLinkModuleFlowCommandInput extends UpdateLinkModuleFlowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLinkModuleFlowCommand}.
 */
export interface UpdateLinkModuleFlowCommandOutput extends UpdateLinkModuleFlowResponse, __MetadataBearer {}

/**
 * <p>Updates a link module flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, UpdateLinkModuleFlowCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, UpdateLinkModuleFlowCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // UpdateLinkModuleFlowRequest
 *   clientToken: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   modules: [ // ModuleConfigurationList // required
 *     { // ModuleConfiguration
 *       version: "STRING_VALUE",
 *       name: "STRING_VALUE", // required
 *       dependsOn: [ // FlowModuleNameList
 *         "STRING_VALUE",
 *       ],
 *       moduleParameters: { // ModuleParameters Union: only one key present
 *         noBid: { // NoBidModuleParameters
 *           reason: "STRING_VALUE",
 *           reasonCode: Number("int"),
 *           passThroughPercentage: Number("float"),
 *         },
 *         openRtbAttribute: { // OpenRtbAttributeModuleParameters
 *           filterType: "INCLUDE" || "EXCLUDE", // required
 *           filterConfiguration: [ // FilterConfiguration // required
 *             { // Filter
 *               criteria: [ // FilterCriteria // required
 *                 { // FilterCriterion
 *                   path: "STRING_VALUE", // required
 *                   values: [ // ValueList // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               ],
 *             },
 *           ],
 *           action: { // Action Union: only one key present
 *             noBid: { // NoBidAction
 *               noBidReasonCode: Number("int"),
 *             },
 *             headerTag: { // HeaderTagAction
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE", // required
 *             },
 *           },
 *           holdbackPercentage: Number("float"), // required
 *         },
 *         rateLimiter: { // RateLimiterModuleParameters
 *           tps: Number("float"),
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateLinkModuleFlowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLinkModuleFlowResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param UpdateLinkModuleFlowCommandInput - {@link UpdateLinkModuleFlowCommandInput}
 * @returns {@link UpdateLinkModuleFlowCommandOutput}
 * @see {@link UpdateLinkModuleFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkModuleFlowCommandOutput} for command's `response` shape.
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
 * @example Update link module flow
 * ```javascript
 * // Update link module flow for link
 * const input = {
 *   clientToken: "randomClientToken",
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   modules: [
 *     {
 *       dependsOn:       [],
 *       moduleParameters: {
 *         noBid: {
 *           passThroughPercentage: 50.0,
 *           reason: "test",
 *           reasonCode: 1
 *         }
 *       },
 *       name: "noBidModule",
 *       version: "1dot0dot0"
 *     }
 *   ]
 * };
 * const command = new UpdateLinkModuleFlowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLinkModuleFlowCommand extends $Command
  .classBuilder<
    UpdateLinkModuleFlowCommandInput,
    UpdateLinkModuleFlowCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "UpdateLinkModuleFlow", {})
  .n("RTBFabricClient", "UpdateLinkModuleFlowCommand")
  .sc(UpdateLinkModuleFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLinkModuleFlowRequest;
      output: UpdateLinkModuleFlowResponse;
    };
    sdk: {
      input: UpdateLinkModuleFlowCommandInput;
      output: UpdateLinkModuleFlowCommandOutput;
    };
  };
}
