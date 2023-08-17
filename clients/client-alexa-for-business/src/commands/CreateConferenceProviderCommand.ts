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
import { CreateConferenceProviderRequest, CreateConferenceProviderResponse } from "../models/models_0";
import { de_CreateConferenceProviderCommand, se_CreateConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConferenceProviderCommand}.
 */
export interface CreateConferenceProviderCommandInput extends CreateConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateConferenceProviderCommand}.
 */
export interface CreateConferenceProviderCommandOutput extends CreateConferenceProviderResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Adds a new conference provider under the user's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateConferenceProviderRequest
 *   ConferenceProviderName: "STRING_VALUE", // required
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
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateConferenceProviderResponse
 * //   ConferenceProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConferenceProviderCommandInput - {@link CreateConferenceProviderCommandInput}
 * @returns {@link CreateConferenceProviderCommandOutput}
 * @see {@link CreateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link CreateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class CreateConferenceProviderCommand extends $Command<
  CreateConferenceProviderCommandInput,
  CreateConferenceProviderCommandOutput,
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
  constructor(readonly input: CreateConferenceProviderCommandInput) {
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
  ): Handler<CreateConferenceProviderCommandInput, CreateConferenceProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConferenceProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "CreateConferenceProviderCommand";
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
  private serialize(input: CreateConferenceProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConferenceProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConferenceProviderCommandOutput> {
    return de_CreateConferenceProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
