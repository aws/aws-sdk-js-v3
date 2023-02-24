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
  GetParametersForImportRequest,
  GetParametersForImportRequestFilterSensitiveLog,
  GetParametersForImportResponse,
  GetParametersForImportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetParametersForImportCommand,
  serializeAws_json1_1GetParametersForImportCommand,
} from "../protocols/Aws_json1_1";

export interface GetParametersForImportCommandInput extends GetParametersForImportRequest {}
export interface GetParametersForImportCommandOutput extends GetParametersForImportResponse, __MetadataBearer {}

/**
 * <p>Returns the items you need to import key material into a symmetric encryption KMS key. For
 *       more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>This operation returns a public key and an import token. Use the public key to encrypt the
 *       symmetric key material. Store the import token to send with a subsequent <a>ImportKeyMaterial</a> request.</p>
 *          <p>You must specify the key ID of the symmetric encryption KMS key into which you will import
 *       key material. The KMS key <code>Origin</code> must be <code>EXTERNAL</code>. You must also
 *       specify the wrapping algorithm and type of wrapping key (public key) that you will use to
 *       encrypt the key material. You cannot perform this operation on an asymmetric KMS key, an HMAC KMS key, or on any KMS key in a different Amazon Web Services account.</p>
 *          <p>To import key material, you must use the public key and import token from the same
 *       response. These items are valid for 24 hours. The expiration date and time appear in the
 *         <code>GetParametersForImport</code> response. You cannot use an expired token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another
 *         <code>GetParametersForImport</code> request.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteImportedKeyMaterial</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetParametersForImportCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetParametersForImportCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersForImportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForImportCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class GetParametersForImportCommand extends $Command<
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
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

  constructor(readonly input: GetParametersForImportCommandInput) {
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
  ): Handler<GetParametersForImportCommandInput, GetParametersForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParametersForImportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetParametersForImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParametersForImportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetParametersForImportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParametersForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParametersForImportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParametersForImportCommandOutput> {
    return deserializeAws_json1_1GetParametersForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
