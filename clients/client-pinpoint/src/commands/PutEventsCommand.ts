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

import { PutEventsRequest, PutEventsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_PutEventsCommand, se_PutEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutEventsCommand}.
 */
export interface PutEventsCommandInput extends PutEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsCommand}.
 */
export interface PutEventsCommandOutput extends PutEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // PutEventsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EventsRequest: { // EventsRequest
 *     BatchItem: { // MapOfEventsBatch // required
 *       "<keys>": { // EventsBatch
 *         Endpoint: { // PublicEndpoint
 *           Address: "STRING_VALUE",
 *           Attributes: { // MapOfListOf__string
 *             "<keys>": [ // ListOf__string
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 *           Demographic: { // EndpointDemographic
 *             AppVersion: "STRING_VALUE",
 *             Locale: "STRING_VALUE",
 *             Make: "STRING_VALUE",
 *             Model: "STRING_VALUE",
 *             ModelVersion: "STRING_VALUE",
 *             Platform: "STRING_VALUE",
 *             PlatformVersion: "STRING_VALUE",
 *             Timezone: "STRING_VALUE",
 *           },
 *           EffectiveDate: "STRING_VALUE",
 *           EndpointStatus: "STRING_VALUE",
 *           Location: { // EndpointLocation
 *             City: "STRING_VALUE",
 *             Country: "STRING_VALUE",
 *             Latitude: Number("double"),
 *             Longitude: Number("double"),
 *             PostalCode: "STRING_VALUE",
 *             Region: "STRING_VALUE",
 *           },
 *           Metrics: { // MapOf__double
 *             "<keys>": Number("double"),
 *           },
 *           OptOut: "STRING_VALUE",
 *           RequestId: "STRING_VALUE",
 *           User: { // EndpointUser
 *             UserAttributes: {
 *               "<keys>": [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             UserId: "STRING_VALUE",
 *           },
 *         },
 *         Events: { // MapOfEvent // required
 *           "<keys>": { // Event
 *             AppPackageName: "STRING_VALUE",
 *             AppTitle: "STRING_VALUE",
 *             AppVersionCode: "STRING_VALUE",
 *             Attributes: { // MapOf__string
 *               "<keys>": "STRING_VALUE",
 *             },
 *             ClientSdkVersion: "STRING_VALUE",
 *             EventType: "STRING_VALUE", // required
 *             Metrics: {
 *               "<keys>": Number("double"),
 *             },
 *             SdkName: "STRING_VALUE",
 *             Session: { // Session
 *               Duration: Number("int"),
 *               Id: "STRING_VALUE", // required
 *               StartTimestamp: "STRING_VALUE", // required
 *               StopTimestamp: "STRING_VALUE",
 *             },
 *             Timestamp: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventsResponse
 * //   EventsResponse: { // EventsResponse
 * //     Results: { // MapOfItemResponse
 * //       "<keys>": { // ItemResponse
 * //         EndpointItemResponse: { // EndpointItemResponse
 * //           Message: "STRING_VALUE",
 * //           StatusCode: Number("int"),
 * //         },
 * //         EventsItemResponse: { // MapOfEventItemResponse
 * //           "<keys>": { // EventItemResponse
 * //             Message: "STRING_VALUE",
 * //             StatusCode: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutEventsCommandInput - {@link PutEventsCommandInput}
 * @returns {@link PutEventsCommandOutput}
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
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
export class PutEventsCommand extends $Command<
  PutEventsCommandInput,
  PutEventsCommandOutput,
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
  constructor(readonly input: PutEventsCommandInput) {
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
  ): Handler<PutEventsCommandInput, PutEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutEventsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "PutEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "PutEvents",
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
  private serialize(input: PutEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventsCommandOutput> {
    return de_PutEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
