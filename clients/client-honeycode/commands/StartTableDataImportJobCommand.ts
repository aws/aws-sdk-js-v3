import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { StartTableDataImportJobRequest, StartTableDataImportJobResult } from "../models/models_0";
import {
  deserializeAws_restJson1StartTableDataImportJobCommand,
  serializeAws_restJson1StartTableDataImportJobCommand,
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

export type StartTableDataImportJobCommandInput = StartTableDataImportJobRequest;
export type StartTableDataImportJobCommandOutput = StartTableDataImportJobResult & __MetadataBearer;

/**
 * <p>
 *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
 *             the id of the job that was started. To find out the status of the import request, you need to call the
 *             DescribeTableDataImportJob API.
 *         </p>
 */
export class StartTableDataImportJobCommand extends $Command<
  StartTableDataImportJobCommandInput,
  StartTableDataImportJobCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTableDataImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTableDataImportJobCommandInput, StartTableDataImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "StartTableDataImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTableDataImportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTableDataImportJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTableDataImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartTableDataImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTableDataImportJobCommandOutput> {
    return deserializeAws_restJson1StartTableDataImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
