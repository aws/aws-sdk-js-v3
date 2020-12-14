import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutProtocolsListRequest, PutProtocolsListResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutProtocolsListCommand,
  serializeAws_json1_1PutProtocolsListCommand,
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

export type PutProtocolsListCommandInput = PutProtocolsListRequest;
export type PutProtocolsListCommandOutput = PutProtocolsListResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Firewall Manager protocols list.</p>
 */
export class PutProtocolsListCommand extends $Command<
  PutProtocolsListCommandInput,
  PutProtocolsListCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutProtocolsListCommandInput) {
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
  ): Handler<PutProtocolsListCommandInput, PutProtocolsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutProtocolsListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutProtocolsListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutProtocolsListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutProtocolsListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutProtocolsListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProtocolsListCommandOutput> {
    return deserializeAws_json1_1PutProtocolsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
