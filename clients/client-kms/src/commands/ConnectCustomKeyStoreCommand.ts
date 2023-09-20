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
import { ConnectCustomKeyStoreRequest, ConnectCustomKeyStoreResponse } from "../models/models_0";
import { de_ConnectCustomKeyStoreCommand, se_ConnectCustomKeyStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ConnectCustomKeyStoreCommand}.
 */
export interface ConnectCustomKeyStoreCommandInput extends ConnectCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link ConnectCustomKeyStoreCommand}.
 */
export interface ConnectCustomKeyStoreCommandOutput extends ConnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its backing key store. For an CloudHSM key
 *       store, <code>ConnectCustomKeyStore</code> connects the key store to its associated CloudHSM
 *       cluster. For an external key store, <code>ConnectCustomKeyStore</code> connects the key store
 *       to the external key store proxy that communicates with your external key manager.</p>
 *          <p>The custom key store must be connected before you can create KMS keys in the key store or
 *       use the KMS keys it contains. You can disconnect and reconnect a custom key store at any
 *       time.</p>
 *          <p>The connection process for a custom key store can take an extended amount of time to
 *       complete. This operation starts the connection process, but it does not wait for it to
 *       complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON
 *       object with no properties. However, this response does not indicate that the custom key store
 *       is connected. To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find
 *       the reason, use the <a>DescribeCustomKeyStores</a> operation and see the
 *         <code>ConnectionErrorCode</code> in the response. For help interpreting the
 *         <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use
 *         <code>ConnectCustomKeyStore</code> again.</p>
 *          <p>
 *             <b>CloudHSM key store</b>
 *          </p>
 *          <p>During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that
 *       is associated with the custom key store, creates the connection infrastructure, connects to
 *       the cluster, logs into the CloudHSM client as the <code>kmsuser</code> CU, and rotates its
 *       password.</p>
 *          <p>To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active
 *       HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs
 *       to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
 *                <code>kmsuser</code> crypto
 *         user</a> (CU) must not be logged into the cluster. This prevents KMS from using this
 *       account to log in.</p>
 *          <p>If you are having trouble connecting or disconnecting a CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key
 *         store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>External key store</b>
 *          </p>
 *          <p>When you connect an external key store that uses public endpoint connectivity, KMS tests
 *       its ability to communicate with your external key manager by sending a request via the
 *       external key store proxy.</p>
 *          <p>When you connect to an external key store that uses VPC endpoint service connectivity,
 *       KMS establishes the networking elements that it needs to communicate with your external key
 *       manager via the external key store proxy. This includes creating an interface endpoint to the
 *       VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint
 *       service.</p>
 *          <p>To connect an external key store, KMS must be able to connect to the external key store
 *       proxy, the external key store proxy must be able to communicate with your external key
 *       manager, and the external key manager must be available for cryptographic operations.</p>
 *          <p>If you are having trouble connecting or disconnecting an external key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting an external
 *         key store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ConnectCustomKeyStore</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
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
 *                   <a>DescribeCustomKeyStores</a>
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
 * import { KMSClient, ConnectCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ConnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ConnectCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 * };
 * const command = new ConnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ConnectCustomKeyStoreCommandInput - {@link ConnectCustomKeyStoreCommandInput}
 * @returns {@link ConnectCustomKeyStoreCommandOutput}
 * @see {@link ConnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link ConnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CloudHsmClusterInvalidConfigurationException} (client fault)
 *  <p>The request was rejected because the associated CloudHSM cluster did not meet the
 *       configuration requirements for an CloudHSM key store.</p>
 *          <ul>
 *             <li>
 *                <p>The CloudHSM cluster must be configured with private subnets in at least two different
 *           Availability Zones in the Region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">security group for
 *             the cluster</a> (cloudhsm-cluster-<i><cluster-id></i>-sg) must
 *           include inbound rules and outbound rules that allow TCP traffic on ports 2223-2225. The
 *             <b>Source</b> in the inbound rules and the <b>Destination</b> in the outbound rules must match the security group
 *           ID. These rules are set by default when you create the CloudHSM cluster. Do not delete or
 *           change them. To get information about a particular security group, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html">DescribeSecurityGroups</a> operation.</p>
 *             </li>
 *             <li>
 *                <p>The CloudHSM cluster must contain at least as many HSMs as the operation requires. To add
 *           HSMs, use the CloudHSM <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation.</p>
 *                <p>For the <a>CreateCustomKeyStore</a>, <a>UpdateCustomKeyStore</a>, and <a>CreateKey</a> operations, the CloudHSM cluster must have at least two
 *           active HSMs, each in a different Availability Zone. For the <a>ConnectCustomKeyStore</a> operation, the CloudHSM must contain at least one active
 *           HSM.</p>
 *             </li>
 *          </ul>
 *          <p>For information about the requirements for an CloudHSM cluster that is associated with an
 *       CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a>
 *       in the <i>Key Management Service Developer Guide</i>. For information about creating a private subnet for an CloudHSM cluster,
 *       see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/create-subnets.html">Create a Private
 *         Subnet</a> in the <i>CloudHSM User Guide</i>. For information about cluster security groups, see
 *         <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">Configure a Default Security
 *         Group</a> in the <i>
 *                <i>CloudHSM User Guide</i>
 *             </i>. </p>
 *
 * @throws {@link CloudHsmClusterNotActiveException} (client fault)
 *  <p>The request was rejected because the CloudHSM cluster associated with the CloudHSM key store is
 *       not active. Initialize and activate the cluster and try the command again. For detailed
 *       instructions, see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html">Getting
 *         Started</a> in the <i>CloudHSM User Guide</i>.</p>
 *
 * @throws {@link CustomKeyStoreInvalidStateException} (client fault)
 *  <p>The request was rejected because of the <code>ConnectionState</code> of the custom key
 *       store. To get the <code>ConnectionState</code> of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p>This exception is thrown under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>You requested the <a>ConnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>FAILED</code>. This operation is valid for all other <code>ConnectionState</code>
 *           values. To reconnect a custom key store in a <code>FAILED</code> state, disconnect it
 *             (<a>DisconnectCustomKeyStore</a>), then connect it
 *             (<code>ConnectCustomKeyStore</code>).</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>CreateKey</a> operation in a custom key store that is
 *           not connected. This operations is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>DisconnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>DISCONNECTED</code>. This operation is valid for all other
 *             <code>ConnectionState</code> values.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>UpdateCustomKeyStore</a> or <a>DeleteCustomKeyStore</a> operation on a custom key store that is not
 *           disconnected. This operation is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>DISCONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>GenerateRandom</a> operation in an CloudHSM key store
 *           that is not connected. This operation is valid only when the CloudHSM key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>. </p>
 *             </li>
 *          </ul>
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *  <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To connect a custom key store
 * ```javascript
 * // This example connects an AWS KMS custom key store to its backing key store. For an AWS CloudHSM key store, it connects the key store to its AWS CloudHSM cluster. For an external key store, it connects the key store to the external key store proxy that communicates with your external key manager. This operation does not return any data. To verify that the custom key store is connected, use the <code>DescribeCustomKeyStores</code> operation.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0"
 * };
 * const command = new ConnectCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-connect-a-custom-key-store-1628626947750
 * ```
 *
 */
export class ConnectCustomKeyStoreCommand extends $Command<
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
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
  constructor(readonly input: ConnectCustomKeyStoreCommandInput) {
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
  ): Handler<ConnectCustomKeyStoreCommandInput, ConnectCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConnectCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ConnectCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "ConnectCustomKeyStore",
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
  private serialize(input: ConnectCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ConnectCustomKeyStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConnectCustomKeyStoreCommandOutput> {
    return de_ConnectCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
