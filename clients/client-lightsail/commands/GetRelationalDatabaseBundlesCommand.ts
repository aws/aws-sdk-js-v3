import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBundlesRequest, GetRelationalDatabaseBundlesResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseBundlesCommand,
  serializeAws_json1_1GetRelationalDatabaseBundlesCommand,
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

export type GetRelationalDatabaseBundlesCommandInput = GetRelationalDatabaseBundlesRequest;
export type GetRelationalDatabaseBundlesCommandOutput = GetRelationalDatabaseBundlesResult & __MetadataBearer;

/**
 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the
 *       performance specifications for a database.</p>
 *          <p>You can use a bundle ID to create a new database with explicit performance
 *       specifications.</p>
 */
export class GetRelationalDatabaseBundlesCommand extends $Command<
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseBundlesCommandInput) {
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
  ): Handler<GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseBundlesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseBundlesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRelationalDatabaseBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseBundlesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseBundlesCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
