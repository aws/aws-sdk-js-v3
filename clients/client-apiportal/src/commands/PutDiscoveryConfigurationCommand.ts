// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDiscoveryConfigurationRequest, PutDiscoveryConfigurationResponse } from "../models/models_0";
import { PutDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDiscoveryConfigurationCommand}.
 */
export interface PutDiscoveryConfigurationCommandInput extends PutDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutDiscoveryConfigurationCommand}.
 */
export interface PutDiscoveryConfigurationCommandOutput extends PutDiscoveryConfigurationResponse, __MetadataBearer {}

/**
 * Creates or updates the discovery configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, PutDiscoveryConfigurationCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, PutDiscoveryConfigurationCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // PutDiscoveryConfigurationRequest
 *   discoverySources: [ // NonEmptyDiscoverySourceList
 *     "API_GATEWAY" || "ELB" || "CLOUDFRONT",
 *   ],
 *   excludedResources: [ // ResourceArnList
 *     "STRING_VALUE",
 *   ],
 *   features: [ // DiscoveryFeatureList
 *     "AI_DISCOVERY",
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutDiscoveryConfigurationResponse
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
 * @param PutDiscoveryConfigurationCommandInput - {@link PutDiscoveryConfigurationCommandInput}
 * @returns {@link PutDiscoveryConfigurationCommandOutput}
 * @see {@link PutDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class PutDiscoveryConfigurationCommand extends command<PutDiscoveryConfigurationCommandInput, PutDiscoveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutDiscoveryConfiguration",
  PutDiscoveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDiscoveryConfigurationRequest;
      output: PutDiscoveryConfigurationResponse;
    };
    sdk: {
      input: PutDiscoveryConfigurationCommandInput;
      output: PutDiscoveryConfigurationCommandOutput;
    };
  };
}
