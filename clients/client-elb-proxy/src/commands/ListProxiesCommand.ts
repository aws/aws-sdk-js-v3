// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProxiesRequest, ListProxiesResponse } from "../models/models_0";
import { ListProxies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProxiesCommand}.
 */
export interface ListProxiesCommandInput extends ListProxiesRequest {}
/**
 * @public
 *
 * The output of {@link ListProxiesCommand}.
 */
export interface ListProxiesCommandOutput extends ListProxiesResponse, __MetadataBearer {}

/**
 * Lists the proxies owned by the caller account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, ListProxiesCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, ListProxiesCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // ListProxiesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProxiesCommand(input);
 * const response = await client.send(command);
 * // { // ListProxiesResponse
 * //   items: [ // ProxySummaryList // required
 * //     { // ProxySummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "envoy",
 * //       dnsName: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       status: { // ProxyStatus
 * //         code: "action-required" || "active" || "create-failed" || "create-in-progress" || "deleted" || "delete-in-progress" || "update-in-progress" || "cancel-update-in-progress", // required
 * //         reasons: [ // ProxyStatusReasonList // required
 * //           { // ProxyStatusReason
 * //             code: "STRING_VALUE", // required
 * //             target: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProxiesCommandInput - {@link ListProxiesCommandInput}
 * @returns {@link ListProxiesCommandOutput}
 * @see {@link ListProxiesCommandInput} for command's `input` shape.
 * @see {@link ListProxiesCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To list your proxies
 * ```javascript
 * // The following example lists the proxies owned by the calling account.
 * const input = { /* empty *\/ };
 * const command = new ListProxiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *       createdAt: 1795194000,
 *       dnsName: "my-proxy-1234567890.elb-proxy.us-east-1.on.aws",
 *       name: "my-proxy",
 *       status: {
 *         code: "active",
 *         reasons:         []
 *       },
 *       type: "envoy",
 *       vpcId: "vpc-1a2b3c4d"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProxiesCommand extends command<ListProxiesCommandInput, ListProxiesCommandOutput>(
  _ep0,
  _mw0,
  "ListProxies",
  ListProxies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProxiesRequest;
      output: ListProxiesResponse;
    };
    sdk: {
      input: ListProxiesCommandInput;
      output: ListProxiesCommandOutput;
    };
  };
}
