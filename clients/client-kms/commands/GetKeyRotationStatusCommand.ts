import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetKeyRotationStatusRequest, GetKeyRotationStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetKeyRotationStatusCommand,
  serializeAws_json1_1GetKeyRotationStatusCommand,
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

export interface GetKeyRotationStatusCommandInput extends GetKeyRotationStatusRequest {}
export interface GetKeyRotationStatusCommandOutput extends GetKeyRotationStatusResponse, __MetadataBearer {}

/**
 * <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is
 *       enabled for the specified KMS key.</p>
 *          <p>You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-replica-key">multi-Region keys</a>, set the property on the primary key. The key rotation status for these KMS keys is always <code>false</code>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>Disabled: The key rotation status does not change when you disable a KMS key. However,
 *           while the KMS key is disabled, KMS does not rotate the key material.</p>
 *             </li>
 *             <li>
 *                <p>Pending deletion: While a KMS key is pending deletion, its key rotation status is
 *             <code>false</code> and KMS does not rotate the key material. If you cancel the
 *           deletion, the original key rotation status is restored.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DisableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EnableKeyRotation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyRotationStatusCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyRotationStatusCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetKeyRotationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyRotationStatusCommandInput} for command's `input` shape.
 * @see {@link GetKeyRotationStatusCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetKeyRotationStatusCommand extends $Command<
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyRotationStatusCommandInput) {
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
  ): Handler<GetKeyRotationStatusCommandInput, GetKeyRotationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetKeyRotationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyRotationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyRotationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKeyRotationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetKeyRotationStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyRotationStatusCommandOutput> {
    return deserializeAws_json1_1GetKeyRotationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
