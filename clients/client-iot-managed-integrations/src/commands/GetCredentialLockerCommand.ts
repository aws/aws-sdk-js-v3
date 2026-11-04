// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCredentialLockerRequest, GetCredentialLockerResponse } from "../models/models_0";
import { GetCredentialLocker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCredentialLockerCommand}.
 */
export interface GetCredentialLockerCommandInput extends GetCredentialLockerRequest {}
/**
 * @public
 *
 * The output of {@link GetCredentialLockerCommand}.
 */
export interface GetCredentialLockerCommandOutput extends GetCredentialLockerResponse, __MetadataBearer {}

/**
 * Get information on an existing credential locker
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetCredentialLockerCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetCredentialLockerCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetCredentialLockerRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCredentialLockerCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialLockerResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCredentialLockerCommandInput - {@link GetCredentialLockerCommandInput}
 * @returns {@link GetCredentialLockerCommandOutput}
 * @see {@link GetCredentialLockerCommandInput} for command's `input` shape.
 * @see {@link GetCredentialLockerCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class GetCredentialLockerCommand extends command<GetCredentialLockerCommandInput, GetCredentialLockerCommandOutput>(
  _ep0,
  _mw0,
  "GetCredentialLocker",
  GetCredentialLocker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCredentialLockerRequest;
      output: GetCredentialLockerResponse;
    };
    sdk: {
      input: GetCredentialLockerCommandInput;
      output: GetCredentialLockerCommandOutput;
    };
  };
}
