// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachVolumeInput, AttachVolumeOutput } from "../models/models_0";
import { AttachVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachVolumeCommand}.
 */
export interface AttachVolumeCommandInput extends AttachVolumeInput {}
/**
 * @public
 *
 * The output of {@link AttachVolumeCommand}.
 */
export interface AttachVolumeCommandOutput extends AttachVolumeOutput, __MetadataBearer {}

/**
 * <p>Connects a volume to an iSCSI connection and then attaches the volume to the specified
 *          gateway. Detaching and attaching a volume enables you to recover your data from one gateway
 *          to a different gateway without creating a snapshot. It also makes it easier to move your
 *          volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AttachVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AttachVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // AttachVolumeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TargetName: "STRING_VALUE",
 *   VolumeARN: "STRING_VALUE", // required
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   DiskId: "STRING_VALUE",
 * };
 * const command = new AttachVolumeCommand(input);
 * const response = await client.send(command);
 * // { // AttachVolumeOutput
 * //   VolumeARN: "STRING_VALUE",
 * //   TargetARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AttachVolumeCommandInput - {@link AttachVolumeCommandInput}
 * @returns {@link AttachVolumeCommandOutput}
 * @see {@link AttachVolumeCommandInput} for command's `input` shape.
 * @see {@link AttachVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class AttachVolumeCommand extends command<AttachVolumeCommandInput, AttachVolumeCommandOutput>(
  _ep0,
  _mw0,
  "AttachVolume",
  AttachVolume$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachVolumeInput;
      output: AttachVolumeOutput;
    };
    sdk: {
      input: AttachVolumeCommandInput;
      output: AttachVolumeCommandOutput;
    };
  };
}
