import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListEffectiveDeploymentsRequest, ListEffectiveDeploymentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListEffectiveDeploymentsCommand,
  serializeAws_restJson1ListEffectiveDeploymentsCommand,
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

export type ListEffectiveDeploymentsCommandInput = ListEffectiveDeploymentsRequest;
export type ListEffectiveDeploymentsCommandOutput = ListEffectiveDeploymentsResponse & __MetadataBearer;

/**
 * <p>Retrieves a paginated list of deployment jobs that AWS IoT Greengrass sends to AWS IoT Greengrass core
 *       devices.</p>
 */
export class ListEffectiveDeploymentsCommand extends $Command<
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEffectiveDeploymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEffectiveDeploymentsCommandInput, ListEffectiveDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListEffectiveDeploymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEffectiveDeploymentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEffectiveDeploymentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEffectiveDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEffectiveDeploymentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEffectiveDeploymentsCommandOutput> {
    return deserializeAws_restJson1ListEffectiveDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
