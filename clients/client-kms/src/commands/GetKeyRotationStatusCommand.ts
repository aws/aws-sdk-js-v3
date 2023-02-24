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
  GetKeyRotationStatusRequest,
  GetKeyRotationStatusRequestFilterSensitiveLog,
  GetKeyRotationStatusResponse,
  GetKeyRotationStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetKeyRotationStatusCommand,
  serializeAws_json1_1GetKeyRotationStatusCommand,
} from "../protocols/Aws_json1_1";

export interface GetKeyRotationStatusCommandInput extends GetKeyRotationStatusRequest {}
export interface GetKeyRotationStatusCommandOutput extends GetKeyRotationStatusResponse, __MetadataBearer {}

/**
 * <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is
 *       enabled for the specified KMS key.</p>
 *          <p>When you enable automatic rotation for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS keys</a>, KMS
 *       rotates the key material of the KMS key one year (approximately 365 days) from the enable date
 *       and every year thereafter. You can monitor rotation of the key material for your KMS keys in
 *       CloudTrail and Amazon CloudWatch.</p>
 *          <p>Automatic key rotation is supported only on <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">symmetric encryption KMS keys</a>.
 *       You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key..</p>
 *          <p>You can enable (<a>EnableKeyRotation</a>) and disable automatic rotation (<a>DisableKeyRotation</a>) of the key material in customer managed KMS keys. Key
 *       material rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> is not
 *       configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The
 *       key rotation status for Amazon Web Services managed KMS keys is always <code>true</code>.</p>
 *          <note>
 *             <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three
 *         years to every year. For details, see <a>EnableKeyRotation</a>.</p>
 *          </note>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>Disabled: The key rotation status does not change when you disable a KMS key. However,
 *           while the KMS key is disabled, KMS does not rotate the key material. When you re-enable
 *           the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been
 *           rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been
 *           less than a year since the key material in the re-enabled KMS key was rotated, the KMS key
 *           resumes its prior rotation schedule.</p>
 *             </li>
 *             <li>
 *                <p>Pending deletion: While a KMS key is pending deletion, its key rotation status is
 *             <code>false</code> and KMS does not rotate the key material. If you cancel the
 *           deletion, the original key rotation status returns to <code>true</code>.</p>
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
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class GetKeyRotationStatusCommand extends $Command<
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetKeyRotationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetKeyRotationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyRotationStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetKeyRotationStatusResponseFilterSensitiveLog,
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
