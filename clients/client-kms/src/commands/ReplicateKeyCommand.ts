// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  ReplicateKeyRequest,
  ReplicateKeyRequestFilterSensitiveLog,
  ReplicateKeyResponse,
  ReplicateKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ReplicateKeyCommand,
  serializeAws_json1_1ReplicateKeyCommand,
} from "../protocols/Aws_json1_1";

export interface ReplicateKeyCommandInput extends ReplicateKeyRequest {}
export interface ReplicateKeyCommandOutput extends ReplicateKeyResponse, __MetadataBearer {}

/**
 * <p>Replicates a multi-Region key into the specified Region. This operation creates a
 *       multi-Region replica key based on a multi-Region primary key in a different Region of the same
 *       Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a
 *       different Region. To create a multi-Region primary key, use the <a>CreateKey</a>
 *       operation.</p>
 *          <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
 *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
 *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>A <i>replica key</i> is a fully-functional KMS key that can be used
 *       independently of its primary and peer replica keys. A primary key and its replica keys share
 *       properties that make them interoperable. They have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a> and key material. They also
 *       have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key
 *         spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key
 *         usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key
 *         material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation status</a>. KMS automatically synchronizes these shared
 *       properties among related multi-Region keys. All other properties of a replica key can differ,
 *       including its <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key
 *         policy</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">tags</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">aliases</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a>. KMS pricing and quotas for KMS keys apply to each
 *       primary key and replica key.</p>
 *          <p>When this operation completes, the new replica key has a transient key state of
 *         <code>Creating</code>. This key state changes to <code>Enabled</code> (or
 *         <code>PendingImport</code>) after a few seconds when the process of creating the new replica
 *       key is complete. While the key state is <code>Creating</code>, you can manage key, but you
 *       cannot yet use it in cryptographic operations. If you are creating and using the replica key
 *       programmatically, retry on <code>KMSInvalidStateException</code> or call
 *         <code>DescribeKey</code> to check its <code>KeyState</code> value before using it. For
 *       details about the <code>Creating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>You cannot create more than one replica of a primary key in any Region. If the Region
 *       already includes a replica of the key you're trying to replicate, <code>ReplicateKey</code>
 *       returns an <code>AlreadyExistsException</code> error. If the key state of the existing replica
 *       is <code>PendingDeletion</code>, you can cancel the scheduled key deletion (<a>CancelKeyDeletion</a>) or wait for the key to be deleted. The new replica key you
 *       create will have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-sync-properties">shared
 *         properties</a> as the original replica key.</p>
 *          <p>The CloudTrail log of a <code>ReplicateKey</code> operation records a
 *         <code>ReplicateKey</code> operation in the primary key's Region and a <a>CreateKey</a> operation in the replica key's Region.</p>
 *          <p>If you replicate a multi-Region primary key with imported key material, the replica key is
 *       created with no key material. You must import the same key material that you imported into the
 *       primary key. For details, see <a href="kms/latest/developerguide/multi-region-keys-import.html">Importing key material into multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>To convert a replica key to a primary key, use the <a>UpdatePrimaryRegion</a>
 *       operation.</p>
 *          <note>
 *             <p>
 *                <code>ReplicateKey</code> uses different default values for the <code>KeyPolicy</code>
 *         and <code>Tags</code> parameters than those used in the KMS console. For details, see the
 *         parameter descriptions.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot use this operation to
 *       create a replica key in a different Amazon Web Services account. </p>
 *          <p>
 *             <b>Required permissions</b>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>kms:ReplicateKey</code> on the primary key (in the primary key's Region).
 *           Include this permission in the primary key's key policy.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>kms:CreateKey</code> in an IAM policy in the replica Region.</p>
 *             </li>
 *             <li>
 *                <p>To use the <code>Tags</code> parameter, <code>kms:TagResource</code> in an IAM policy
 *           in the replica Region.</p>
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
 *                   <a>UpdatePrimaryRegion</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ReplicateKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ReplicateKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ReplicateKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplicateKeyCommandInput} for command's `input` shape.
 * @see {@link ReplicateKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class ReplicateKeyCommand extends $Command<
  ReplicateKeyCommandInput,
  ReplicateKeyCommandOutput,
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

  constructor(readonly input: ReplicateKeyCommandInput) {
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
  ): Handler<ReplicateKeyCommandInput, ReplicateKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReplicateKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ReplicateKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplicateKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReplicateKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplicateKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReplicateKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplicateKeyCommandOutput> {
    return deserializeAws_json1_1ReplicateKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
