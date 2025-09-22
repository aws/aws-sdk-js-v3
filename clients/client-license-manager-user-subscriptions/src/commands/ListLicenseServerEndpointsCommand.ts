// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { ListLicenseServerEndpointsRequest, ListLicenseServerEndpointsResponse } from "../models/models_0";
import { ListLicenseServerEndpoints } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List the Remote Desktop Services (RDS) License Server endpoints </p>
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
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 *
 * @public
 */
export class ListLicenseServerEndpointsCommand extends $Command
  .classBuilder<
    ListLicenseServerEndpointsCommandInput,
    ListLicenseServerEndpointsCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LicenseManagerUserSubscriptions", "ListLicenseServerEndpoints", {})
  .n("LicenseManagerUserSubscriptionsClient", "ListLicenseServerEndpointsCommand")
  .sc(ListLicenseServerEndpoints)
  .build() {
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
