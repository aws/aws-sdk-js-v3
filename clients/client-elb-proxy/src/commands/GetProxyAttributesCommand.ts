// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProxyAttributesRequest, GetProxyAttributesResponse } from "../models/models_0";
import { GetProxyAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProxyAttributesCommand}.
 */
export interface GetProxyAttributesCommandInput extends GetProxyAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetProxyAttributesCommand}.
 */
export interface GetProxyAttributesCommandOutput extends GetProxyAttributesResponse, __MetadataBearer {}

/**
 * Retrieves the attributes for the specified proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, GetProxyAttributesCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, GetProxyAttributesCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // GetProxyAttributesRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetProxyAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetProxyAttributesResponse
 * //   attributes: [ // ProxyAttributeDetailsList
 * //     { // AttributeDetails
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetProxyAttributesCommandInput - {@link GetProxyAttributesCommandInput}
 * @returns {@link GetProxyAttributesCommandOutput}
 * @see {@link GetProxyAttributesCommandInput} for command's `input` shape.
 * @see {@link GetProxyAttributesCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The request references a resource that does not exist.
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
 * @example To get the attributes for a proxy
 * ```javascript
 * // The following example gets the attributes for the specified proxy. The output includes the default value of each attribute that you can update.
 * const input = {
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new GetProxyAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributes: [
 *     {
 *       defaultValue: "reactive",
 *       key: "ddos_protection.syn_cookie.mode",
 *       value: "reactive"
 *     },
 *     {
 *       defaultValue: "false",
 *       key: "deletion_protection.enabled",
 *       value: "true"
 *     },
 *     {
 *       defaultValue: "",
 *       key: "envoy.component_log_level",
 *       value: ""
 *     },
 *     {
 *       defaultValue: "warn",
 *       key: "envoy.log_level",
 *       value: "warn"
 *     },
 *     {
 *       defaultValue: "false",
 *       key: "waf.fail_open.enabled",
 *       value: "false"
 *     },
 *     {
 *       key: "waf.web_acl_arn",
 *       value: ""
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProxyAttributesCommand extends command<GetProxyAttributesCommandInput, GetProxyAttributesCommandOutput>(
  _ep0,
  _mw0,
  "GetProxyAttributes",
  GetProxyAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProxyAttributesRequest;
      output: GetProxyAttributesResponse;
    };
    sdk: {
      input: GetProxyAttributesCommandInput;
      output: GetProxyAttributesCommandOutput;
    };
  };
}
