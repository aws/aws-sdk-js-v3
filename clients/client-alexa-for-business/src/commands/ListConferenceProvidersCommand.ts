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
import { ListConferenceProvidersRequest, ListConferenceProvidersResponse } from "../models/models_0";
import { de_ListConferenceProvidersCommand, se_ListConferenceProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConferenceProvidersCommand}.
 */
export interface ListConferenceProvidersCommandInput extends ListConferenceProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListConferenceProvidersCommand}.
 */
export interface ListConferenceProvidersCommandOutput extends ListConferenceProvidersResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists conference providers under a specific AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListConferenceProvidersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListConferenceProvidersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListConferenceProvidersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListConferenceProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListConferenceProvidersResponse
 * //   ConferenceProviders: [ // ConferenceProvidersList
 * //     { // ConferenceProvider
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "CHIME" || "BLUEJEANS" || "FUZE" || "GOOGLE_HANGOUTS" || "POLYCOM" || "RINGCENTRAL" || "SKYPE_FOR_BUSINESS" || "WEBEX" || "ZOOM" || "CUSTOM",
 * //       IPDialIn: { // IPDialIn
 * //         Endpoint: "STRING_VALUE", // required
 * //         CommsProtocol: "SIP" || "SIPS" || "H323", // required
 * //       },
 * //       PSTNDialIn: { // PSTNDialIn
 * //         CountryCode: "STRING_VALUE", // required
 * //         PhoneNumber: "STRING_VALUE", // required
 * //         OneClickIdDelay: "STRING_VALUE", // required
 * //         OneClickPinDelay: "STRING_VALUE", // required
 * //       },
 * //       MeetingSetting: { // MeetingSetting
 * //         RequirePin: "YES" || "NO" || "OPTIONAL", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConferenceProvidersCommandInput - {@link ListConferenceProvidersCommandInput}
 * @returns {@link ListConferenceProvidersCommandOutput}
 * @see {@link ListConferenceProvidersCommandInput} for command's `input` shape.
 * @see {@link ListConferenceProvidersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListConferenceProvidersCommand extends $Command<
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
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
  constructor(readonly input: ListConferenceProvidersCommandInput) {
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
  ): Handler<ListConferenceProvidersCommandInput, ListConferenceProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConferenceProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListConferenceProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "ListConferenceProviders",
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
  private serialize(input: ListConferenceProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListConferenceProvidersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConferenceProvidersCommandOutput> {
    return de_ListConferenceProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
