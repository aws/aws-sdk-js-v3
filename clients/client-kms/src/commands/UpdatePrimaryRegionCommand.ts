import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdatePrimaryRegionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePrimaryRegionCommand,
  serializeAws_json1_1UpdatePrimaryRegionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdatePrimaryRegionCommandInput extends UpdatePrimaryRegionRequest {}
export interface UpdatePrimaryRegionCommandOutput extends __MetadataBearer {}

/**
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
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The <i>primary key</i> of a multi-Region key is the source for properties
 *       that are always shared by primary and replica keys, including the key material, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material
 *       origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic
 *         key rotation</a>. It's the only key that can be replicated. You cannot <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html">delete the primary
 *           key</a> until all replica keys are deleted.</p>
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
 *         <code>Updating</code> key state, see <a href="kms/latest/developerguide/key-state.html">Key state:
 *         Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
 * const command = new UpdatePrimaryRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePrimaryRegionCommandInput} for command's `input` shape.
 * @see {@link UpdatePrimaryRegionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePrimaryRegionCommand extends $Command<
  UpdatePrimaryRegionCommandInput,
  UpdatePrimaryRegionCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdatePrimaryRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePrimaryRegionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePrimaryRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePrimaryRegionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePrimaryRegionCommandOutput> {
    return deserializeAws_json1_1UpdatePrimaryRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
