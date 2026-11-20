// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDiscoveryConfigurationRequest, GetDiscoveryConfigurationResponse } from "../models/models_0";
import { GetDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDiscoveryConfigurationCommand}.
 */
export interface GetDiscoveryConfigurationCommandInput extends GetDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDiscoveryConfigurationCommand}.
 */
export interface GetDiscoveryConfigurationCommandOutput extends GetDiscoveryConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the discovery configuration for the account and region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetDiscoveryConfigurationCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetDiscoveryConfigurationCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = {};
 * const command = new GetDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDiscoveryConfigurationResponse
 * //   discoveryConfiguration: { // DiscoveryConfigurationData
 * //     arn: "STRING_VALUE", // required
 * //     status: "DISABLED" || "ENABLED" || "UPDATING",
 * //     discoverySources: [ // DiscoverySourceList
 * //       "API_GATEWAY" || "ELB" || "CLOUDFRONT",
 * //     ],
 * //     excludedResources: [ // ResourceArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     features: [ // DiscoveryFeatureList
 * //       "AI_DISCOVERY",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDiscoveryConfigurationCommandInput - {@link GetDiscoveryConfigurationCommandInput}
 * @returns {@link GetDiscoveryConfigurationCommandOutput}
 * @see {@link GetDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class GetDiscoveryConfigurationCommand extends command<GetDiscoveryConfigurationCommandInput, GetDiscoveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetDiscoveryConfiguration",
  GetDiscoveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDiscoveryConfigurationResponse;
    };
    sdk: {
      input: GetDiscoveryConfigurationCommandInput;
      output: GetDiscoveryConfigurationCommandOutput;
    };
  };
}
