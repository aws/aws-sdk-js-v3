// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProxyVersionsRequest, ListProxyVersionsResponse } from "../models/models_0";
import { ListProxyVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProxyVersionsCommand}.
 */
export interface ListProxyVersionsCommandInput extends ListProxyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProxyVersionsCommand}.
 */
export interface ListProxyVersionsCommandOutput extends ListProxyVersionsResponse, __MetadataBearer {}

/**
 * Lists the available proxy versions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, ListProxyVersionsCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, ListProxyVersionsCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // ListProxyVersionsRequest
 *   type: "envoy", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProxyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProxyVersionsResponse
 * //   items: [ // ProxyVersionSummaryList // required
 * //     { // ProxyVersionSummary
 * //       type: "envoy", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProxyVersionsCommandInput - {@link ListProxyVersionsCommandInput}
 * @returns {@link ListProxyVersionsCommandOutput}
 * @see {@link ListProxyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListProxyVersionsCommandOutput} for command's `response` shape.
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
 * @example To list the proxy versions
 * ```javascript
 * // The following example lists the Envoy versions that you can specify when you create a proxy or update its version.
 * const input = {
 *   type: "envoy"
 * };
 * const command = new ListProxyVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       type: "envoy",
 *       version: "1.40"
 *     },
 *     {
 *       type: "envoy",
 *       version: "1.41"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProxyVersionsCommand extends command<ListProxyVersionsCommandInput, ListProxyVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListProxyVersions",
  ListProxyVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProxyVersionsRequest;
      output: ListProxyVersionsResponse;
    };
    sdk: {
      input: ListProxyVersionsCommandInput;
      output: ListProxyVersionsCommandOutput;
    };
  };
}
