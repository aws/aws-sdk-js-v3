import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { SelectAggregateResourceConfigRequest, SelectAggregateResourceConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SelectAggregateResourceConfigCommand,
  serializeAws_json1_1SelectAggregateResourceConfigCommand,
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

export type SelectAggregateResourceConfigCommandInput = SelectAggregateResourceConfigRequest;
export type SelectAggregateResourceConfigCommandOutput = SelectAggregateResourceConfigResponse & __MetadataBearer;

/**
 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions,
 * 			performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the AWS Config Developer Guide.</p>
 */
export class SelectAggregateResourceConfigCommand extends $Command<
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SelectAggregateResourceConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SelectAggregateResourceConfigCommandInput, SelectAggregateResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "SelectAggregateResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SelectAggregateResourceConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SelectAggregateResourceConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SelectAggregateResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SelectAggregateResourceConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SelectAggregateResourceConfigCommandOutput> {
    return deserializeAws_json1_1SelectAggregateResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
