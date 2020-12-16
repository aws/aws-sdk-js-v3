import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetNamedQueryInput, GetNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetNamedQueryCommand,
  serializeAws_json1_1GetNamedQueryCommand,
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

export type GetNamedQueryCommandInput = GetNamedQueryInput;
export type GetNamedQueryCommandOutput = GetNamedQueryOutput & __MetadataBearer;

/**
 * <p>Returns information about a single query. Requires that you have access to the
 *             workgroup in which the query was saved.</p>
 */
export class GetNamedQueryCommand extends $Command<
  GetNamedQueryCommandInput,
  GetNamedQueryCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetNamedQueryCommandInput) {
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
  ): Handler<GetNamedQueryCommandInput, GetNamedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetNamedQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetNamedQueryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNamedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNamedQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNamedQueryCommandOutput> {
    return deserializeAws_json1_1GetNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
