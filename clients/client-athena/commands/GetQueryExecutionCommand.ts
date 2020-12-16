import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetQueryExecutionInput, GetQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetQueryExecutionCommand,
  serializeAws_json1_1GetQueryExecutionCommand,
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

export type GetQueryExecutionCommandInput = GetQueryExecutionInput;
export type GetQueryExecutionCommandOutput = GetQueryExecutionOutput & __MetadataBearer;

/**
 * <p>Returns information about a single execution of a query if you have access to the
 *             workgroup in which the query ran. Each time a query executes, information about the
 *             query execution is saved with a unique ID.</p>
 */
export class GetQueryExecutionCommand extends $Command<
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetQueryExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetQueryExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetQueryExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQueryExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryExecutionCommandOutput> {
    return deserializeAws_json1_1GetQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
