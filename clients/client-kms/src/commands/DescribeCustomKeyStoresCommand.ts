// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and Region.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DescribeCustomKeyStoresCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeCustomKeyStoresCommand } = require("@aws-sdk/client-kms"); // CommonJS import
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
 * @example To get detailed information about custom key stores in the account and Region
 * ```javascript
 * // This example gets detailed information about all AWS KMS custom key stores in an AWS account and Region. To get all key stores, do not enter a custom key store name or ID.
 * const input = {};
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStores": []
 * }
 * *\/
 * // example id: to-get-detailed-information-about-custom-key-stores-in-the-account-and-region-1
 * ```
 *
 * @example To get detailed information about an AWS CloudHSM key store by specifying its friendly name
 * ```javascript
 * // This example gets detailed information about a particular AWS CloudHSM key store by specifying its friendly name. To limit the output to a particular custom key store, provide either the custom key store name or ID.
 * const input = {
 *   "CustomKeyStoreName": "ExampleKeyStore"
 * };
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStores": [
 *     {
 *       "CloudHsmClusterId": "cluster-234abcdefABC",
 *       "ConnectionState": "CONNECTED",
 *       "CreationDate": "1.499288695918E9",
 *       "CustomKeyStoreId": "cks-1234567890abcdef0",
 *       "CustomKeyStoreName": "ExampleKeyStore",
 *       "CustomKeyStoreType": "AWS_CLOUDHSM",
 *       "TrustAnchorCertificate": "<certificate appears here>"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-detailed-information-about-a-cloudhsm-custom-key-store-by-name-2
 * ```
 *
 * @example To get detailed information about an external key store by specifying its ID
 * ```javascript
 * // This example gets detailed information about an external key store by specifying its ID.  The example external key store proxy uses public endpoint connectivity.
 * const input = {
 *   "CustomKeyStoreId": "cks-9876543210fedcba9"
 * };
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStores": [
 *     {
 *       "ConnectionState": "CONNECTED",
 *       "CreationDate": "1.599288695918E9",
 *       "CustomKeyStoreId": "cks-9876543210fedcba9",
 *       "CustomKeyStoreName": "ExampleExternalKeyStore",
 *       "CustomKeyStoreType": "EXTERNAL_KEY_STORE",
 *       "XksProxyConfiguration": {
 *         "AccessKeyId": "ABCDE12345670EXAMPLE",
 *         "Connectivity": "PUBLIC_ENDPOINT",
 *         "UriEndpoint": "https://myproxy.xks.example.com",
 *         "UriPath": "/kms/xks/v1"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-detailed-information-about-an-external-key-store--3
 * ```
 *
 * @example To get detailed information about an external key store VPC endpoint connectivity by specifying its friendly name
 * ```javascript
 * // This example gets detailed information about a particular external key store by specifying its friendly name. To limit the output to a particular custom key store, provide either the custom key store name or ID. The proxy URI path for this external key store includes an optional prefix. Also, because this example external key store uses VPC endpoint connectivity, the response includes the associated VPC endpoint service name.
 * const input = {
 *   "CustomKeyStoreName": "VPCExternalKeystore"
 * };
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStores": [
 *     {
 *       "ConnectionState": "CONNECTED",
 *       "CreationDate": "1.643057863.842",
 *       "CustomKeyStoreId": "cks-876543210fedcba98",
 *       "CustomKeyStoreName": "ExampleVPCExternalKeyStore",
 *       "CustomKeyStoreType": "EXTERNAL_KEY_STORE",
 *       "XksProxyConfiguration": {
 *         "AccessKeyId": "ABCDE12345670EXAMPLE",
 *         "Connectivity": "VPC_ENDPOINT_SERVICE",
 *         "UriEndpoint": "https://myproxy-private.xks.example.com",
 *         "UriPath": "/example-prefix/kms/xks/v1",
 *         "VpcEndpointServiceName": "com.amazonaws.vpce.us-east-1.vpce-svc-example1"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-detailed-information-about-an-external-custom-key-store-by-name-4
 * ```
 *
 */
export class DescribeCustomKeyStoresCommand extends $Command<
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeCustomKeyStoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomKeyStoresCommandInput, DescribeCustomKeyStoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomKeyStoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DescribeCustomKeyStoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeCustomKeyStoresResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "DescribeCustomKeyStores",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeCustomKeyStoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCustomKeyStoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomKeyStoresCommandOutput> {
    return de_DescribeCustomKeyStoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
