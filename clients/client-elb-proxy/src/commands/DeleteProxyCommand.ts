// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProxyRequest, DeleteProxyResponse } from "../models/models_0";
import { DeleteProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProxyCommand}.
 */
export interface DeleteProxyCommandInput extends DeleteProxyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxyCommand}.
 */
export interface DeleteProxyCommandOutput extends DeleteProxyResponse, __MetadataBearer {}

/**
 * Deletes a proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, DeleteProxyCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, DeleteProxyCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // DeleteProxyRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteProxyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProxyResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: { // ProxyStatus
 * //     code: "action-required" || "active" || "create-failed" || "create-in-progress" || "deleted" || "delete-in-progress" || "update-in-progress" || "cancel-update-in-progress", // required
 * //     reasons: [ // ProxyStatusReasonList // required
 * //       { // ProxyStatusReason
 * //         code: "STRING_VALUE", // required
 * //         target: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteProxyCommandInput - {@link DeleteProxyCommandInput}
 * @returns {@link DeleteProxyCommandOutput}
 * @see {@link DeleteProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteProxyCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  The requested operation is not permitted.
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
 * @example To delete a proxy
 * ```javascript
 * // The following example deletes the specified proxy. You must turn off deletion protection before you can delete a proxy.
 * const input = {
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new DeleteProxyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *   name: "my-proxy",
 *   status: {
 *     code: "delete-in-progress",
 *     reasons:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteProxyCommand extends command<DeleteProxyCommandInput, DeleteProxyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProxy",
  DeleteProxy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxyRequest;
      output: DeleteProxyResponse;
    };
    sdk: {
      input: DeleteProxyCommandInput;
      output: DeleteProxyCommandOutput;
    };
  };
}
