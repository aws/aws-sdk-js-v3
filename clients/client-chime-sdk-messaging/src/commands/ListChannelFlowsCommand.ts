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

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import {
  ListChannelFlowsRequest,
  ListChannelFlowsRequestFilterSensitiveLog,
  ListChannelFlowsResponse,
  ListChannelFlowsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListChannelFlowsCommand, se_ListChannelFlowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListChannelFlowsCommand}.
 */
export interface ListChannelFlowsCommandInput extends ListChannelFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelFlowsCommand}.
 */
export interface ListChannelFlowsCommandOutput extends ListChannelFlowsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelFlowsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelFlowsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelFlowsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelFlowsResponse
 * //   ChannelFlows: [ // ChannelFlowSummaryList
 * //     { // ChannelFlowSummary
 * //       ChannelFlowArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Processors: [ // ProcessorList
 * //         { // Processor
 * //           Name: "STRING_VALUE", // required
 * //           Configuration: { // ProcessorConfiguration
 * //             Lambda: { // LambdaConfiguration
 * //               ResourceArn: "STRING_VALUE", // required
 * //               InvocationType: "ASYNC", // required
 * //             },
 * //           },
 * //           ExecutionOrder: Number("int"), // required
 * //           FallbackAction: "CONTINUE" || "ABORT", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelFlowsCommandInput - {@link ListChannelFlowsCommandInput}
 * @returns {@link ListChannelFlowsCommandOutput}
 * @see {@link ListChannelFlowsCommandInput} for command's `input` shape.
 * @see {@link ListChannelFlowsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
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
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 */
export class ListChannelFlowsCommand extends $Command<
  ListChannelFlowsCommandInput,
  ListChannelFlowsCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
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
  constructor(readonly input: ListChannelFlowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelFlowsCommandInput, ListChannelFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChannelFlowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "ListChannelFlowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelFlowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListChannelFlowsResponseFilterSensitiveLog,
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
  private serialize(input: ListChannelFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChannelFlowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChannelFlowsCommandOutput> {
    return de_ListChannelFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
