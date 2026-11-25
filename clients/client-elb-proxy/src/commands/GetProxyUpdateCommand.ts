// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProxyUpdateRequest, GetProxyUpdateResponse } from "../models/models_0";
import { GetProxyUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProxyUpdateCommand}.
 */
export interface GetProxyUpdateCommandInput extends GetProxyUpdateRequest {}
/**
 * @public
 *
 * The output of {@link GetProxyUpdateCommand}.
 */
export interface GetProxyUpdateCommandOutput extends GetProxyUpdateResponse, __MetadataBearer {}

/**
 * Retrieves information about the specified proxy update.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, GetProxyUpdateCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, GetProxyUpdateCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // GetProxyUpdateRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   updateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetProxyUpdateCommand(input);
 * const response = await client.send(command);
 * // { // GetProxyUpdateResponse
 * //   proxyArn: "STRING_VALUE", // required
 * //   updateId: "STRING_VALUE", // required
 * //   state: { // ProxyUpdateState
 * //     validationStatus: "not-validated" || "valid" || "invalid", // required
 * //     propagationStatus: "in-progress" || "complete" || "skipped" || "failed" || "cancelled", // required
 * //     reasons: [ // ProxyUpdateStateReasonList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   details: { // ProxyUpdateDetails Union: only one key present
 * //     configuration: { // ProxyConfigurationUpdateDetails
 * //       newConfigurationMetadata: { // ConfigurationMetadata
 * //         configFileHash: "STRING_VALUE",
 * //         configArchiveHash: "STRING_VALUE",
 * //         configFileLastUpdatedAt: new Date("TIMESTAMP"),
 * //         configArchiveLastUpdatedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   },
 * //   submittedAt: new Date("TIMESTAMP"), // required
 * //   validatedAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetProxyUpdateCommandInput - {@link GetProxyUpdateCommandInput}
 * @returns {@link GetProxyUpdateCommandOutput}
 * @see {@link GetProxyUpdateCommandInput} for command's `input` shape.
 * @see {@link GetProxyUpdateCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To get information about a proxy update
 * ```javascript
 * // The following example gets information about the specified update for the specified proxy. The configuration is valid and was applied to all proxy nodes.
 * const input = {
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *   updateIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new GetProxyUpdateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   completedAt: 1795197720,
 *   details: {
 *     configuration: {
 *       newConfigurationMetadata: {
 *         configFileHash: "29a5eb3bdf714ff29cc52e1a3723894b9f746416e1e541fddfad0a3963aed98c",
 *         configFileLastUpdatedAt: 1795197600
 *       }
 *     }
 *   },
 *   proxyArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *   state: {
 *     propagationStatus: "complete",
 *     validationStatus: "valid"
 *   },
 *   submittedAt: 1795197600,
 *   updateId: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   validatedAt: 1795197660
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProxyUpdateCommand extends command<GetProxyUpdateCommandInput, GetProxyUpdateCommandOutput>(
  _ep0,
  _mw0,
  "GetProxyUpdate",
  GetProxyUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProxyUpdateRequest;
      output: GetProxyUpdateResponse;
    };
    sdk: {
      input: GetProxyUpdateCommandInput;
      output: GetProxyUpdateCommandOutput;
    };
  };
}
