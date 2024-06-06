// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DisassociateTrackerConsumerRequest, DisassociateTrackerConsumerResponse } from "../models/models_0";
import {
  de_DisassociateTrackerConsumerCommand,
  se_DisassociateTrackerConsumerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTrackerConsumerCommand}.
 */
export interface DisassociateTrackerConsumerCommandInput extends DisassociateTrackerConsumerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTrackerConsumerCommand}.
 */
export interface DisassociateTrackerConsumerCommandOutput
  extends DisassociateTrackerConsumerResponse,
    __MetadataBearer {}

/**
 * <p>Removes the association between a tracker resource and a geofence collection.</p>
 *          <note>
 *             <p>Once you unlink a tracker resource from a geofence collection, the tracker
 *                 positions will no longer be automatically evaluated against geofences.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DisassociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DisassociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // DisassociateTrackerConsumerRequest
 *   TrackerName: "STRING_VALUE", // required
 *   ConsumerArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateTrackerConsumerCommandInput - {@link DisassociateTrackerConsumerCommandInput}
 * @returns {@link DisassociateTrackerConsumerCommandOutput}
 * @see {@link DisassociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 * @public
 */
export class DisassociateTrackerConsumerCommand extends $Command
  .classBuilder<
    DisassociateTrackerConsumerCommandInput,
    DisassociateTrackerConsumerCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "DisassociateTrackerConsumer", {})
  .n("LocationClient", "DisassociateTrackerConsumerCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateTrackerConsumerCommand)
  .de(de_DisassociateTrackerConsumerCommand)
  .build() {}
