import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { GetUpgradeStatusRequest, GetUpgradeStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetUpgradeStatusCommand,
  serializeAws_restJson1GetUpgradeStatusCommand,
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

export type GetUpgradeStatusCommandInput = GetUpgradeStatusRequest;
export type GetUpgradeStatusCommandOutput = GetUpgradeStatusResponse & __MetadataBearer;

/**
 * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
 */
export class GetUpgradeStatusCommand extends $Command<
  GetUpgradeStatusCommandInput,
  GetUpgradeStatusCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUpgradeStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "GetUpgradeStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUpgradeStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUpgradeStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUpgradeStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUpgradeStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUpgradeStatusCommandOutput> {
    return deserializeAws_restJson1GetUpgradeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
