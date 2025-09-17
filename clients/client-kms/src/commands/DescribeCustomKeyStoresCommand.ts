// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  DescribeCustomKeyStoresRequest,
  DescribeCustomKeyStoresResponse,
  DescribeCustomKeyStoresResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeCustomKeyStoresCommand, se_DescribeCustomKeyStoresCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomKeyStoresCommand}.
 */
export interface DescribeCustomKeyStoresCommandInput extends DescribeCustomKeyStoresRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomKeyStoresCommand}.
 */
export interface DescribeCustomKeyStoresCommandOutput extends DescribeCustomKeyStoresResponse, __MetadataBearer {}

/**
 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key stores</a> in the account and Region.</p>
 *          <p> This operation is part of the custom key stores feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>By default, this operation returns information about all custom key stores in the account
 *       and Region. To get only information about a particular custom key store, use either the
 *         <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but not
 *       both).</p>
 *          <p>To determine whether the custom key store is connected to its CloudHSM cluster or external
 *       key store proxy, use the <code>ConnectionState</code> element in the response. If an attempt
 *       to connect the custom key store failed, the <code>ConnectionState</code> value is
 *         <code>FAILED</code> and the <code>ConnectionErrorCode</code> element in the response
 *       indicates the cause of the failure. For help interpreting the
 *       <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has
 *       never been connected or you used the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect it. Otherwise, the connection state is CONNECTED. If your custom key store
 *       connection state is <code>CONNECTED</code> but you are having trouble using it, verify that
 *       the backing store is active and available. For an CloudHSM key store, verify that the associated
 *       CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if
 *       any. For an external key store, verify that the external key store proxy and its associated
 *       external key manager are reachable and enabled.</p>
 *          <p> For help repairing your CloudHSM key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting CloudHSM key stores</a>. For help
 *       repairing your external key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting external key stores</a>.
 *       Both topics are in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeCustomKeyStores</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ConnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DescribeCustomKeyStoresCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeCustomKeyStoresCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DescribeCustomKeyStoresRequest
 *   CustomKeyStoreId: "STRING_VALUE",
 *   CustomKeyStoreName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomKeyStoresResponse
 * //   CustomKeyStores: [ // CustomKeyStoresList
 * //     { // CustomKeyStoresListEntry
 * //       CustomKeyStoreId: "STRING_VALUE",
 * //       CustomKeyStoreName: "STRING_VALUE",
 * //       CloudHsmClusterId: "STRING_VALUE",
 * //       TrustAnchorCertificate: "STRING_VALUE",
 * //       ConnectionState: "CONNECTED" || "CONNECTING" || "FAILED" || "DISCONNECTED" || "DISCONNECTING",
 * //       ConnectionErrorCode: "INVALID_CREDENTIALS" || "CLUSTER_NOT_FOUND" || "NETWORK_ERRORS" || "INTERNAL_ERROR" || "INSUFFICIENT_CLOUDHSM_HSMS" || "USER_LOCKED_OUT" || "USER_NOT_FOUND" || "USER_LOGGED_IN" || "SUBNET_NOT_FOUND" || "INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET" || "XKS_PROXY_ACCESS_DENIED" || "XKS_PROXY_NOT_REACHABLE" || "XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND" || "XKS_PROXY_INVALID_RESPONSE" || "XKS_PROXY_INVALID_CONFIGURATION" || "XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION" || "XKS_PROXY_TIMED_OUT" || "XKS_PROXY_INVALID_TLS_CONFIGURATION",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CustomKeyStoreType: "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
 * //       XksProxyConfiguration: { // XksProxyConfigurationType
 * //         Connectivity: "PUBLIC_ENDPOINT" || "VPC_ENDPOINT_SERVICE",
 * //         AccessKeyId: "STRING_VALUE",
 * //         UriEndpoint: "STRING_VALUE",
 * //         UriPath: "STRING_VALUE",
 * //         VpcEndpointServiceName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeCustomKeyStoresCommandInput - {@link DescribeCustomKeyStoresCommandInput}
 * @returns {@link DescribeCustomKeyStoresCommandOutput}
 * @see {@link DescribeCustomKeyStoresCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomKeyStoresCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *  <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *  <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To get detailed information about custom key stores in the account and Region
 * ```javascript
 * // This example gets detailed information about all AWS KMS custom key stores in an AWS account and Region. To get all key stores, do not enter a custom key store name or ID.
 * const input = { /* empty *\/ };
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomKeyStores:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCustomKeyStoresCommand extends $Command
  .classBuilder<
    DescribeCustomKeyStoresCommandInput,
    DescribeCustomKeyStoresCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "DescribeCustomKeyStores", {})
  .n("KMSClient", "DescribeCustomKeyStoresCommand")
  .f(void 0, DescribeCustomKeyStoresResponseFilterSensitiveLog)
  .ser(se_DescribeCustomKeyStoresCommand)
  .de(de_DescribeCustomKeyStoresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomKeyStoresRequest;
      output: DescribeCustomKeyStoresResponse;
    };
    sdk: {
      input: DescribeCustomKeyStoresCommandInput;
      output: DescribeCustomKeyStoresCommandOutput;
    };
  };
}
