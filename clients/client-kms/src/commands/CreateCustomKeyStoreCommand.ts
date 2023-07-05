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
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  CreateCustomKeyStoreRequest,
  CreateCustomKeyStoreRequestFilterSensitiveLog,
  CreateCustomKeyStoreResponse,
} from "../models/models_0";
import { de_CreateCustomKeyStoreCommand, se_CreateCustomKeyStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomKeyStoreCommand}.
 */
export interface CreateCustomKeyStoreCommandInput extends CreateCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomKeyStoreCommand}.
 */
export interface CreateCustomKeyStoreCommandOutput extends CreateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> backed by a key store that you own and manage. When you use a
 *       KMS key in a custom key store for a cryptographic operation, the cryptographic operation is
 *       actually performed in your key store using your keys. KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a>
 *       backed by an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">CloudHSM cluster</a>
 *       and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key
 *         stores</a> backed by an external key store proxy and external key manager outside of
 *       Amazon Web Services.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>Before you create the custom key store, the required elements must be in place and
 *       operational. We recommend that you use the test tools that KMS provides to verify the
 *       configuration your external key store proxy. For details about the required elements and
 *       verification tests, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the prerequisites (for
 *         CloudHSM key stores)</a> or <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements">Assemble the prerequisites (for
 *         external key stores)</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>To create a custom key store, use the following parameters.</p>
 *          <ul>
 *             <li>
 *                <p>To create an CloudHSM key store, specify the <code>CustomKeyStoreName</code>,
 *             <code>CloudHsmClusterId</code>, <code>KeyStorePassword</code>, and
 *             <code>TrustAnchorCertificate</code>. The <code>CustomKeyStoreType</code> parameter is
 *           optional for CloudHSM key stores. If you include it, set it to the default value,
 *             <code>AWS_CLOUDHSM</code>. For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key store</a> in the
 *           <i>Key Management Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>To create an external key store, specify the <code>CustomKeyStoreName</code> and a
 *             <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>. Also, specify values
 *           for <code>XksProxyConnectivity</code>, <code>XksProxyAuthenticationCredential</code>,
 *             <code>XksProxyUriEndpoint</code>, and <code>XksProxyUriPath</code>. If your
 *             <code>XksProxyConnectivity</code> value is <code>VPC_ENDPOINT_SERVICE</code>, specify
 *           the <code>XksProxyVpcEndpointServiceName</code> parameter. For help with failures, see
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting
 *             an external key store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>For external key stores:</p>
 *             <p>Some external key managers provide a simpler method for creating an external key store.
 *         For details, see your external key manager documentation.</p>
 *             <p>When creating an external key store in the KMS console, you can upload a JSON-based
 *         proxy configuration file with the desired values. You cannot use a proxy configuration with
 *         the <code>CreateCustomKeyStore</code> operation. However, you can use the values in the file
 *         to help you determine the correct values for the <code>CreateCustomKeyStore</code>
 *         parameters.</p>
 *          </note>
 *          <p>When the operation completes successfully, it returns the ID of the new custom key store.
 *       Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect a new CloudHSM key store to its CloudHSM
 *       cluster, or to connect a new external key store to the external key store proxy for your
 *       external key manager. Even if you are not going to use your custom key store immediately, you
 *       might want to connect it to verify that all settings are correct and then disconnect it until
 *       you are ready to use it.</p>
 *          <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a custom key store</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateCustomKeyStore</a> (IAM policy).</p>
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
 * import { KMSClient, CreateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // CreateCustomKeyStoreRequest
 *   CustomKeyStoreName: "STRING_VALUE", // required
 *   CloudHsmClusterId: "STRING_VALUE",
 *   TrustAnchorCertificate: "STRING_VALUE",
 *   KeyStorePassword: "STRING_VALUE",
 *   CustomKeyStoreType: "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
 *   XksProxyUriEndpoint: "STRING_VALUE",
 *   XksProxyUriPath: "STRING_VALUE",
 *   XksProxyVpcEndpointServiceName: "STRING_VALUE",
 *   XksProxyAuthenticationCredential: { // XksProxyAuthenticationCredentialType
 *     AccessKeyId: "STRING_VALUE", // required
 *     RawSecretAccessKey: "STRING_VALUE", // required
 *   },
 *   XksProxyConnectivity: "PUBLIC_ENDPOINT" || "VPC_ENDPOINT_SERVICE",
 * };
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomKeyStoreResponse
 * //   CustomKeyStoreId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomKeyStoreCommandInput - {@link CreateCustomKeyStoreCommandInput}
 * @returns {@link CreateCustomKeyStoreCommandOutput}
 * @see {@link CreateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link CreateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CloudHsmClusterInUseException} (client fault)
 *  <p>The request was rejected because the specified CloudHSM cluster is already associated with an
 *       CloudHSM key store in the account, or it shares a backup history with an CloudHSM key store in the
 *       account. Each CloudHSM key store in the account must be associated with a different CloudHSM
 *       cluster.</p>
 *          <p>CloudHSM clusters that share a backup history have the same cluster certificate. To view the
 *       cluster certificate of an CloudHSM cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
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
 * @throws {@link CustomKeyStoreNameInUseException} (client fault)
 *  <p>The request was rejected because the specified custom key store name is already assigned
 *       to another custom key store in the account. Try again with a custom key store name that is
 *       unique in the account.</p>
 *
 * @throws {@link IncorrectTrustAnchorException} (client fault)
 *  <p>The request was rejected because the trust anchor certificate in the request to create an
 *       CloudHSM key store is not the trust anchor certificate for the specified CloudHSM cluster.</p>
 *          <p>When you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize the CloudHSM cluster</a>, you create the trust anchor certificate and save it
 *       in the <code>customerCA.crt</code> file.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
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
 * @example To create an AWS CloudHSM key store
 * ```javascript
 * // This example creates a custom key store that is associated with an AWS CloudHSM cluster.
 * const input = {
 *   "CloudHsmClusterId": "cluster-234abcdefABC",
 *   "CustomKeyStoreName": "ExampleKeyStore",
 *   "KeyStorePassword": "kmsPswd",
 *   "TrustAnchorCertificate": "<certificate-goes-here>"
 * };
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0"
 * }
 * *\/
 * // example id: to-create-an-aws-cloudhsm-custom-key-store-1
 * ```
 *
 * @example To create an external key store with VPC endpoint service connectivity
 * ```javascript
 * // This example creates an external key store that uses an Amazon VPC endpoint service to communicate with AWS KMS.
 * const input = {
 *   "CustomKeyStoreName": "ExampleVPCEndpointKeyStore",
 *   "CustomKeyStoreType": "EXTERNAL_KEY_STORE",
 *   "XksProxyAuthenticationCredential": {
 *     "AccessKeyId": "ABCDE12345670EXAMPLE",
 *     "RawSecretAccessKey": "DXjSUawnel2fr6SKC7G25CNxTyWKE5PF9XX6H/u9pSo="
 *   },
 *   "XksProxyConnectivity": "VPC_ENDPOINT_SERVICE",
 *   "XksProxyUriEndpoint": "https://myproxy-private.xks.example.com",
 *   "XksProxyUriPath": "/example-prefix/kms/xks/v1",
 *   "XksProxyVpcEndpointServiceName": "com.amazonaws.vpce.us-east-1.vpce-svc-example1"
 * };
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0"
 * }
 * *\/
 * // example id: to-create-an-external-custom-key-store-with-vpc-connectivity-2
 * ```
 *
 * @example To create an external key store with public endpoint connectivity
 * ```javascript
 * // This example creates an external key store with public endpoint connectivity.
 * const input = {
 *   "CustomKeyStoreName": "ExamplePublicEndpointKeyStore",
 *   "CustomKeyStoreType": "EXTERNAL_KEY_STORE",
 *   "XksProxyAuthenticationCredential": {
 *     "AccessKeyId": "ABCDE12345670EXAMPLE",
 *     "RawSecretAccessKey": "DXjSUawnel2fr6SKC7G25CNxTyWKE5PF9XX6H/u9pSo="
 *   },
 *   "XksProxyConnectivity": "PUBLIC_ENDPOINT",
 *   "XksProxyUriEndpoint": "https://myproxy.xks.example.com",
 *   "XksProxyUriPath": "/kms/xks/v1"
 * };
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomKeyStoreId": "cks-987654321abcdef0"
 * }
 * *\/
 * // example id: to-create-an-external-custom-key-store-with-a-public-endpoint-3
 * ```
 *
 */
export class CreateCustomKeyStoreCommand extends $Command<
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput,
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
  constructor(readonly input: CreateCustomKeyStoreCommandInput) {
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
  ): Handler<CreateCustomKeyStoreCommandInput, CreateCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomKeyStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCustomKeyStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomKeyStoreCommandOutput> {
    return de_CreateCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
