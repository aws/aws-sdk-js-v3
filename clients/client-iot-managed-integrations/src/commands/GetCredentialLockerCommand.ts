// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { GetCredentialLockerRequest, GetCredentialLockerResponse } from "../models/models_0";
import { GetCredentialLocker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get information on an existing credential locker</p>
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class GetCredentialLockerCommand extends $Command
  .classBuilder<
    GetCredentialLockerCommandInput,
    GetCredentialLockerCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetCredentialLocker", {})
  .n("IoTManagedIntegrationsClient", "GetCredentialLockerCommand")
  .sc(GetCredentialLocker$)
  .build() {
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
