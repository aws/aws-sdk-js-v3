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
import { UpdatePrimaryRegionRequest } from "../models/models_0";
import { de_UpdatePrimaryRegionCommand, se_UpdatePrimaryRegionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePrimaryRegionCommand}.
 */
export interface UpdatePrimaryRegionCommandInput extends UpdatePrimaryRegionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePrimaryRegionCommand}.
 */
export interface UpdatePrimaryRegionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Changes the primary key of a multi-Region key. </p>
 *          <p>This operation changes the replica key in the specified Region to a primary key and
 *       changes the former primary key to a replica key. For example, suppose you have a primary key
 *       in <code>us-east-1</code> and a replica key in <code>eu-west-2</code>. If you run
 *         <code>UpdatePrimaryRegion</code> with a <code>PrimaryRegion</code> value of
 *         <code>eu-west-2</code>, the primary key is now the key in <code>eu-west-2</code>, and the
 *       key in <code>us-east-1</code> becomes a replica key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-update">Updating the primary Region</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
 *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
 *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The <i>primary key</i> of a multi-Region key is the source for properties
 *       that are always shared by primary and replica keys, including the key material, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material
 *       origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic
 *         key rotation</a>. It's the only key that can be replicated. You cannot <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html">delete the primary
 *         key</a> until all replica keys are deleted.</p>
 *          <p>The key ID and primary Region that you specify uniquely identify the replica key that will
 *       become the primary key. The primary Region must already have a replica key. This operation
 *       does not create a KMS key in the specified Region. To find the replica keys, use the <a>DescribeKey</a> operation on the primary key or any replica key. To create a replica
 *       key, use the <a>ReplicateKey</a> operation.</p>
 *          <p>You can run this operation while using the affected multi-Region keys in cryptographic
 *       operations. This operation should not delay, interrupt, or cause failures in cryptographic
 *       operations. </p>
 *          <p>Even after this operation completes, the process of updating the primary Region might
 *       still be in progress for a few more seconds. Operations such as <code>DescribeKey</code> might
 *       display both the old and new primary keys as replicas. The old and new primary keys have a
 *       transient key state of <code>Updating</code>. The original key state is restored when the
 *       update is complete. While the key state is <code>Updating</code>, you can use the keys in
 *       cryptographic operations, but you cannot replicate the new primary key or perform certain
 *       management operations, such as enabling or disabling these keys. For details about the
 *         <code>Updating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>This operation does not return any output. To verify that primary key is changed, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot use this operation in a
 *       different Amazon Web Services account. </p>
 *          <p>
 *             <b>Required permissions</b>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>kms:UpdatePrimaryRegion</code> on the current primary key (in the primary key's
 *           Region). Include this permission primary key's key policy.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>kms:UpdatePrimaryRegion</code> on the current replica key (in the replica key's
 *           Region). Include this permission in the replica key's key policy.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ReplicateKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdatePrimaryRegionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdatePrimaryRegionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // UpdatePrimaryRegionRequest
 *   KeyId: "STRING_VALUE", // required
 *   PrimaryRegion: "STRING_VALUE", // required
 * };
 * const command = new UpdatePrimaryRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePrimaryRegionCommandInput - {@link UpdatePrimaryRegionCommandInput}
 * @returns {@link UpdatePrimaryRegionCommandOutput}
 * @see {@link UpdatePrimaryRegionCommandInput} for command's `input` shape.
 * @see {@link UpdatePrimaryRegionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To update the primary Region of a multi-Region KMS key
 * ```javascript
 * // The following UpdatePrimaryRegion example changes the multi-Region replica key in the eu-central-1 Region to the primary key. The current primary key in the us-west-1 Region becomes a replica key.
 * //
 * // The KeyId parameter identifies the current primary key in the us-west-1 Region. The PrimaryRegion parameter indicates the Region of the replica key that will become the new primary key.
 * //
 * // This operation does not return any output. To verify that primary key is changed, use the DescribeKey operation.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-west-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *   "PrimaryRegion": "eu-central-1"
 * };
 * const command = new UpdatePrimaryRegionCommand(input);
 * await client.send(command);
 * // example id: to-update-the-primary-region-of-a-multi-region-kms-key-1660249555577
 * ```
 *
 */
export class UpdatePrimaryRegionCommand extends $Command<
  UpdatePrimaryRegionCommandInput,
  UpdatePrimaryRegionCommandOutput,
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
  constructor(readonly input: UpdatePrimaryRegionCommandInput) {
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
  ): Handler<UpdatePrimaryRegionCommandInput, UpdatePrimaryRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePrimaryRegionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdatePrimaryRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdatePrimaryRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePrimaryRegionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePrimaryRegionCommandOutput> {
    return de_UpdatePrimaryRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
