import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseParametersRequest, GetRelationalDatabaseParametersResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseParametersCommand,
  serializeAws_json1_1GetRelationalDatabaseParametersCommand,
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

export type GetRelationalDatabaseParametersCommandInput = GetRelationalDatabaseParametersRequest;
export type GetRelationalDatabaseParametersCommandOutput = GetRelationalDatabaseParametersResult & __MetadataBearer;

/**
 * <p>Returns all of the runtime parameters offered by the underlying database software, or
 *       engine, for a specific database in Amazon Lightsail.</p>
 *          <p>In addition to the parameter names and values, this operation returns other information
 *       about each parameter. This information includes whether changes require a reboot, whether the
 *       parameter is modifiable, the allowed values, and the data types.</p>
 */
export class GetRelationalDatabaseParametersCommand extends $Command<
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseParametersCommandInput) {
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
  ): Handler<GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseParametersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseParametersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRelationalDatabaseParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseParametersCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
