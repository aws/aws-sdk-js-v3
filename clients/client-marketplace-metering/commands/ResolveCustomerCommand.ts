import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0";
import {
  deserializeAws_json1_1ResolveCustomerCommand,
  serializeAws_json1_1ResolveCustomerCommand,
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

export type ResolveCustomerCommandInput = ResolveCustomerRequest;
export type ResolveCustomerCommandOutput = ResolveCustomerResult & __MetadataBearer;

/**
 * <p>ResolveCustomer is called by a SaaS application during the registration process.
 *             When a buyer visits your website during the registration process, the buyer submits a
 *             registration token through their browser. The registration token is resolved through
 *             this API to obtain a CustomerIdentifier and product code.</p>
 */
export class ResolveCustomerCommand extends $Command<
  ResolveCustomerCommandInput,
  ResolveCustomerCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResolveCustomerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveCustomerCommandInput, ResolveCustomerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "ResolveCustomerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResolveCustomerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveCustomerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveCustomerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResolveCustomerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveCustomerCommandOutput> {
    return deserializeAws_json1_1ResolveCustomerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
