// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCredentialLockerRequest, CreateCredentialLockerResponse } from "../models/models_0";
import { CreateCredentialLocker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCredentialLockerCommand}.
 */
export interface CreateCredentialLockerCommandInput extends CreateCredentialLockerRequest {}
/**
 * @public
 *
 * The output of {@link CreateCredentialLockerCommand}.
 */
export interface CreateCredentialLockerCommandOutput extends CreateCredentialLockerResponse, __MetadataBearer {}

/**
 * Create a credential locker.
 *
 * > **Note:** This operation will not trigger the creation of all the manufacturing resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateCredentialLockerCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateCredentialLockerCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateCredentialLockerRequest
 *   Name: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCredentialLockerCommand(input);
 * const response = await client.send(command);
 * // { // CreateCredentialLockerResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateCredentialLockerCommandInput - {@link CreateCredentialLockerCommandInput}
 * @returns {@link CreateCredentialLockerCommandOutput}
 * @see {@link CreateCredentialLockerCommandInput} for command's `input` shape.
 * @see {@link CreateCredentialLockerCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded for this request.
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
export class CreateCredentialLockerCommand extends command<CreateCredentialLockerCommandInput, CreateCredentialLockerCommandOutput>(
  _ep0,
  _mw0,
  "CreateCredentialLocker",
  CreateCredentialLocker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCredentialLockerRequest;
      output: CreateCredentialLockerResponse;
    };
    sdk: {
      input: CreateCredentialLockerCommandInput;
      output: CreateCredentialLockerCommandOutput;
    };
  };
}
