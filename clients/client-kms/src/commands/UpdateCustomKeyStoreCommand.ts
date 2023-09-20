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
  UpdateCustomKeyStoreRequest,
  UpdateCustomKeyStoreRequestFilterSensitiveLog,
  UpdateCustomKeyStoreResponse,
} from "../models/models_0";
import { de_UpdateCustomKeyStoreCommand, se_UpdateCustomKeyStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomKeyStoreCommand}.
 */
export interface UpdateCustomKeyStoreCommandInput extends UpdateCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomKeyStoreCommand}.
 */
export interface UpdateCustomKeyStoreCommandOutput extends UpdateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Changes the properties of a custom key store. You can use this operation to change the
 *       properties of an CloudHSM key store or an external key store.</p>
 *          <p>Use the required <code>CustomKeyStoreId</code> parameter to identify the custom key store.
 *       Use the remaining optional parameters to change its properties. This operation does not return
 *       any property values. To verify the updated property values, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <important>
 *             <p>When updating the properties of an external key store, verify that the updated settings
 *         connect your key store, via the external key store proxy, to the same external key manager
 *         as the previous settings, or to a backup or snapshot of the external key manager with the
 *         same cryptographic keys. If the updated connection settings fail, you can fix them and
 *         retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS
 *         permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is
 *         unrecoverable.</p>
 *          </important>
 *          <note>
 *             <p>For external key stores:</p>
 *             <p>Some external key managers provide a simpler method for updating an external key store.
 *         For details, see your external key manager documentation.</p>
 *             <p>When updating an external key store in the KMS console, you can upload a JSON-based
 *         proxy configuration file with the desired values. You cannot upload the proxy configuration
 *         file to the <code>UpdateCustomKeyStore</code> operation. However, you can use the file to
 *         help you determine the correct values for the <code>UpdateCustomKeyStore</code>
 *         parameters.</p>
 *          </note>
 *          <p>For an CloudHSM key store, you can use this operation to change the custom key store friendly
 *       name (<code>NewCustomKeyStoreName</code>), to tell KMS about a change to the
 *         <code>kmsuser</code> crypto user password (<code>KeyStorePassword</code>), or to associate
 *       the custom key store with a different, but related, CloudHSM cluster
 *         (<code>CloudHsmClusterId</code>). To update any property of an CloudHSM key store, the
 *         <code>ConnectionState</code> of the CloudHSM key store must be <code>DISCONNECTED</code>. </p>
 *          <p>For an external key store, you can use this operation to change the custom key store
 *       friendly name (<code>NewCustomKeyStoreName</code>), or to tell KMS about a change to the
 *       external key store proxy authentication credentials
 *         (<code>XksProxyAuthenticationCredential</code>), connection method
 *         (<code>XksProxyConnectivity</code>), external proxy endpoint
 *         (<code>XksProxyUriEndpoint</code>) and path (<code>XksProxyUriPath</code>). For external key
 *       stores with an <code>XksProxyConnectivity</code> of <code>VPC_ENDPOINT_SERVICE</code>, you can
 *       also update the Amazon VPC endpoint service name (<code>XksProxyVpcEndpointServiceName</code>). To
 *       update most properties of an external key store, the <code>ConnectionState</code> of the
 *       external key store must be <code>DISCONNECTED</code>. However, you can update the
 *         <code>CustomKeyStoreName</code>, <code>XksProxyAuthenticationCredential</code>, and
 *         <code>XksProxyUriPath</code> of an external key store when it is in the CONNECTED or
 *       DISCONNECTED state. </p>
 *          <p>If your update requires a <code>DISCONNECTED</code> state, before using
 *         <code>UpdateCustomKeyStore</code>, use the <a>DisconnectCustomKeyStore</a>
 *       operation to disconnect the custom key store. After the <code>UpdateCustomKeyStore</code>
 *       operation completes, use the <a>ConnectCustomKeyStore</a> to reconnect the custom
 *       key store. To find the <code>ConnectionState</code> of the custom key store, use the <a>DescribeCustomKeyStores</a> operation. </p>
 *          <p>
 *     </p>
 *          <p>Before updating the custom key store, verify that the new values allow KMS to connect
 *       the custom key store to its backing key store. For example, before you change the
 *         <code>XksProxyUriPath</code> value, verify that the external key store proxy is reachable at
 *       the new path.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p>
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
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // UpdateCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 *   NewCustomKeyStoreName: "STRING_VALUE",
 *   KeyStorePassword: "STRING_VALUE",
 *   CloudHsmClusterId: "STRING_VALUE",
 *   XksProxyUriEndpoint: "STRING_VALUE",
 *   XksProxyUriPath: "STRING_VALUE",
 *   XksProxyVpcEndpointServiceName: "STRING_VALUE",
 *   XksProxyAuthenticationCredential: { // XksProxyAuthenticationCredentialType
 *     AccessKeyId: "STRING_VALUE", // required
 *     RawSecretAccessKey: "STRING_VALUE", // required
 *   },
 *   XksProxyConnectivity: "PUBLIC_ENDPOINT" || "VPC_ENDPOINT_SERVICE",
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCustomKeyStoreCommandInput - {@link UpdateCustomKeyStoreCommandInput}
 * @returns {@link UpdateCustomKeyStoreCommandOutput}
 * @see {@link UpdateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomKeyStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link CloudHsmClusterNotFoundException} (client fault)
 *  <p>The request was rejected because KMS cannot find the CloudHSM cluster with the specified
 *       cluster ID. Retry the request with a different cluster ID.</p>
 *
 * @throws {@link CloudHsmClusterNotRelatedException} (client fault)
 *  <p>The request was rejected because the specified CloudHSM cluster has a different cluster
 *       certificate than the original cluster. You cannot use the operation to specify an unrelated
 *       cluster for an CloudHSM key store.</p>
 *          <p>Specify an CloudHSM cluster that shares a backup history with the original cluster. This
 *       includes clusters that were created from a backup of the current cluster, and clusters that
 *       were created from the same backup that produced the current cluster.</p>
 *          <p>CloudHSM clusters that share a backup history have the same cluster certificate. To view the
 *       cluster certificate of an CloudHSM cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
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
 * @throws {@link CustomKeyStoreNameInUseException} (client fault)
 *  <p>The request was rejected because the specified custom key store name is already assigned
 *       to another custom key store in the account. Try again with a custom key store name that is
 *       unique in the account.</p>
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *  <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link XksProxyIncorrectAuthenticationCredentialException} (client fault)
 *  <p>The request was rejected because the proxy credentials failed to authenticate to the
 *       specified external key store proxy. The specified external key store proxy rejected a status
 *       request from KMS due to invalid credentials. This can indicate an error in the credentials
 *       or in the identification of the external key store proxy.</p>
 *
 * @throws {@link XksProxyInvalidConfigurationException} (client fault)
 *  <p>The request was rejected because the Amazon VPC endpoint service configuration does not fulfill
 *       the requirements for an external key store proxy. For details, see the exception
 *       message.</p>
 *
 * @throws {@link XksProxyInvalidResponseException} (client fault)
 *  <p></p>
 *          <p>KMS cannot interpret the response it received from the external key store proxy. The
 *       problem might be a poorly constructed response, but it could also be a transient network
 *       issue. If you see this error repeatedly, report it to the proxy vendor.</p>
 *
 * @throws {@link XksProxyUriEndpointInUseException} (client fault)
 *  <p>The request was rejected because the concatenation of the <code>XksProxyUriEndpoint</code>
 *       is already associated with an external key store in the Amazon Web Services account and Region. Each
 *       external key store in an account and Region must use a unique external key store proxy
 *       address.</p>
 *
 * @throws {@link XksProxyUriInUseException} (client fault)
 *  <p>The request was rejected because the concatenation of the <code>XksProxyUriEndpoint</code>
 *       and <code>XksProxyUriPath</code> is already associated with an external key store in the
 *       Amazon Web Services account and Region. Each external key store in an account and Region must use a unique
 *       external key store proxy API address.</p>
 *
 * @throws {@link XksProxyUriUnreachableException} (client fault)
 *  <p>KMS was unable to reach the specified <code>XksProxyUriPath</code>. The path must be
 *       reachable before you create the external key store or update its settings.</p>
 *          <p>This exception is also thrown when the external key store proxy response to a
 *         <code>GetHealthStatus</code> request indicates that all external key manager instances are
 *       unavailable.</p>
 *
 * @throws {@link XksProxyVpcEndpointServiceInUseException} (client fault)
 *  <p>The request was rejected because the specified Amazon VPC endpoint service is already
 *       associated with an external key store in the Amazon Web Services account and Region. Each external key store
 *       in an Amazon Web Services account and Region must use a different Amazon VPC endpoint service.</p>
 *
 * @throws {@link XksProxyVpcEndpointServiceInvalidConfigurationException} (client fault)
 *  <p>The request was rejected because the Amazon VPC endpoint service configuration does not fulfill
 *       the requirements for an external key store proxy. For details, see the exception message and
 *         <a href="kms/latest/developerguide/vpc-connectivity.html#xks-vpc-requirements">review the
 *         requirements</a> for Amazon VPC endpoint service connectivity for an external key
 *       store.</p>
 *
 * @throws {@link XksProxyVpcEndpointServiceNotFoundException} (client fault)
 *  <p>The request was rejected because KMS could not find the specified VPC endpoint service.
 *       Use <a>DescribeCustomKeyStores</a> to verify the VPC endpoint service name for the
 *       external key store. Also, confirm that the <code>Allow principals</code> list for the VPC
 *       endpoint service includes the KMS service principal for the Region, such as
 *         <code>cks.kms.us-east-1.amazonaws.com</code>.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To edit the friendly name of a custom key store
 * ```javascript
 * // This example changes the friendly name of the AWS KMS custom key store to the name that you specify. This operation does not return any data. To verify that the operation worked, use the DescribeCustomKeyStores operation.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0",
 *   "NewCustomKeyStoreName": "DevelopmentKeys"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-edit-the-friendly-name-of-a-custom-key-store-1
 * ```
 *
 * @example To edit the password of an AWS CloudHSM key store
 * ```javascript
 * // This example tells AWS KMS the password for the kmsuser crypto user in the AWS CloudHSM cluster that is associated with the AWS KMS custom key store. (It does not change the password in the CloudHSM cluster.) This operation does not return any data.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0",
 *   "KeyStorePassword": "ExamplePassword"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-edit-the-properties-of-an-aws-cloudhsm-key-store-2
 * ```
 *
 * @example To associate the custom key store with a different, but related, AWS CloudHSM cluster.
 * ```javascript
 * // This example changes the AWS CloudHSM cluster that is associated with an AWS CloudHSM key store to a related cluster, such as a different backup of the same cluster. This operation does not return any data. To verify that the operation worked, use the DescribeCustomKeyStores operation.
 * const input = {
 *   "CloudHsmClusterId": "cluster-234abcdefABC",
 *   "CustomKeyStoreId": "cks-1234567890abcdef0"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-associate-the-custom-key-store-with-a-different-but-related-aws-cloudhsm-cluster-3
 * ```
 *
 * @example To update the proxy authentication credential of an external key store
 * ```javascript
 * // To update the proxy authentication credential for your external key store, specify both the <code>RawSecretAccessKey</code> and the <code>AccessKeyId</code>, even if you are changing only one of the values. You can use this feature to fix an invalid credential or to change the credential when the external key store proxy rotates it.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0",
 *   "XksProxyAuthenticationCredential": {
 *     "AccessKeyId": "ABCDE12345670EXAMPLE",
 *     "RawSecretAccessKey": "DXjSUawnel2fr6SKC7G25CNxTyWKE5PF9XX6H/u9pSo="
 *   }
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-update-the-proxy-authentication-credential-of-an-external-key-store-4
 * ```
 *
 * @example To edit the proxy URI path of an external key store.
 * ```javascript
 * // This example updates the proxy URI path for an external key store
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0",
 *   "XksProxyUriPath": "/new-path/kms/xks/v1"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-update-the-xks-proxy-api-path-of-an-external-key-store-5
 * ```
 *
 * @example To update the proxy connectivity of an external key store to VPC_ENDPOINT_SERVICE
 * ```javascript
 * // To change the external key store proxy connectivity option from public endpoint connectivity to VPC endpoint service connectivity, in addition to changing the <code>XksProxyConnectivity</code> value, you must change the <code>XksProxyUriEndpoint</code> value to reflect the private DNS name associated with the VPC endpoint service. You must also add an <code>XksProxyVpcEndpointServiceName</code> value.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0",
 *   "XksProxyConnectivity": "VPC_ENDPOINT_SERVICE",
 *   "XksProxyUriEndpoint": "https://myproxy-private.xks.example.com",
 *   "XksProxyVpcEndpointServiceName": "com.amazonaws.vpce.us-east-1.vpce-svc-example"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-update-the-proxy-connectivity-of-an-external-key-store-to-vpc_endpoint_service-6
 * ```
 *
 */
export class UpdateCustomKeyStoreCommand extends $Command<
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
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
  constructor(readonly input: UpdateCustomKeyStoreCommandInput) {
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
  ): Handler<UpdateCustomKeyStoreCommandInput, UpdateCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomKeyStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "UpdateCustomKeyStore",
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
  private serialize(input: UpdateCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCustomKeyStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCustomKeyStoreCommandOutput> {
    return de_UpdateCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
