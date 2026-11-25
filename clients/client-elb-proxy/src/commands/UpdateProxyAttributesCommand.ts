// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProxyAttributesRequest, UpdateProxyAttributesResponse } from "../models/models_0";
import { UpdateProxyAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProxyAttributesCommand}.
 */
export interface UpdateProxyAttributesCommandInput extends UpdateProxyAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxyAttributesCommand}.
 */
export interface UpdateProxyAttributesCommandOutput extends UpdateProxyAttributesResponse, __MetadataBearer {}

/**
 * Updates the attributes for the specified proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, UpdateProxyAttributesCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, UpdateProxyAttributesCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // UpdateProxyAttributesRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   attributes: [ // ProxyAttributeList // required
 *     { // Attribute
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateProxyAttributesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxyAttributesResponse
 * //   attributes: [ // ProxyAttributeDetailsList // required
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
 * @param UpdateProxyAttributesCommandInput - {@link UpdateProxyAttributesCommandInput}
 * @returns {@link UpdateProxyAttributesCommandOutput}
 * @see {@link UpdateProxyAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateProxyAttributesCommandOutput} for command's `response` shape.
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
 * @example To enable deletion protection
 * ```javascript
 * // The following example enables deletion protection for the specified proxy.
 * const input = {
 *   attributes: [
 *     {
 *       key: "deletion_protection.enabled",
 *       value: "true"
 *     }
 *   ],
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new UpdateProxyAttributesCommand(input);
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
 * @example To change the Envoy log level
 * ```javascript
 * // The following example changes the Envoy log level for the specified proxy to debug.
 * const input = {
 *   attributes: [
 *     {
 *       key: "envoy.log_level",
 *       value: "debug"
 *     }
 *   ],
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new UpdateProxyAttributesCommand(input);
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
 *       value: "false"
 *     },
 *     {
 *       defaultValue: "",
 *       key: "envoy.component_log_level",
 *       value: ""
 *     },
 *     {
 *       defaultValue: "warn",
 *       key: "envoy.log_level",
 *       value: "debug"
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
 * @example To change the log level for specific Envoy components
 * ```javascript
 * // The following example changes the log level for the http and router Envoy components on the specified proxy to debug. Components that aren't specified use the log level set by envoy.log_level.
 * const input = {
 *   attributes: [
 *     {
 *       key: "envoy.component_log_level",
 *       value: "http:debug,router:debug"
 *     }
 *   ],
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new UpdateProxyAttributesCommand(input);
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
 *       value: "false"
 *     },
 *     {
 *       defaultValue: "",
 *       key: "envoy.component_log_level",
 *       value: "http:debug,router:debug"
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
 * @example To enable AWS WAF fail open
 * ```javascript
 * // The following example enables AWS WAF fail open for the specified proxy.
 * const input = {
 *   attributes: [
 *     {
 *       key: "waf.fail_open.enabled",
 *       value: "true"
 *     }
 *   ],
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new UpdateProxyAttributesCommand(input);
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
 *       value: "false"
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
 *       value: "true"
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
export class UpdateProxyAttributesCommand extends command<UpdateProxyAttributesCommandInput, UpdateProxyAttributesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProxyAttributes",
  UpdateProxyAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProxyAttributesRequest;
      output: UpdateProxyAttributesResponse;
    };
    sdk: {
      input: UpdateProxyAttributesCommandInput;
      output: UpdateProxyAttributesCommandOutput;
    };
  };
}
