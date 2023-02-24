// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import {
  DeleteStorageLensConfigurationRequest,
  DeleteStorageLensConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteStorageLensConfigurationCommand,
  serializeAws_restXmlDeleteStorageLensConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface DeleteStorageLensConfigurationCommandInput extends DeleteStorageLensConfigurationRequest {}
export interface DeleteStorageLensConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:DeleteStorageLensConfiguration</code> action. For more information, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteStorageLensConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStorageLensConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class DeleteStorageLensConfigurationCommand extends $Command<
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteStorageLensConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStorageLensConfigurationCommandInput, DeleteStorageLensConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStorageLensConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DeleteStorageLensConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStorageLensConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteStorageLensConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteStorageLensConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStorageLensConfigurationCommandOutput> {
    return deserializeAws_restXmlDeleteStorageLensConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
