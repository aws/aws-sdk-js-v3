import {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ServiceCatalogClient";
import {
  DisassociatePrincipalFromPortfolioInput,
  DisassociatePrincipalFromPortfolioOutput
} from "../models/index";
import {
  deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand,
  serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type DisassociatePrincipalFromPortfolioCommandInput = DisassociatePrincipalFromPortfolioInput;
export type DisassociatePrincipalFromPortfolioCommandOutput = DisassociatePrincipalFromPortfolioOutput &
  __MetadataBearer;

export class DisassociatePrincipalFromPortfolioCommand extends $Command<
  DisassociatePrincipalFromPortfolioCommandInput,
  DisassociatePrincipalFromPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociatePrincipalFromPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociatePrincipalFromPortfolioCommandInput,
    DisassociatePrincipalFromPortfolioCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociatePrincipalFromPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePrincipalFromPortfolioCommandOutput> {
    return deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
