import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateKeyDescriptionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateKeyDescriptionCommand,
  serializeAws_json1_1UpdateKeyDescriptionCommand,
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

export interface UpdateKeyDescriptionCommandInput extends UpdateKeyDescriptionRequest {}
export interface UpdateKeyDescriptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the description of a KMS key. To see the description of a KMS key,
 *       use <a>DescribeKey</a>. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No.  You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateKeyDescription</a> (key policy)</p>
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
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateKeyDescriptionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateKeyDescriptionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateKeyDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateKeyDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyDescriptionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateKeyDescriptionCommand extends $Command<
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateKeyDescriptionCommandInput) {
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
  ): Handler<UpdateKeyDescriptionCommandInput, UpdateKeyDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateKeyDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateKeyDescriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateKeyDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateKeyDescriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeyDescriptionCommandOutput> {
    return deserializeAws_json1_1UpdateKeyDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
