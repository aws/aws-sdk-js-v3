// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetDomainDeliverabilityCampaignRequest, GetDomainDeliverabilityCampaignResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_GetDomainDeliverabilityCampaignCommand,
  se_GetDomainDeliverabilityCampaignCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDomainDeliverabilityCampaignCommand}.
 */
export interface GetDomainDeliverabilityCampaignCommandInput extends GetDomainDeliverabilityCampaignRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainDeliverabilityCampaignCommand}.
 */
export interface GetDomainDeliverabilityCampaignCommandOutput
  extends GetDomainDeliverabilityCampaignResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDomainDeliverabilityCampaignCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDomainDeliverabilityCampaignCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDomainDeliverabilityCampaignRequest
 *   CampaignId: "STRING_VALUE", // required
 * };
 * const command = new GetDomainDeliverabilityCampaignCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainDeliverabilityCampaignResponse
 * //   DomainDeliverabilityCampaign: { // DomainDeliverabilityCampaign
 * //     CampaignId: "STRING_VALUE",
 * //     ImageUrl: "STRING_VALUE",
 * //     Subject: "STRING_VALUE",
 * //     FromAddress: "STRING_VALUE",
 * //     SendingIps: [ // IpList
 * //       "STRING_VALUE",
 * //     ],
 * //     FirstSeenDateTime: new Date("TIMESTAMP"),
 * //     LastSeenDateTime: new Date("TIMESTAMP"),
 * //     InboxCount: Number("long"),
 * //     SpamCount: Number("long"),
 * //     ReadRate: Number("double"),
 * //     DeleteRate: Number("double"),
 * //     ReadDeleteRate: Number("double"),
 * //     ProjectedVolume: Number("long"),
 * //     Esps: [ // Esps
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainDeliverabilityCampaignCommandInput - {@link GetDomainDeliverabilityCampaignCommandInput}
 * @returns {@link GetDomainDeliverabilityCampaignCommandOutput}
 * @see {@link GetDomainDeliverabilityCampaignCommandInput} for command's `input` shape.
 * @see {@link GetDomainDeliverabilityCampaignCommandOutput} for command's `response` shape.
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
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class GetDomainDeliverabilityCampaignCommand extends $Command<
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
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
  constructor(readonly input: GetDomainDeliverabilityCampaignCommandInput) {
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
  ): Handler<GetDomainDeliverabilityCampaignCommandInput, GetDomainDeliverabilityCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainDeliverabilityCampaignCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDomainDeliverabilityCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetDomainDeliverabilityCampaign",
      },
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
    input: GetDomainDeliverabilityCampaignCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetDomainDeliverabilityCampaignCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput> {
    return de_GetDomainDeliverabilityCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
