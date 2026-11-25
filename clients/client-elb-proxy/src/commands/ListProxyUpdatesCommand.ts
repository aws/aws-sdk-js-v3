// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProxyUpdatesRequest, ListProxyUpdatesResponse } from "../models/models_0";
import { ListProxyUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProxyUpdatesCommand}.
 */
export interface ListProxyUpdatesCommandInput extends ListProxyUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListProxyUpdatesCommand}.
 */
export interface ListProxyUpdatesCommandOutput extends ListProxyUpdatesResponse, __MetadataBearer {}

/**
 * Lists the updates for the specified proxy, most recently submitted first.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, ListProxyUpdatesCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, ListProxyUpdatesCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // ListProxyUpdatesRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProxyUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListProxyUpdatesResponse
 * //   items: [ // ProxyUpdateSummaryList // required
 * //     { // ProxyUpdateSummary
 * //       updateId: "STRING_VALUE", // required
 * //       type: "update-proxy-configuration", // required
 * //       validationStatus: "not-validated" || "valid" || "invalid", // required
 * //       propagationStatus: "in-progress" || "complete" || "skipped" || "failed" || "cancelled", // required
 * //       submittedAt: new Date("TIMESTAMP"), // required
 * //       validatedAt: new Date("TIMESTAMP"),
 * //       completedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProxyUpdatesCommandInput - {@link ListProxyUpdatesCommandInput}
 * @returns {@link ListProxyUpdatesCommandOutput}
 * @see {@link ListProxyUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListProxyUpdatesCommandOutput} for command's `response` shape.
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
 * @example To list the updates for a proxy
 * ```javascript
 * // The following example lists the updates for the specified proxy.
 * const input = {
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new ListProxyUpdatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       completedAt: 1795197720,
 *       propagationStatus: "complete",
 *       submittedAt: 1795197600,
 *       type: "update-proxy-configuration",
 *       updateId: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       validatedAt: 1795197660,
 *       validationStatus: "valid"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProxyUpdatesCommand extends command<ListProxyUpdatesCommandInput, ListProxyUpdatesCommandOutput>(
  _ep0,
  _mw0,
  "ListProxyUpdates",
  ListProxyUpdates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProxyUpdatesRequest;
      output: ListProxyUpdatesResponse;
    };
    sdk: {
      input: ListProxyUpdatesCommandInput;
      output: ListProxyUpdatesCommandOutput;
    };
  };
}
