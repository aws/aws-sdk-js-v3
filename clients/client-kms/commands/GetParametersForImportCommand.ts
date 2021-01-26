import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetParametersForImportRequest, GetParametersForImportResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetParametersForImportCommand,
  serializeAws_json1_1GetParametersForImportCommand,
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

export type GetParametersForImportCommandInput = GetParametersForImportRequest;
export type GetParametersForImportCommandOutput = GetParametersForImportResponse & __MetadataBearer;

/**
 * <p>Returns the items you need to import key material into a symmetric, customer managed
 *       customer master key (CMK). For more information about importing key material into AWS KMS, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key
 *         Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>This operation returns a public key and an import token. Use the public key to encrypt the
 *       symmetric key material. Store the import token to send with a subsequent <a>ImportKeyMaterial</a> request.</p>
 *          <p>You must specify the key ID of the symmetric CMK into which you will import key material.
 *       This CMK's <code>Origin</code> must be <code>EXTERNAL</code>. You must also specify the
 *       wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key
 *       material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account.</p>
 *          <p>To import key material, you must use the public key and import token from the same
 *       response. These items are valid for 24 hours. The expiration date and time appear in the
 *         <code>GetParametersForImport</code> response. You cannot use an expired token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another
 *         <code>GetParametersForImport</code> request.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class GetParametersForImportCommand extends $Command<
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetParametersForImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParametersForImportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetParametersForImportResponse.filterSensitiveLog,
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
