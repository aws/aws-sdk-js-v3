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

import {
  ConnectContactLensClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectContactLensClient";
import {
  ListRealtimeContactAnalysisSegmentsRequest,
  ListRealtimeContactAnalysisSegmentsResponse,
} from "../models/models_0";
import {
  de_ListRealtimeContactAnalysisSegmentsCommand,
  se_ListRealtimeContactAnalysisSegmentsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRealtimeContactAnalysisSegmentsCommand}.
 */
export interface ListRealtimeContactAnalysisSegmentsCommandInput extends ListRealtimeContactAnalysisSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListRealtimeContactAnalysisSegmentsCommand}.
 */
export interface ListRealtimeContactAnalysisSegmentsCommandOutput
  extends ListRealtimeContactAnalysisSegmentsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of analysis segments for a real-time analysis session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } from "@aws-sdk/client-connect-contact-lens"; // ES Modules import
 * // const { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } = require("@aws-sdk/client-connect-contact-lens"); // CommonJS import
 * const client = new ConnectContactLensClient(config);
 * const input = { // ListRealtimeContactAnalysisSegmentsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListRealtimeContactAnalysisSegmentsResponse
 * //   Segments: [ // RealtimeContactAnalysisSegments // required
 * //     { // RealtimeContactAnalysisSegment
 * //       Transcript: { // Transcript
 * //         Id: "STRING_VALUE", // required
 * //         ParticipantId: "STRING_VALUE", // required
 * //         ParticipantRole: "STRING_VALUE", // required
 * //         Content: "STRING_VALUE", // required
 * //         BeginOffsetMillis: Number("int"), // required
 * //         EndOffsetMillis: Number("int"), // required
 * //         Sentiment: "POSITIVE" || "NEUTRAL" || "NEGATIVE", // required
 * //         IssuesDetected: [ // IssuesDetected
 * //           { // IssueDetected
 * //             CharacterOffsets: { // CharacterOffsets
 * //               BeginOffsetChar: Number("int"), // required
 * //               EndOffsetChar: Number("int"), // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       Categories: { // Categories
 * //         MatchedCategories: [ // MatchedCategories // required
 * //           "STRING_VALUE",
 * //         ],
 * //         MatchedDetails: { // MatchedDetails // required
 * //           "<keys>": { // CategoryDetails
 * //             PointsOfInterest: [ // PointsOfInterest // required
 * //               { // PointOfInterest
 * //                 BeginOffsetMillis: Number("int"), // required
 * //                 EndOffsetMillis: Number("int"), // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRealtimeContactAnalysisSegmentsCommandInput - {@link ListRealtimeContactAnalysisSegmentsCommandInput}
 * @returns {@link ListRealtimeContactAnalysisSegmentsCommandOutput}
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandOutput} for command's `response` shape.
 * @see {@link ConnectContactLensClientResolvedConfig | config} for ConnectContactLensClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectContactLensServiceException}
 * <p>Base exception class for all service exceptions from ConnectContactLens service.</p>
 *
 */
export class ListRealtimeContactAnalysisSegmentsCommand extends $Command<
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
  ConnectContactLensClientResolvedConfig
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
  constructor(readonly input: ListRealtimeContactAnalysisSegmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectContactLensClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRealtimeContactAnalysisSegmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectContactLensClient";
    const commandName = "ListRealtimeContactAnalysisSegmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectContactLens",
        operation: "ListRealtimeContactAnalysisSegments",
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
  private serialize(
    input: ListRealtimeContactAnalysisSegmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListRealtimeContactAnalysisSegmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> {
    return de_ListRealtimeContactAnalysisSegmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
