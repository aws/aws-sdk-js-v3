import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListSecurityConfigurationsInput, ListSecurityConfigurationsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListSecurityConfigurationsCommand,
  serializeAws_json1_1ListSecurityConfigurationsCommand,
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

export type ListSecurityConfigurationsCommandInput = ListSecurityConfigurationsInput;
export type ListSecurityConfigurationsCommandOutput = ListSecurityConfigurationsOutput & __MetadataBearer;

/**
 * <p>Lists all the security configurations visible to this account, providing their creation
 *          dates and times, and their names. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple
 *          ListSecurityConfigurations calls.</p>
 */
export class ListSecurityConfigurationsCommand extends $Command<
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecurityConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListSecurityConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityConfigurationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityConfigurationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecurityConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecurityConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityConfigurationsCommandOutput> {
    return deserializeAws_json1_1ListSecurityConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
