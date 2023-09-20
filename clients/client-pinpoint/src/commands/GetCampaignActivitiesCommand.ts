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

import { GetCampaignActivitiesRequest, GetCampaignActivitiesResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetCampaignActivitiesCommand, se_GetCampaignActivitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignActivitiesCommand}.
 */
export interface GetCampaignActivitiesCommandInput extends GetCampaignActivitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignActivitiesCommand}.
 */
export interface GetCampaignActivitiesCommandOutput extends GetCampaignActivitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about all the activities for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignActivitiesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignActivitiesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetCampaignActivitiesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   CampaignId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetCampaignActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignActivitiesResponse
 * //   ActivitiesResponse: { // ActivitiesResponse
 * //     Item: [ // ListOfActivityResponse // required
 * //       { // ActivityResponse
 * //         ApplicationId: "STRING_VALUE", // required
 * //         CampaignId: "STRING_VALUE", // required
 * //         End: "STRING_VALUE",
 * //         Id: "STRING_VALUE", // required
 * //         Result: "STRING_VALUE",
 * //         ScheduledStart: "STRING_VALUE",
 * //         Start: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         SuccessfulEndpointCount: Number("int"),
 * //         TimezonesCompletedCount: Number("int"),
 * //         TimezonesTotalCount: Number("int"),
 * //         TotalEndpointCount: Number("int"),
 * //         TreatmentId: "STRING_VALUE",
 * //         ExecutionMetrics: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCampaignActivitiesCommandInput - {@link GetCampaignActivitiesCommandInput}
 * @returns {@link GetCampaignActivitiesCommandOutput}
 * @see {@link GetCampaignActivitiesCommandInput} for command's `input` shape.
 * @see {@link GetCampaignActivitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class GetCampaignActivitiesCommand extends $Command<
  GetCampaignActivitiesCommandInput,
  GetCampaignActivitiesCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: GetCampaignActivitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCampaignActivitiesCommandInput, GetCampaignActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCampaignActivitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetCampaignActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "GetCampaignActivities",
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
  private serialize(input: GetCampaignActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCampaignActivitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignActivitiesCommandOutput> {
    return de_GetCampaignActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
