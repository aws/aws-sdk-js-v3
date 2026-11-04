// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivateKeySigningKeyRequest, ActivateKeySigningKeyResponse } from "../models/models_0";
import { ActivateKeySigningKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ActivateKeySigningKeyCommand}.
 */
export interface ActivateKeySigningKeyCommandInput extends ActivateKeySigningKeyRequest {}
/**
 * @public
 *
 * The output of {@link ActivateKeySigningKeyCommand}.
 */
export interface ActivateKeySigningKeyCommandOutput extends ActivateKeySigningKeyResponse, __MetadataBearer {}

/**
 * Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the KSK status to `ACTIVE`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ActivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ActivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ActivateKeySigningKeyRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new ActivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * // { // ActivateKeySigningKeyResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ActivateKeySigningKeyCommandInput - {@link ActivateKeySigningKeyCommandInput}
 * @returns {@link ActivateKeySigningKeyCommandOutput}
 * @see {@link ActivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link ActivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *
 * Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link InvalidKeySigningKeyStatus} (client fault)
 *
 * The key-signing key (KSK) status isn't valid or another KSK has the status `INTERNAL_FAILURE`.
 *
 * @throws {@link InvalidKMSArn} (client fault)
 *
 * The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC signing.
 *
 * @throws {@link InvalidSigningStatus} (client fault)
 *
 * Your hosted zone status isn't valid for this operation. In the hosted zone, change the status to enable `DNSSEC` or disable `DNSSEC`.
 *
 * @throws {@link NoSuchKeySigningKey} (client fault)
 *
 * The specified key-signing key (KSK) doesn't exist.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class ActivateKeySigningKeyCommand extends command<ActivateKeySigningKeyCommandInput, ActivateKeySigningKeyCommandOutput>(
  _ep0,
  _mw0,
  "ActivateKeySigningKey",
  ActivateKeySigningKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateKeySigningKeyRequest;
      output: ActivateKeySigningKeyResponse;
    };
    sdk: {
      input: ActivateKeySigningKeyCommandInput;
      output: ActivateKeySigningKeyCommandOutput;
    };
  };
}
