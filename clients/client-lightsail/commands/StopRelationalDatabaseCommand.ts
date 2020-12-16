import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StopRelationalDatabaseRequest, StopRelationalDatabaseResult } from "../models/models_1";
import {
  deserializeAws_json1_1StopRelationalDatabaseCommand,
  serializeAws_json1_1StopRelationalDatabaseCommand,
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

export type StopRelationalDatabaseCommandInput = StopRelationalDatabaseRequest;
export type StopRelationalDatabaseCommandOutput = StopRelationalDatabaseResult & __MetadataBearer;

/**
 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p>
 *          <p>The <code>stop relational database</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class StopRelationalDatabaseCommand extends $Command<
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopRelationalDatabaseCommandInput) {
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
  ): Handler<StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "StopRelationalDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopRelationalDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopRelationalDatabaseResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopRelationalDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopRelationalDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRelationalDatabaseCommandOutput> {
    return deserializeAws_json1_1StopRelationalDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
