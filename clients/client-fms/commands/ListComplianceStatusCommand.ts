import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListComplianceStatusRequest, ListComplianceStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListComplianceStatusCommand,
  serializeAws_json1_1ListComplianceStatusCommand,
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

export type ListComplianceStatusCommandInput = ListComplianceStatusRequest;
export type ListComplianceStatusCommandOutput = ListComplianceStatusResponse & __MetadataBearer;

/**
 * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
 *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
 *       by the specified policy. </p>
 */
export class ListComplianceStatusCommand extends $Command<
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListComplianceStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListComplianceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComplianceStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListComplianceStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComplianceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListComplianceStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComplianceStatusCommandOutput> {
    return deserializeAws_json1_1ListComplianceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
