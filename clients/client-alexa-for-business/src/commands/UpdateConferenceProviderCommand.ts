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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateConferenceProviderRequest, UpdateConferenceProviderResponse } from "../models/models_0";
import { de_UpdateConferenceProviderCommand, se_UpdateConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConferenceProviderCommand}.
 */
export interface UpdateConferenceProviderCommandInput extends UpdateConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConferenceProviderCommand}.
 */
export interface UpdateConferenceProviderCommandOutput extends UpdateConferenceProviderResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates an existing conference provider's settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateConferenceProviderRequest
 *   ConferenceProviderArn: "STRING_VALUE", // required
 *   ConferenceProviderType: "CHIME" || "BLUEJEANS" || "FUZE" || "GOOGLE_HANGOUTS" || "POLYCOM" || "RINGCENTRAL" || "SKYPE_FOR_BUSINESS" || "WEBEX" || "ZOOM" || "CUSTOM", // required
 *   IPDialIn: { // IPDialIn
 *     Endpoint: "STRING_VALUE", // required
 *     CommsProtocol: "SIP" || "SIPS" || "H323", // required
 *   },
 *   PSTNDialIn: { // PSTNDialIn
 *     CountryCode: "STRING_VALUE", // required
 *     PhoneNumber: "STRING_VALUE", // required
 *     OneClickIdDelay: "STRING_VALUE", // required
 *     OneClickPinDelay: "STRING_VALUE", // required
 *   },
 *   MeetingSetting: { // MeetingSetting
 *     RequirePin: "YES" || "NO" || "OPTIONAL", // required
 *   },
 * };
 * const command = new UpdateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConferenceProviderCommandInput - {@link UpdateConferenceProviderCommandInput}
 * @returns {@link UpdateConferenceProviderCommandOutput}
 * @see {@link UpdateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class UpdateConferenceProviderCommand extends $Command<
  UpdateConferenceProviderCommandInput,
  UpdateConferenceProviderCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: UpdateConferenceProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConferenceProviderCommandInput, UpdateConferenceProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConferenceProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "UpdateConferenceProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "UpdateConferenceProvider",
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
  private serialize(input: UpdateConferenceProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConferenceProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConferenceProviderCommandOutput> {
    return de_UpdateConferenceProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
