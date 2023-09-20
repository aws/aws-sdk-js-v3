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
import { SendAnnouncementRequest, SendAnnouncementResponse } from "../models/models_0";
import { de_SendAnnouncementCommand, se_SendAnnouncementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendAnnouncementCommand}.
 */
export interface SendAnnouncementCommandInput extends SendAnnouncementRequest {}
/**
 * @public
 *
 * The output of {@link SendAnnouncementCommand}.
 */
export interface SendAnnouncementCommandOutput extends SendAnnouncementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that
 *          are identified by a search or filter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SendAnnouncementCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SendAnnouncementCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SendAnnouncementRequest
 *   RoomFilters: [ // FilterList // required
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Content: { // Content
 *     TextList: [ // TextList
 *       { // Text
 *         Locale: "en-US", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     SsmlList: [ // SsmlList
 *       { // Ssml
 *         Locale: "en-US", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     AudioList: [ // AudioList
 *       { // Audio
 *         Locale: "en-US", // required
 *         Location: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   TimeToLiveInSeconds: Number("int"),
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new SendAnnouncementCommand(input);
 * const response = await client.send(command);
 * // { // SendAnnouncementResponse
 * //   AnnouncementArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendAnnouncementCommandInput - {@link SendAnnouncementCommandInput}
 * @returns {@link SendAnnouncementCommandOutput}
 * @see {@link SendAnnouncementCommandInput} for command's `input` shape.
 * @see {@link SendAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SendAnnouncementCommand extends $Command<
  SendAnnouncementCommandInput,
  SendAnnouncementCommandOutput,
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
  constructor(readonly input: SendAnnouncementCommandInput) {
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
  ): Handler<SendAnnouncementCommandInput, SendAnnouncementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendAnnouncementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SendAnnouncementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "SendAnnouncement",
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
  private serialize(input: SendAnnouncementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendAnnouncementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAnnouncementCommandOutput> {
    return de_SendAnnouncementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
