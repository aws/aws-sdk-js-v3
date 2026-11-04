// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointOutput } from "../models/models_0";
import { RetrieveTapeRecoveryPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetrieveTapeRecoveryPointCommand}.
 */
export interface RetrieveTapeRecoveryPointCommandInput extends RetrieveTapeRecoveryPointInput {}
/**
 * @public
 *
 * The output of {@link RetrieveTapeRecoveryPointCommand}.
 */
export interface RetrieveTapeRecoveryPointCommandOutput extends RetrieveTapeRecoveryPointOutput, __MetadataBearer {}

/**
 * Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.
 *
 * A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
 *
 * > **Note:** The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // RetrieveTapeRecoveryPointInput
 *   TapeARN: "STRING_VALUE", // required
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new RetrieveTapeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveTapeRecoveryPointOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetrieveTapeRecoveryPointCommandInput - {@link RetrieveTapeRecoveryPointCommandInput}
 * @returns {@link RetrieveTapeRecoveryPointCommandOutput}
 * @see {@link RetrieveTapeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error has occurred during the request. For more information, see the error and message fields.
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *
 * An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
 *
 * @throws {@link StorageGatewayServiceException}
 *
 * Base exception class for all service exceptions from StorageGateway service.
 *
 * @example To retrieve the recovery point of a virtual tape
 * ```javascript
 * // Retrieves the recovery point for the specified virtual tape.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
 * };
 * const command = new RetrieveTapeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RetrieveTapeRecoveryPointCommand extends command<RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput>(
  _ep0,
  _mw0,
  "RetrieveTapeRecoveryPoint",
  RetrieveTapeRecoveryPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetrieveTapeRecoveryPointInput;
      output: RetrieveTapeRecoveryPointOutput;
    };
    sdk: {
      input: RetrieveTapeRecoveryPointCommandInput;
      output: RetrieveTapeRecoveryPointCommandOutput;
    };
  };
}
