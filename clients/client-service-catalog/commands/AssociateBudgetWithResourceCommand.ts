import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateBudgetWithResourceInput, AssociateBudgetWithResourceOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateBudgetWithResourceCommand,
  serializeAws_json1_1AssociateBudgetWithResourceCommand,
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

export type AssociateBudgetWithResourceCommandInput = AssociateBudgetWithResourceInput;
export type AssociateBudgetWithResourceCommandOutput = AssociateBudgetWithResourceOutput & __MetadataBearer;

/**
 * <p>Associates the specified budget with the specified resource.</p>
 */
export class AssociateBudgetWithResourceCommand extends $Command<
  AssociateBudgetWithResourceCommandInput,
  AssociateBudgetWithResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateBudgetWithResourceCommandInput) {
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
  ): Handler<AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "AssociateBudgetWithResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateBudgetWithResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateBudgetWithResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateBudgetWithResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateBudgetWithResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateBudgetWithResourceCommandOutput> {
    return deserializeAws_json1_1AssociateBudgetWithResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
