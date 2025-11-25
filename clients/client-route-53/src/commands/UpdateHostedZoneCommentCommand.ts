// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHostedZoneComment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHostedZoneCommentCommand}.
 */
export interface UpdateHostedZoneCommentCommandInput extends UpdateHostedZoneCommentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHostedZoneCommentCommand}.
 */
export interface UpdateHostedZoneCommentCommandOutput extends UpdateHostedZoneCommentResponse, __MetadataBearer {}

/**
 * <p>Updates the comment for a specified hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHostedZoneCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHostedZoneCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // UpdateHostedZoneCommentRequest
 *   Id: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 * };
 * const command = new UpdateHostedZoneCommentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHostedZoneCommentResponse
 * //   HostedZone: { // HostedZone
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     CallerReference: "STRING_VALUE", // required
 * //     Config: { // HostedZoneConfig
 * //       Comment: "STRING_VALUE",
 * //       PrivateZone: true || false,
 * //     },
 * //     ResourceRecordSetCount: Number("long"),
 * //     LinkedService: { // LinkedService
 * //       ServicePrincipal: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //     Features: { // HostedZoneFeatures
 * //       AcceleratedRecoveryStatus: "ENABLING" || "ENABLE_FAILED" || "ENABLING_HOSTED_ZONE_LOCKED" || "ENABLED" || "DISABLING" || "DISABLE_FAILED" || "DISABLED" || "DISABLING_HOSTED_ZONE_LOCKED",
 * //       FailureReasons: { // HostedZoneFailureReasons
 * //         AcceleratedRecovery: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateHostedZoneCommentCommandInput - {@link UpdateHostedZoneCommentCommandInput}
 * @returns {@link UpdateHostedZoneCommentCommandOutput}
 * @see {@link UpdateHostedZoneCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateHostedZoneCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class UpdateHostedZoneCommentCommand extends $Command
  .classBuilder<
    UpdateHostedZoneCommentCommandInput,
    UpdateHostedZoneCommentCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "UpdateHostedZoneComment", {})
  .n("Route53Client", "UpdateHostedZoneCommentCommand")
  .sc(UpdateHostedZoneComment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHostedZoneCommentRequest;
      output: UpdateHostedZoneCommentResponse;
    };
    sdk: {
      input: UpdateHostedZoneCommentCommandInput;
      output: UpdateHostedZoneCommentCommandOutput;
    };
  };
}
