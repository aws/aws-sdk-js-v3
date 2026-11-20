// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedApiRequest, GetManagedApiResponse } from "../models/models_0";
import { GetManagedApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedApiCommand}.
 */
export interface GetManagedApiCommandInput extends GetManagedApiRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedApiCommand}.
 */
export interface GetManagedApiCommandOutput extends GetManagedApiResponse, __MetadataBearer {}

/**
 * Returns a Managed API, including its security posture findings.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetManagedApiCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetManagedApiCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetManagedApiRequest
 *   managedApiId: "STRING_VALUE", // required
 * };
 * const command = new GetManagedApiCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedApiResponse
 * //   managedApiId: "STRING_VALUE", // required
 * //   managedApiArn: "STRING_VALUE", // required
 * //   apiSignature: { // ApiSignature
 * //     resourceArn: "STRING_VALUE", // required
 * //     method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 * //     hostname: "STRING_VALUE", // required
 * //     port: Number("int"), // required
 * //     path: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   findings: [ // ManagedApiFindingList
 * //     { // ManagedApiFinding
 * //       postureId: "STRING_VALUE",
 * //       postureStatus: "TRUE" || "FALSE" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //       reason: "AUTHENTICATION_NOT_CONFIGURED" || "REQUEST_VALIDATION_NOT_ENABLED" || "API_KEY_NOT_CONFIGURED" || "THROTTLING_NOT_ENABLED" || "THROTTLING_RATE_LIMIT_NOT_SET" || "THROTTLING_BURST_LIMIT_NOT_SET" || "RESPONSE_CACHING_NOT_ENABLED" || "STAGE_WAF_NOT_ASSOCIATED" || "STAGE_ACCESS_LOGGING_NOT_ENABLED" || "PRIVATE_API_RESOURCE_POLICY_MISSING" || "REST_API_TLS_BELOW_1_2" || "LOAD_BALANCER_WAF_NOT_ASSOCIATED" || "LISTENER_TLS_BELOW_1_2" || "DISTRIBUTION_TLS_BELOW_1_2" || "DISTRIBUTION_WAF_NOT_ASSOCIATED" || "DISTRIBUTION_SERVES_PLAINTEXT_HTTP" || "DISTRIBUTION_ACCESS_LOGGING_NOT_ENABLED" || "GEO_RESTRICTION_NOT_CONFIGURED" || "UNKNOWN",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedApiCommandInput - {@link GetManagedApiCommandInput}
 * @returns {@link GetManagedApiCommandOutput}
 * @see {@link GetManagedApiCommandInput} for command's `input` shape.
 * @see {@link GetManagedApiCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
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
export class GetManagedApiCommand extends command<GetManagedApiCommandInput, GetManagedApiCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedApi",
  GetManagedApi$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedApiRequest;
      output: GetManagedApiResponse;
    };
    sdk: {
      input: GetManagedApiCommandInput;
      output: GetManagedApiCommandOutput;
    };
  };
}
