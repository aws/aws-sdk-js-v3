import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { DissociatePackageRequest, DissociatePackageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DissociatePackageCommand,
  serializeAws_restJson1DissociatePackageCommand,
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

export type DissociatePackageCommandInput = DissociatePackageRequest;
export type DissociatePackageCommandOutput = DissociatePackageResponse & __MetadataBearer;

/**
 * <p>Dissociates a package from the Amazon ES domain.</p>
 */
export class DissociatePackageCommand extends $Command<
  DissociatePackageCommandInput,
  DissociatePackageCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DissociatePackageCommandInput) {
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
  ): Handler<DissociatePackageCommandInput, DissociatePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DissociatePackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DissociatePackageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DissociatePackageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DissociatePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DissociatePackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DissociatePackageCommandOutput> {
    return deserializeAws_restJson1DissociatePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
