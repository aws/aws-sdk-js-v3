import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateTagOptionWithResourceInput, AssociateTagOptionWithResourceOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateTagOptionWithResourceCommand,
  serializeAws_json1_1AssociateTagOptionWithResourceCommand,
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

export type AssociateTagOptionWithResourceCommandInput = AssociateTagOptionWithResourceInput;
export type AssociateTagOptionWithResourceCommandOutput = AssociateTagOptionWithResourceOutput & __MetadataBearer;

/**
 * <p>Associate the specified TagOption with the specified portfolio or product.</p>
 */
export class AssociateTagOptionWithResourceCommand extends $Command<
  AssociateTagOptionWithResourceCommandInput,
  AssociateTagOptionWithResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateTagOptionWithResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "AssociateTagOptionWithResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTagOptionWithResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateTagOptionWithResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateTagOptionWithResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateTagOptionWithResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTagOptionWithResourceCommandOutput> {
    return deserializeAws_json1_1AssociateTagOptionWithResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
