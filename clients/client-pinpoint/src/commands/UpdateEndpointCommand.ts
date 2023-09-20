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

import { UpdateEndpointRequest, UpdateEndpointResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdateEndpointCommand, se_UpdateEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEndpointCommand}.
 */
export interface UpdateEndpointCommandInput extends UpdateEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointCommand}.
 */
export interface UpdateEndpointCommandOutput extends UpdateEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateEndpointRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 *   EndpointRequest: { // EndpointRequest
 *     Address: "STRING_VALUE",
 *     Attributes: { // MapOfListOf__string
 *       "<keys>": [ // ListOf__string
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 *     Demographic: { // EndpointDemographic
 *       AppVersion: "STRING_VALUE",
 *       Locale: "STRING_VALUE",
 *       Make: "STRING_VALUE",
 *       Model: "STRING_VALUE",
 *       ModelVersion: "STRING_VALUE",
 *       Platform: "STRING_VALUE",
 *       PlatformVersion: "STRING_VALUE",
 *       Timezone: "STRING_VALUE",
 *     },
 *     EffectiveDate: "STRING_VALUE",
 *     EndpointStatus: "STRING_VALUE",
 *     Location: { // EndpointLocation
 *       City: "STRING_VALUE",
 *       Country: "STRING_VALUE",
 *       Latitude: Number("double"),
 *       Longitude: Number("double"),
 *       PostalCode: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
 *     Metrics: { // MapOf__double
 *       "<keys>": Number("double"),
 *     },
 *     OptOut: "STRING_VALUE",
 *     RequestId: "STRING_VALUE",
 *     User: { // EndpointUser
 *       UserAttributes: {
 *         "<keys>": [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       UserId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEndpointCommandInput - {@link UpdateEndpointCommandInput}
 * @returns {@link UpdateEndpointCommandOutput}
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
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
export class UpdateEndpointCommand extends $Command<
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
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
  constructor(readonly input: UpdateEndpointCommandInput) {
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
  ): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "UpdateEndpoint",
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
  private serialize(input: UpdateEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEndpointCommandOutput> {
    return de_UpdateEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
