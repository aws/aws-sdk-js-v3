// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLicenseServerEndpointsRequest, ListLicenseServerEndpointsResponse } from "../models/models_0";
import { ListLicenseServerEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLicenseServerEndpointsCommand}.
 */
export interface ListLicenseServerEndpointsCommandInput extends ListLicenseServerEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseServerEndpointsCommand}.
 */
export interface ListLicenseServerEndpointsCommandOutput extends ListLicenseServerEndpointsResponse, __MetadataBearer {}

/**
 * List the Remote Desktop Services (RDS) License Server endpoints
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, ListLicenseServerEndpointsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, ListLicenseServerEndpointsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // ListLicenseServerEndpointsRequest
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Attribute: "STRING_VALUE",
 *       Operation: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLicenseServerEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseServerEndpointsResponse
 * //   LicenseServerEndpoints: [ // LicenseServerEndpointList
 * //     { // LicenseServerEndpoint
 * //       IdentityProviderArn: "STRING_VALUE",
 * //       ServerType: "STRING_VALUE",
 * //       ServerEndpoint: { // ServerEndpoint
 * //         Endpoint: "STRING_VALUE",
 * //       },
 * //       StatusMessage: "STRING_VALUE",
 * //       LicenseServerEndpointId: "STRING_VALUE",
 * //       LicenseServerEndpointArn: "STRING_VALUE",
 * //       LicenseServerEndpointProvisioningStatus: "STRING_VALUE",
 * //       LicenseServers: [ // LicenseServerList
 * //         { // LicenseServer
 * //           ProvisioningStatus: "STRING_VALUE",
 * //           HealthStatus: "STRING_VALUE",
 * //           Ipv4Address: "STRING_VALUE",
 * //           Ipv6Address: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseServerEndpointsCommandInput - {@link ListLicenseServerEndpointsCommandInput}
 * @returns {@link ListLicenseServerEndpointsCommandOutput}
 * @see {@link ListLicenseServerEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseServerEndpointsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (server fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because a service quota is exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 *
 * Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.
 *
 * @public
 */
export class ListLicenseServerEndpointsCommand extends command<ListLicenseServerEndpointsCommandInput, ListLicenseServerEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListLicenseServerEndpoints",
  ListLicenseServerEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseServerEndpointsRequest;
      output: ListLicenseServerEndpointsResponse;
    };
    sdk: {
      input: ListLicenseServerEndpointsCommandInput;
      output: ListLicenseServerEndpointsCommandOutput;
    };
  };
}
