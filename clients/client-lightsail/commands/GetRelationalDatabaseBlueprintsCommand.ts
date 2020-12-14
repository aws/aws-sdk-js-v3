import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBlueprintsRequest, GetRelationalDatabaseBlueprintsResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand,
  serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand,
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

export type GetRelationalDatabaseBlueprintsCommandInput = GetRelationalDatabaseBlueprintsRequest;
export type GetRelationalDatabaseBlueprintsCommandOutput = GetRelationalDatabaseBlueprintsResult & __MetadataBearer;

/**
 * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes
 *       the major engine version of a database.</p>
 *          <p>You can use a blueprint ID to create a new database that runs a specific database
 *       engine.</p>
 */
export class GetRelationalDatabaseBlueprintsCommand extends $Command<
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseBlueprintsCommandInput) {
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
  ): Handler<GetRelationalDatabaseBlueprintsCommandInput, GetRelationalDatabaseBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseBlueprintsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseBlueprintsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseBlueprintsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRelationalDatabaseBlueprintsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseBlueprintsCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
