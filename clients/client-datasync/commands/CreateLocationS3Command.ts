import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationS3Request, CreateLocationS3Response } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationS3Command,
  serializeAws_json1_1CreateLocationS3Command,
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

export interface CreateLocationS3CommandInput extends CreateLocationS3Request {}
export interface CreateLocationS3CommandOutput extends CreateLocationS3Response, __MetadataBearer {}

/**
 * <p>Creates an endpoint for an Amazon S3 bucket.</p>
 *
 *
 *          <p>For
 *       more information, see
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Create an Amazon S3 location</a>
 *       in the <i>DataSync User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationS3CommandInput} for command's `input` shape.
 * @see {@link CreateLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLocationS3Command extends $Command<
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationS3CommandInput, CreateLocationS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationS3Request.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationS3Response.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationS3CommandOutput> {
    return deserializeAws_json1_1CreateLocationS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
