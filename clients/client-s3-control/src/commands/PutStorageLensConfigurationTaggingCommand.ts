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
  PutStorageLensConfigurationTaggingRequest,
  PutStorageLensConfigurationTaggingRequestFilterSensitiveLog,
  PutStorageLensConfigurationTaggingResult,
  PutStorageLensConfigurationTaggingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand,
  serializeAws_restXmlPutStorageLensConfigurationTaggingCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface PutStorageLensConfigurationTaggingCommandInput extends PutStorageLensConfigurationTaggingRequest {}
export interface PutStorageLensConfigurationTaggingCommandOutput
  extends PutStorageLensConfigurationTaggingResult,
    __MetadataBearer {}

/**
 * <p>Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information
 *          about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:PutStorageLensConfigurationTagging</code> action. For more information, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link PutStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class PutStorageLensConfigurationTaggingCommand extends $Command<
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
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

  constructor(readonly input: PutStorageLensConfigurationTaggingCommandInput) {
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
  ): Handler<PutStorageLensConfigurationTaggingCommandInput, PutStorageLensConfigurationTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutStorageLensConfigurationTaggingCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutStorageLensConfigurationTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutStorageLensConfigurationTaggingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutStorageLensConfigurationTaggingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutStorageLensConfigurationTaggingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlPutStorageLensConfigurationTaggingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutStorageLensConfigurationTaggingCommandOutput> {
    return deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
