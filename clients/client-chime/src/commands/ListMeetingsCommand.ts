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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListMeetingsRequest, ListMeetingsResponse, ListMeetingsResponseFilterSensitiveLog } from "../models/models_1";
import { de_ListMeetingsCommand, se_ListMeetingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMeetingsCommand}.
 */
export interface ListMeetingsCommandInput extends ListMeetingsRequest {}
/**
 * @public
 *
 * The output of {@link ListMeetingsCommand}.
 */
export interface ListMeetingsCommandOutput extends ListMeetingsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists up to 100 active Amazon Chime SDK meetings.</p>
 *          <important>
 *             <p>ListMeetings is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.</p>
 *          </important>
 *          <p>For more information about the Amazon Chime SDK, see
 *         <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *         in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListMeetingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListMeetingsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMeetingsCommand(input);
 * const response = await client.send(command);
 * // { // ListMeetingsResponse
 * //   Meetings: [ // MeetingList
 * //     { // Meeting
 * //       MeetingId: "STRING_VALUE",
 * //       ExternalMeetingId: "STRING_VALUE",
 * //       MediaPlacement: { // MediaPlacement
 * //         AudioHostUrl: "STRING_VALUE",
 * //         AudioFallbackUrl: "STRING_VALUE",
 * //         ScreenDataUrl: "STRING_VALUE",
 * //         ScreenSharingUrl: "STRING_VALUE",
 * //         ScreenViewingUrl: "STRING_VALUE",
 * //         SignalingUrl: "STRING_VALUE",
 * //         TurnControlUrl: "STRING_VALUE",
 * //         EventIngestionUrl: "STRING_VALUE",
 * //       },
 * //       MediaRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMeetingsCommandInput - {@link ListMeetingsCommandInput}
 * @returns {@link ListMeetingsCommandOutput}
 * @see {@link ListMeetingsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class ListMeetingsCommand extends $Command<
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: ListMeetingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMeetingsCommandInput, ListMeetingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListMeetingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListMeetingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListMeetingsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "ListMeetings",
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
  private serialize(input: ListMeetingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMeetingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMeetingsCommandOutput> {
    return de_ListMeetingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
