import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateBudgetFromResourceInput, DisassociateBudgetFromResourceOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateBudgetFromResourceCommand,
  serializeAws_json1_1DisassociateBudgetFromResourceCommand,
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

export type DisassociateBudgetFromResourceCommandInput = DisassociateBudgetFromResourceInput;
export type DisassociateBudgetFromResourceCommandOutput = DisassociateBudgetFromResourceOutput & __MetadataBearer;

/**
 * <p>Disassociates the specified budget from the specified resource.</p>
 */
export class DisassociateBudgetFromResourceCommand extends $Command<
  DisassociateBudgetFromResourceCommandInput,
  DisassociateBudgetFromResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateBudgetFromResourceCommandInput) {
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
  ): Handler<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociateBudgetFromResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateBudgetFromResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateBudgetFromResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateBudgetFromResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateBudgetFromResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateBudgetFromResourceCommandOutput> {
    return deserializeAws_json1_1DisassociateBudgetFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
