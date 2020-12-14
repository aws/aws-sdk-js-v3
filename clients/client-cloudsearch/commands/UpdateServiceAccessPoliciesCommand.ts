import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateServiceAccessPoliciesRequest, UpdateServiceAccessPoliciesResponse } from "../models/models_0";
import {
  deserializeAws_queryUpdateServiceAccessPoliciesCommand,
  serializeAws_queryUpdateServiceAccessPoliciesCommand,
} from "../protocols/Aws_query";
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

export type UpdateServiceAccessPoliciesCommandInput = UpdateServiceAccessPoliciesRequest;
export type UpdateServiceAccessPoliciesCommandOutput = UpdateServiceAccessPoliciesResponse & __MetadataBearer;

/**
 * <p>Configures the access rules that control access to the domain's document and search endpoints.
 *       For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">
 *         Configuring Access for an Amazon CloudSearch Domain</a>.</p>
 */
export class UpdateServiceAccessPoliciesCommand extends $Command<
  UpdateServiceAccessPoliciesCommandInput,
  UpdateServiceAccessPoliciesCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceAccessPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceAccessPoliciesCommandInput, UpdateServiceAccessPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "UpdateServiceAccessPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceAccessPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceAccessPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceAccessPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateServiceAccessPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServiceAccessPoliciesCommandOutput> {
    return deserializeAws_queryUpdateServiceAccessPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
