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
import type { ListCredentialLockersRequest, ListCredentialLockersResponse } from "../models/models_0";
import { ListCredentialLockers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCredentialLockersCommand}.
 */
export interface ListCredentialLockersCommandInput extends ListCredentialLockersRequest {}
/**
 * @public
 *
 * The output of {@link ListCredentialLockersCommand}.
 */
export interface ListCredentialLockersCommandOutput extends ListCredentialLockersResponse, __MetadataBearer {}

/**
 * <p>List information on an existing credential locker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListCredentialLockersCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListCredentialLockersCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListCredentialLockersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCredentialLockersCommand(input);
 * const response = await client.send(command);
 * // { // ListCredentialLockersResponse
 * //   Items: [ // CredentialLockerListDefinition
 * //     { // CredentialLockerSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCredentialLockersCommandInput - {@link ListCredentialLockersCommandInput}
 * @returns {@link ListCredentialLockersCommandOutput}
 * @see {@link ListCredentialLockersCommandInput} for command's `input` shape.
 * @see {@link ListCredentialLockersCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class ListCredentialLockersCommand extends $Command
  .classBuilder<
    ListCredentialLockersCommandInput,
    ListCredentialLockersCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListCredentialLockers", {})
  .n("IoTManagedIntegrationsClient", "ListCredentialLockersCommand")
  .sc(ListCredentialLockers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCredentialLockersRequest;
      output: ListCredentialLockersResponse;
    };
    sdk: {
      input: ListCredentialLockersCommandInput;
      output: ListCredentialLockersCommandOutput;
    };
  };
}
