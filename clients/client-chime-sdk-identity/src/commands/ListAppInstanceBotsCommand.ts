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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceBotsRequest,
  ListAppInstanceBotsRequestFilterSensitiveLog,
  ListAppInstanceBotsResponse,
  ListAppInstanceBotsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAppInstanceBotsCommand, se_ListAppInstanceBotsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstanceBotsCommand}.
 */
export interface ListAppInstanceBotsCommandInput extends ListAppInstanceBotsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceBotsCommand}.
 */
export interface ListAppInstanceBotsCommandOutput extends ListAppInstanceBotsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all <code>AppInstanceBots</code> created under a single <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceBotsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceBotsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // ListAppInstanceBotsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceBotsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceBotsResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * //   AppInstanceBots: [ // AppInstanceBotList
 * //     { // AppInstanceBotSummary
 * //       AppInstanceBotArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceBotsCommandInput - {@link ListAppInstanceBotsCommandInput}
 * @returns {@link ListAppInstanceBotsCommandOutput}
 * @see {@link ListAppInstanceBotsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceBotsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 */
export class ListAppInstanceBotsCommand extends $Command<
  ListAppInstanceBotsCommandInput,
  ListAppInstanceBotsCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
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
  constructor(readonly input: ListAppInstanceBotsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppInstanceBotsCommandInput, ListAppInstanceBotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppInstanceBotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "ListAppInstanceBotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceBotsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceBotsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeIdentityService",
        operation: "ListAppInstanceBots",
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
  private serialize(input: ListAppInstanceBotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppInstanceBotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppInstanceBotsCommandOutput> {
    return de_ListAppInstanceBotsCommand(output, context);
  }
}
