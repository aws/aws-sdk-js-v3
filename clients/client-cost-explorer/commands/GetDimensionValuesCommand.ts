import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetDimensionValuesRequest, GetDimensionValuesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDimensionValuesCommand,
  serializeAws_json1_1GetDimensionValuesCommand,
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

export type GetDimensionValuesCommandInput = GetDimensionValuesRequest;
export type GetDimensionValuesCommandOutput = GetDimensionValuesResponse & __MetadataBearer;

/**
 * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
 */
export class GetDimensionValuesCommand extends $Command<
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDimensionValuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetDimensionValuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDimensionValuesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDimensionValuesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDimensionValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDimensionValuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDimensionValuesCommandOutput> {
    return deserializeAws_json1_1GetDimensionValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
