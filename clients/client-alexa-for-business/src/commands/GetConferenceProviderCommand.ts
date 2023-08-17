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
} from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetConferenceProviderRequest, GetConferenceProviderResponse } from "../models/models_0";
import { de_GetConferenceProviderCommand, se_GetConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConferenceProviderCommand}.
 */
export interface GetConferenceProviderCommandInput extends GetConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetConferenceProviderCommand}.
 */
export interface GetConferenceProviderCommandOutput extends GetConferenceProviderResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets details about a specific conference provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetConferenceProviderRequest
 *   ConferenceProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetConferenceProviderResponse
 * //   ConferenceProvider: { // ConferenceProvider
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "CHIME" || "BLUEJEANS" || "FUZE" || "GOOGLE_HANGOUTS" || "POLYCOM" || "RINGCENTRAL" || "SKYPE_FOR_BUSINESS" || "WEBEX" || "ZOOM" || "CUSTOM",
 * //     IPDialIn: { // IPDialIn
 * //       Endpoint: "STRING_VALUE", // required
 * //       CommsProtocol: "SIP" || "SIPS" || "H323", // required
 * //     },
 * //     PSTNDialIn: { // PSTNDialIn
 * //       CountryCode: "STRING_VALUE", // required
 * //       PhoneNumber: "STRING_VALUE", // required
 * //       OneClickIdDelay: "STRING_VALUE", // required
 * //       OneClickPinDelay: "STRING_VALUE", // required
 * //     },
 * //     MeetingSetting: { // MeetingSetting
 * //       RequirePin: "YES" || "NO" || "OPTIONAL", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConferenceProviderCommandInput - {@link GetConferenceProviderCommandInput}
 * @returns {@link GetConferenceProviderCommandOutput}
 * @see {@link GetConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link GetConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetConferenceProviderCommand extends $Command<
  GetConferenceProviderCommandInput,
  GetConferenceProviderCommandOutput,
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
  constructor(readonly input: GetConferenceProviderCommandInput) {
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
  ): Handler<GetConferenceProviderCommandInput, GetConferenceProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConferenceProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetConferenceProviderCommand";
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
  private serialize(input: GetConferenceProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConferenceProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConferenceProviderCommandOutput> {
    return de_GetConferenceProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
