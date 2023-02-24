// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ListDomainDeliverabilityCampaignsRequest,
  ListDomainDeliverabilityCampaignsRequestFilterSensitiveLog,
  ListDomainDeliverabilityCampaignsResponse,
  ListDomainDeliverabilityCampaignsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand,
  serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface ListDomainDeliverabilityCampaignsCommandInput extends ListDomainDeliverabilityCampaignsRequest {}
export interface ListDomainDeliverabilityCampaignsCommandOutput
  extends ListDomainDeliverabilityCampaignsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard for the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDomainDeliverabilityCampaignsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDomainDeliverabilityCampaignsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListDomainDeliverabilityCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainDeliverabilityCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListDomainDeliverabilityCampaignsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class ListDomainDeliverabilityCampaignsCommand extends $Command<
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListDomainDeliverabilityCampaignsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDomainDeliverabilityCampaignsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListDomainDeliverabilityCampaignsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainDeliverabilityCampaignsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDomainDeliverabilityCampaignsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDomainDeliverabilityCampaignsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput> {
    return deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
