import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAccessPoliciesRequest, ListAccessPoliciesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAccessPoliciesCommand,
  serializeAws_restJson1ListAccessPoliciesCommand,
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

export type ListAccessPoliciesCommandInput = ListAccessPoliciesRequest;
export type ListAccessPoliciesCommandOutput = ListAccessPoliciesResponse & __MetadataBearer;

/**
 * <p>Retrieves a paginated list of access policies for an identity (an AWS SSO user, an AWS SSO
 *       group, or an IAM user) or an AWS IoT SiteWise Monitor resource (a portal or project).</p>
 */
export class ListAccessPoliciesCommand extends $Command<
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccessPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListAccessPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccessPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessPoliciesCommandOutput> {
    return deserializeAws_restJson1ListAccessPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
