// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { CreateCredentialLockerRequest, CreateCredentialLockerResponse } from "../models/models_0";
import { CreateCredentialLocker } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Create a credential locker.</p> <note> <p>This operation will not trigger the creation of all the manufacturing resources.</p> </note>
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class CreateCredentialLockerCommand extends $Command
  .classBuilder<
    CreateCredentialLockerCommandInput,
    CreateCredentialLockerCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "CreateCredentialLocker", {})
  .n("IoTManagedIntegrationsClient", "CreateCredentialLockerCommand")
  .sc(CreateCredentialLocker)
  .build() {
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
