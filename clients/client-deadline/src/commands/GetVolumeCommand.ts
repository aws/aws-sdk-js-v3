// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVolumeRequest, GetVolumeResponse } from "../models/models_0";
import { GetVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVolumeCommand}.
 */
export interface GetVolumeCommandInput extends GetVolumeRequest {}
/**
 * @public
 *
 * The output of {@link GetVolumeCommand}.
 */
export interface GetVolumeCommandOutput extends GetVolumeResponse, __MetadataBearer {}

/**
 * <p>Gets a persistent volume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetVolumeCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetVolumeCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetVolumeRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   volumeId: "STRING_VALUE", // required
 * };
 * const command = new GetVolumeCommand(input);
 * const response = await client.send(command);
 * // { // GetVolumeResponse
 * //   volumeId: "STRING_VALUE", // required
 * //   farmId: "STRING_VALUE", // required
 * //   fleetId: "STRING_VALUE", // required
 * //   state: "PENDING_CREATION" || "PENDING_ATTACHMENT" || "IN_USE" || "AVAILABLE" || "PENDING_DELETION", // required
 * //   sizeGiB: Number("int"), // required
 * //   availabilityZoneId: "STRING_VALUE", // required
 * //   attachedWorkerId: "STRING_VALUE",
 * //   volumeType: "gp3", // required
 * //   iops: Number("int"),
 * //   throughputMiB: Number("int"),
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastAssignedAt: new Date("TIMESTAMP"),
 * //   lastReleasedAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetVolumeCommandInput - {@link GetVolumeCommandInput}
 * @returns {@link GetVolumeCommandOutput}
 * @see {@link GetVolumeCommandInput} for command's `input` shape.
 * @see {@link GetVolumeCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Get a volume
 * ```javascript
 * //
 * const input = {
 *   farmId: "farm-1234567890abcdef1234567890abcdef",
 *   fleetId: "fleet-1234567890abcdef1234567890abcdef",
 *   volumeId: "volume-1234567890abcdef1234567890abcdef"
 * };
 * const command = new GetVolumeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetVolumeCommand extends command<GetVolumeCommandInput, GetVolumeCommandOutput>(
  _ep0,
  _mw0,
  "GetVolume",
  GetVolume$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVolumeRequest;
      output: GetVolumeResponse;
    };
    sdk: {
      input: GetVolumeCommandInput;
      output: GetVolumeCommandOutput;
    };
  };
}
