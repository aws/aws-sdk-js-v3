// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProvisioningProfilesRequest, ListProvisioningProfilesResponse } from "../models/models_0";
import { ListProvisioningProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the provisioning profiles within the Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListProvisioningProfilesCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListProvisioningProfilesCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
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
 * //       Status: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
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
export class ListProvisioningProfilesCommand extends command<ListProvisioningProfilesCommandInput, ListProvisioningProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListProvisioningProfiles",
  ListProvisioningProfiles$
) {
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
