import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteBucketAccessKeyRequest, DeleteBucketAccessKeyResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBucketAccessKeyCommand,
  serializeAws_json1_1DeleteBucketAccessKeyCommand,
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

export interface DeleteBucketAccessKeyCommandInput extends DeleteBucketAccessKeyRequest {}
export interface DeleteBucketAccessKeyCommandOutput extends DeleteBucketAccessKeyResult, __MetadataBearer {}

/**
 * <p>Deletes an access key for the specified Amazon Lightsail bucket.</p>
 *
 *          <p>We recommend that you delete an access key if the secret access key is compromised.</p>
 *
 *          <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteBucketAccessKeyCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteBucketAccessKeyCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteBucketAccessKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketAccessKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBucketAccessKeyCommand extends $Command<
  DeleteBucketAccessKeyCommandInput,
  DeleteBucketAccessKeyCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBucketAccessKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBucketAccessKeyCommandInput, DeleteBucketAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteBucketAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBucketAccessKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBucketAccessKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBucketAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBucketAccessKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketAccessKeyCommandOutput> {
    return deserializeAws_json1_1DeleteBucketAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
