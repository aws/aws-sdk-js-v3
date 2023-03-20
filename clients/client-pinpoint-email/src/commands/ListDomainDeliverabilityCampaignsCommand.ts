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
  ListDomainDeliverabilityCampaignsResponse,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand,
  serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListDomainDeliverabilityCampaignsCommand}.
 */
export interface ListDomainDeliverabilityCampaignsCommandInput extends ListDomainDeliverabilityCampaignsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainDeliverabilityCampaignsCommand}.
 */
export interface ListDomainDeliverabilityCampaignsCommandOutput
  extends ListDomainDeliverabilityCampaignsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation)
 *             for the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListDomainDeliverabilityCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListDomainDeliverabilityCampaignsCommandInput - {@link ListDomainDeliverabilityCampaignsCommandInput}
 * @returns {@link ListDomainDeliverabilityCampaignsCommandOutput}
 * @see {@link ListDomainDeliverabilityCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListDomainDeliverabilityCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 *
 */
export class ListDomainDeliverabilityCampaignsCommand extends $Command<
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
  PinpointEmailClientResolvedConfig
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

  /**
   * @public
   */
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
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDomainDeliverabilityCampaignsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "ListDomainDeliverabilityCampaignsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ListDomainDeliverabilityCampaignsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput> {
    return deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
