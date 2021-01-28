import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { GetStatementResultRequest, GetStatementResultResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetStatementResultCommand,
  serializeAws_json1_1GetStatementResultCommand,
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

export type GetStatementResultCommandInput = GetStatementResultRequest;
export type GetStatementResultCommandOutput = GetStatementResultResponse & __MetadataBearer;

/**
 * <p>Fetches the temporarily cached result of an SQL statement.
 *        A token is returned to page through the statement results. </p>
 */
export class GetStatementResultCommand extends $Command<
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
  RedshiftDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStatementResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStatementResultCommandInput, GetStatementResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "GetStatementResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStatementResultRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStatementResultResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStatementResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetStatementResultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStatementResultCommandOutput> {
    return deserializeAws_json1_1GetStatementResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
