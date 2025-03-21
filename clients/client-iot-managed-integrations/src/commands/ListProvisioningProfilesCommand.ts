// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListProvisioningProfilesRequest, ListProvisioningProfilesResponse } from "../models/models_0";
import { de_ListProvisioningProfilesCommand, se_ListProvisioningProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisioningProfilesCommand}.
 */
export interface ListProvisioningProfilesCommandInput extends ListProvisioningProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListProvisioningProfilesCommand}.
 */
export interface ListProvisioningProfilesCommandOutput extends ListProvisioningProfilesResponse, __MetadataBearer {}

/**
 * <p>List the provisioning profiles within the Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListProvisioningProfilesCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListProvisioningProfilesCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListProvisioningProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProvisioningProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningProfilesResponse
 * //   Items: [ // ProvisioningProfileListDefinition
 * //     { // ProvisioningProfileSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       ProvisioningType: "FLEET_PROVISIONING" || "JITR",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningProfilesCommandInput - {@link ListProvisioningProfilesCommandInput}
 * @returns {@link ListProvisioningProfilesCommandOutput}
 * @see {@link ListProvisioningProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 * @public
 */
export class ListProvisioningProfilesCommand extends $Command
  .classBuilder<
    ListProvisioningProfilesCommandInput,
    ListProvisioningProfilesCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "ListProvisioningProfiles", {})
  .n("IoTManagedIntegrationsClient", "ListProvisioningProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisioningProfilesCommand)
  .de(de_ListProvisioningProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisioningProfilesRequest;
      output: ListProvisioningProfilesResponse;
    };
    sdk: {
      input: ListProvisioningProfilesCommandInput;
      output: ListProvisioningProfilesCommandOutput;
    };
  };
}
