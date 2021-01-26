import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetInventorySchemaCommand,
  serializeAws_json1_1GetInventorySchemaCommand,
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

export type GetInventorySchemaCommandInput = GetInventorySchemaRequest;
export type GetInventorySchemaCommandOutput = GetInventorySchemaResult & __MetadataBearer;

/**
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 */
export class GetInventorySchemaCommand extends $Command<
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInventorySchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetInventorySchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInventorySchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInventorySchemaResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInventorySchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInventorySchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInventorySchemaCommandOutput> {
    return deserializeAws_json1_1GetInventorySchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
