import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { BulkPublishRequest, BulkPublishResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BulkPublishCommand,
  serializeAws_restJson1BulkPublishCommand,
} from "../protocols/Aws_restJson1";
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

export type BulkPublishCommandInput = BulkPublishRequest;
export type BulkPublishCommandOutput = BulkPublishResponse & __MetadataBearer;

/**
 * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p>
 *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 */
export class BulkPublishCommand extends $Command<
  BulkPublishCommandInput,
  BulkPublishCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BulkPublishCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BulkPublishCommandInput, BulkPublishCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "BulkPublishCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BulkPublishRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BulkPublishResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BulkPublishCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BulkPublishCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BulkPublishCommandOutput> {
    return deserializeAws_restJson1BulkPublishCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
