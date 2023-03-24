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

import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1CreateCampaignCommand,
  serializeAws_restJson1CreateCampaignCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new campaign for an application or updates the settings of an existing campaign for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = {
 *   ApplicationId: "STRING_VALUE", // required
 *   WriteCampaignRequest: {
 *     AdditionalTreatments: [
 *       {
 *         CustomDeliveryConfiguration: {
 *           DeliveryUri: "STRING_VALUE", // required
 *           EndpointTypes: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         MessageConfiguration: {
 *           ADMMessage: {
 *             Action: "STRING_VALUE",
 *             Body: "STRING_VALUE",
 *             ImageIconUrl: "STRING_VALUE",
 *             ImageSmallIconUrl: "STRING_VALUE",
 *             ImageUrl: "STRING_VALUE",
 *             JsonBody: "STRING_VALUE",
 *             MediaUrl: "STRING_VALUE",
 *             RawContent: "STRING_VALUE",
 *             SilentPush: true || false,
 *             TimeToLive: Number("int"),
 *             Title: "STRING_VALUE",
 *             Url: "STRING_VALUE",
 *           },
 *           APNSMessage: {
 *             Action: "STRING_VALUE",
 *             Body: "STRING_VALUE",
 *             ImageIconUrl: "STRING_VALUE",
 *             ImageSmallIconUrl: "STRING_VALUE",
 *             ImageUrl: "STRING_VALUE",
 *             JsonBody: "STRING_VALUE",
 *             MediaUrl: "STRING_VALUE",
 *             RawContent: "STRING_VALUE",
 *             SilentPush: true || false,
 *             TimeToLive: Number("int"),
 *             Title: "STRING_VALUE",
 *             Url: "STRING_VALUE",
 *           },
 *           BaiduMessage: {
 *             Action: "STRING_VALUE",
 *             Body: "STRING_VALUE",
 *             ImageIconUrl: "STRING_VALUE",
 *             ImageSmallIconUrl: "STRING_VALUE",
 *             ImageUrl: "STRING_VALUE",
 *             JsonBody: "STRING_VALUE",
 *             MediaUrl: "STRING_VALUE",
 *             RawContent: "STRING_VALUE",
 *             SilentPush: true || false,
 *             TimeToLive: Number("int"),
 *             Title: "STRING_VALUE",
 *             Url: "STRING_VALUE",
 *           },
 *           CustomMessage: {
 *             Data: "STRING_VALUE",
 *           },
 *           DefaultMessage: {
 *             Action: "STRING_VALUE",
 *             Body: "STRING_VALUE",
 *             ImageIconUrl: "STRING_VALUE",
 *             ImageSmallIconUrl: "STRING_VALUE",
 *             ImageUrl: "STRING_VALUE",
 *             JsonBody: "STRING_VALUE",
 *             MediaUrl: "STRING_VALUE",
 *             RawContent: "STRING_VALUE",
 *             SilentPush: true || false,
 *             TimeToLive: Number("int"),
 *             Title: "STRING_VALUE",
 *             Url: "STRING_VALUE",
 *           },
 *           EmailMessage: {
 *             Body: "STRING_VALUE",
 *             FromAddress: "STRING_VALUE",
 *             HtmlBody: "STRING_VALUE",
 *             Title: "STRING_VALUE",
 *           },
 *           GCMMessage: {
 *             Action: "STRING_VALUE",
 *             Body: "STRING_VALUE",
 *             ImageIconUrl: "STRING_VALUE",
 *             ImageSmallIconUrl: "STRING_VALUE",
 *             ImageUrl: "STRING_VALUE",
 *             JsonBody: "STRING_VALUE",
 *             MediaUrl: "STRING_VALUE",
 *             RawContent: "STRING_VALUE",
 *             SilentPush: true || false,
 *             TimeToLive: Number("int"),
 *             Title: "STRING_VALUE",
 *             Url: "STRING_VALUE",
 *           },
 *           SMSMessage: {
 *             Body: "STRING_VALUE",
 *             MessageType: "STRING_VALUE",
 *             OriginationNumber: "STRING_VALUE",
 *             SenderId: "STRING_VALUE",
 *             EntityId: "STRING_VALUE",
 *             TemplateId: "STRING_VALUE",
 *           },
 *           InAppMessage: {
 *             Body: "STRING_VALUE",
 *             Content: [
 *               {
 *                 BackgroundColor: "STRING_VALUE",
 *                 BodyConfig: {
 *                   Alignment: "STRING_VALUE", // required
 *                   Body: "STRING_VALUE", // required
 *                   TextColor: "STRING_VALUE", // required
 *                 },
 *                 HeaderConfig: {
 *                   Alignment: "STRING_VALUE", // required
 *                   Header: "STRING_VALUE", // required
 *                   TextColor: "STRING_VALUE", // required
 *                 },
 *                 ImageUrl: "STRING_VALUE",
 *                 PrimaryBtn: {
 *                   Android: {
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                   },
 *                   DefaultConfig: {
 *                     BackgroundColor: "STRING_VALUE",
 *                     BorderRadius: Number("int"),
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                     Text: "STRING_VALUE", // required
 *                     TextColor: "STRING_VALUE",
 *                   },
 *                   IOS: {
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                   },
 *                   Web: {
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                   },
 *                 },
 *                 SecondaryBtn: {
 *                   Android: {
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                   },
 *                   DefaultConfig: {
 *                     BackgroundColor: "STRING_VALUE",
 *                     BorderRadius: Number("int"),
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                     Text: "STRING_VALUE", // required
 *                     TextColor: "STRING_VALUE",
 *                   },
 *                   IOS: {
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                   },
 *                   Web: {
 *                     ButtonAction: "STRING_VALUE", // required
 *                     Link: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *             ],
 *             CustomConfig: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             Layout: "STRING_VALUE",
 *           },
 *         },
 *         Schedule: {
 *           EndTime: "STRING_VALUE",
 *           EventFilter: {
 *             Dimensions: {
 *               Attributes: {
 *                 "<keys>": {
 *                   AttributeType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *               EventType: {
 *                 DimensionType: "STRING_VALUE",
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               Metrics: {
 *                 "<keys>": {
 *                   ComparisonOperator: "STRING_VALUE", // required
 *                   Value: Number("double"), // required
 *                 },
 *               },
 *             },
 *             FilterType: "STRING_VALUE", // required
 *           },
 *           Frequency: "STRING_VALUE",
 *           IsLocalTime: true || false,
 *           QuietTime: {
 *             End: "STRING_VALUE",
 *             Start: "STRING_VALUE",
 *           },
 *           StartTime: "STRING_VALUE", // required
 *           Timezone: "STRING_VALUE",
 *         },
 *         SizePercent: Number("int"), // required
 *         TemplateConfiguration: {
 *           EmailTemplate: {
 *             Name: "STRING_VALUE",
 *             Version: "STRING_VALUE",
 *           },
 *           PushTemplate: {
 *             Name: "STRING_VALUE",
 *             Version: "STRING_VALUE",
 *           },
 *           SMSTemplate: {
 *             Name: "STRING_VALUE",
 *             Version: "STRING_VALUE",
 *           },
 *           VoiceTemplate: {
 *             Name: "STRING_VALUE",
 *             Version: "STRING_VALUE",
 *           },
 *         },
 *         TreatmentDescription: "STRING_VALUE",
 *         TreatmentName: "STRING_VALUE",
 *       },
 *     ],
 *     CustomDeliveryConfiguration: {
 *       DeliveryUri: "STRING_VALUE", // required
 *       EndpointTypes: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Description: "STRING_VALUE",
 *     HoldoutPercent: Number("int"),
 *     Hook: {
 *       LambdaFunctionName: "STRING_VALUE",
 *       Mode: "STRING_VALUE",
 *       WebUrl: "STRING_VALUE",
 *     },
 *     IsPaused: true || false,
 *     Limits: {
 *       Daily: Number("int"),
 *       MaximumDuration: Number("int"),
 *       MessagesPerSecond: Number("int"),
 *       Total: Number("int"),
 *       Session: Number("int"),
 *     },
 *     MessageConfiguration: {
 *       ADMMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageSmallIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         JsonBody: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       APNSMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageSmallIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         JsonBody: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       BaiduMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageSmallIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         JsonBody: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       CustomMessage: {
 *         Data: "STRING_VALUE",
 *       },
 *       DefaultMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageSmallIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         JsonBody: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       EmailMessage: {
 *         Body: "STRING_VALUE",
 *         FromAddress: "STRING_VALUE",
 *         HtmlBody: "STRING_VALUE",
 *         Title: "STRING_VALUE",
 *       },
 *       GCMMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageSmallIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         JsonBody: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       SMSMessage: {
 *         Body: "STRING_VALUE",
 *         MessageType: "STRING_VALUE",
 *         OriginationNumber: "STRING_VALUE",
 *         SenderId: "STRING_VALUE",
 *         EntityId: "STRING_VALUE",
 *         TemplateId: "STRING_VALUE",
 *       },
 *       InAppMessage: {
 *         Body: "STRING_VALUE",
 *         Content: [
 *           {
 *             BackgroundColor: "STRING_VALUE",
 *             BodyConfig: {
 *               Alignment: "STRING_VALUE", // required
 *               Body: "STRING_VALUE", // required
 *               TextColor: "STRING_VALUE", // required
 *             },
 *             HeaderConfig: {
 *               Alignment: "STRING_VALUE", // required
 *               Header: "STRING_VALUE", // required
 *               TextColor: "STRING_VALUE", // required
 *             },
 *             ImageUrl: "STRING_VALUE",
 *             PrimaryBtn: {
 *               Android: {
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *               },
 *               DefaultConfig: {
 *                 BackgroundColor: "STRING_VALUE",
 *                 BorderRadius: Number("int"),
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *                 Text: "STRING_VALUE", // required
 *                 TextColor: "STRING_VALUE",
 *               },
 *               IOS: {
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *               },
 *               Web: {
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *               },
 *             },
 *             SecondaryBtn: {
 *               Android: {
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *               },
 *               DefaultConfig: {
 *                 BackgroundColor: "STRING_VALUE",
 *                 BorderRadius: Number("int"),
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *                 Text: "STRING_VALUE", // required
 *                 TextColor: "STRING_VALUE",
 *               },
 *               IOS: {
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *               },
 *               Web: {
 *                 ButtonAction: "STRING_VALUE", // required
 *                 Link: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         ],
 *         CustomConfig: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Layout: "STRING_VALUE",
 *       },
 *     },
 *     Name: "STRING_VALUE",
 *     Schedule: {
 *       EndTime: "STRING_VALUE",
 *       EventFilter: {
 *         Dimensions: {
 *           Attributes: {
 *             "<keys>": {
 *               AttributeType: "STRING_VALUE",
 *               Values: [ // required
 *                 "<ListOf__string>",
 *               ],
 *             },
 *           },
 *           EventType: {
 *             DimensionType: "STRING_VALUE",
 *             Values: [ // required
 *               "<ListOf__string>",
 *             ],
 *           },
 *           Metrics: {
 *             "<keys>": {
 *               ComparisonOperator: "STRING_VALUE", // required
 *               Value: Number("double"), // required
 *             },
 *           },
 *         },
 *         FilterType: "STRING_VALUE", // required
 *       },
 *       Frequency: "STRING_VALUE",
 *       IsLocalTime: true || false,
 *       QuietTime: {
 *         End: "STRING_VALUE",
 *         Start: "STRING_VALUE",
 *       },
 *       StartTime: "STRING_VALUE", // required
 *       Timezone: "STRING_VALUE",
 *     },
 *     SegmentId: "STRING_VALUE",
 *     SegmentVersion: Number("int"),
 *     tags: {
 *       "<keys>": "<__string>",
 *     },
 *     TemplateConfiguration: {
 *       EmailTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       PushTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       SMSTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       VoiceTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *     },
 *     TreatmentDescription: "STRING_VALUE",
 *     TreatmentName: "STRING_VALUE",
 *     Priority: Number("int"),
 *   },
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateCampaignCommandInput - {@link CreateCampaignCommandInput}
 * @returns {@link CreateCampaignCommandOutput}
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateCampaignCommand extends $Command<
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
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
  constructor(readonly input: CreateCampaignCommandInput) {
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
  ): Handler<CreateCampaignCommandInput, CreateCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCampaignCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateCampaignCommand";
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
  private serialize(input: CreateCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCampaignCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCampaignCommandOutput> {
    return deserializeAws_restJson1CreateCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
