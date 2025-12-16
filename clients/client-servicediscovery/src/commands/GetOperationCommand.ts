// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOperationRequest, GetOperationResponse } from "../models/models_0";
import { GetOperation$ } from "../schemas/schemas_0";
import type {
  ServiceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOperationCommand}.
 */
export interface GetOperationCommandInput extends GetOperationRequest {}
/**
 * @public
 *
 * The output of {@link GetOperationCommand}.
 */
export interface GetOperationCommandOutput extends GetOperationResponse, __MetadataBearer {}

/**
 * <p>Gets information about any operation that returns an operation ID in the response, such as a
 *     <code>CreateHttpNamespace</code> request.</p>
 *          <note>
 *             <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetOperationCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetOperationCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetOperationRequest
 *   OperationId: "STRING_VALUE", // required
 *   OwnerAccount: "STRING_VALUE",
 * };
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetOperationResponse
 * //   Operation: { // Operation
 * //     Id: "STRING_VALUE",
 * //     OwnerAccount: "STRING_VALUE",
 * //     Type: "CREATE_NAMESPACE" || "DELETE_NAMESPACE" || "UPDATE_NAMESPACE" || "UPDATE_SERVICE" || "REGISTER_INSTANCE" || "DEREGISTER_INSTANCE",
 * //     Status: "SUBMITTED" || "PENDING" || "SUCCESS" || "FAIL",
 * //     ErrorMessage: "STRING_VALUE",
 * //     ErrorCode: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     UpdateDate: new Date("TIMESTAMP"),
 * //     Targets: { // OperationTargetsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOperationCommandInput - {@link GetOperationCommandInput}
 * @returns {@link GetOperationCommandOutput}
 * @see {@link GetOperationCommandInput} for command's `input` shape.
 * @see {@link GetOperationCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link OperationNotFound} (client fault)
 *  <p>No operation exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: Get operation result
 * ```javascript
 * // Example: Get operation result
 * const input = {
 *   OperationId: "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd"
 * };
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Operation: {
 *     CreateDate: 1.587055860121E9,
 *     Id: "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd",
 *     Status: "SUCCESS",
 *     Targets: {
 *       NAMESPACE: "ns-ylexjili4cdxy3xm"
 *     },
 *     Type: "CREATE_NAMESPACE",
 *     UpdateDate: 1.587055900469E9
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOperationCommand extends $Command
  .classBuilder<
    GetOperationCommandInput,
    GetOperationCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "GetOperation", {})
  .n("ServiceDiscoveryClient", "GetOperationCommand")
  .sc(GetOperation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOperationRequest;
      output: GetOperationResponse;
    };
    sdk: {
      input: GetOperationCommandInput;
      output: GetOperationCommandOutput;
    };
  };
}
