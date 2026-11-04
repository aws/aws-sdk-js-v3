// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateTrackerConsumerRequest, DisassociateTrackerConsumerResponse } from "../models/models_0";
import { DisassociateTrackerConsumer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisassociateTrackerConsumerCommandOutput extends DisassociateTrackerConsumerResponse, __MetadataBearer {}

/**
 * Removes the association between a tracker resource and a geofence collection.
 *
 * > **Note:** Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DisassociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DisassociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
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
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class DisassociateTrackerConsumerCommand extends command<DisassociateTrackerConsumerCommandInput, DisassociateTrackerConsumerCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateTrackerConsumer",
  DisassociateTrackerConsumer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTrackerConsumerRequest;
      output: {};
    };
    sdk: {
      input: DisassociateTrackerConsumerCommandInput;
      output: DisassociateTrackerConsumerCommandOutput;
    };
  };
}
