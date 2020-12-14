import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { CreateApplicationPresignedUrlRequest, CreateApplicationPresignedUrlResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateApplicationPresignedUrlCommand,
  serializeAws_json1_1CreateApplicationPresignedUrlCommand,
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

export type CreateApplicationPresignedUrlCommandInput = CreateApplicationPresignedUrlRequest;
export type CreateApplicationPresignedUrlCommandOutput = CreateApplicationPresignedUrlResponse & __MetadataBearer;

/**
 * <p>Creates and returns a URL that you can use to connect to
 *             an application's extension. Currently, the only
 *             available extension is the Apache Flink dashboard.</p>
 *         <p>The IAM role or user used to call this API defines the permissions to access the extension.
 *             Once the presigned URL is created, no additional permission is required to access this URL. IAM
 *             authorization policies for this API are also enforced for every HTTP request that attempts to
 *             connect to the extension.
 *         </p>
 *         <note>
 *             <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes
 *             to be valid.
 *             If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p>
 *          </note>
 */
export class CreateApplicationPresignedUrlCommand extends $Command<
  CreateApplicationPresignedUrlCommandInput,
  CreateApplicationPresignedUrlCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApplicationPresignedUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApplicationPresignedUrlCommandInput, CreateApplicationPresignedUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "CreateApplicationPresignedUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApplicationPresignedUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApplicationPresignedUrlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApplicationPresignedUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateApplicationPresignedUrlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateApplicationPresignedUrlCommandOutput> {
    return deserializeAws_json1_1CreateApplicationPresignedUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
