// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPartnerAccountRequest, GetPartnerAccountResponse } from "../models/models_0";
import { GetPartnerAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPartnerAccountCommand}.
 */
export interface GetPartnerAccountCommandInput extends GetPartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetPartnerAccountCommand}.
 */
export interface GetPartnerAccountCommandOutput extends GetPartnerAccountResponse, __MetadataBearer {}

/**
 * Gets information about a partner account. If `PartnerAccountId` and `PartnerType` are `null`, returns all partner accounts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPartnerAccountRequest
 *   PartnerAccountId: "STRING_VALUE", // required
 *   PartnerType: "Sidewalk", // required
 * };
 * const command = new GetPartnerAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetPartnerAccountResponse
 * //   Sidewalk: { // SidewalkAccountInfoWithFingerprint
 * //     AmazonId: "STRING_VALUE",
 * //     Fingerprint: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   AccountLinked: true || false,
 * // };
 *
 * ```
 *
 * @param GetPartnerAccountCommandInput - {@link GetPartnerAccountCommandInput}
 * @returns {@link GetPartnerAccountCommandOutput}
 * @see {@link GetPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link GetPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class GetPartnerAccountCommand extends command<GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput>(
  _ep0,
  _mw0,
  "GetPartnerAccount",
  GetPartnerAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPartnerAccountRequest;
      output: GetPartnerAccountResponse;
    };
    sdk: {
      input: GetPartnerAccountCommandInput;
      output: GetPartnerAccountCommandOutput;
    };
  };
}
