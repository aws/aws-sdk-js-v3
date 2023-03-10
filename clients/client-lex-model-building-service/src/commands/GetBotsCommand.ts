// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetBotsRequest,
  GetBotsRequestFilterSensitiveLog,
  GetBotsResponse,
  GetBotsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBotsCommand,
  serializeAws_restJson1GetBotsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetBotsCommand}.
 */
export interface GetBotsCommandInput extends GetBotsRequest {}
/**
 * The output of {@link GetBotsCommand}.
 */
export interface GetBotsCommandOutput extends GetBotsResponse, __MetadataBearer {}

/**
 * <p>Returns bot information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you provide the <code>nameContains</code> field, the
 *           response includes information for the <code>$LATEST</code> version of
 *           all bots whose name contains the specified string.</p>
 *             </li>
 *             <li>
 *                <p>If you don't specify the <code>nameContains</code> field, the
 *           operation returns information about the <code>$LATEST</code> version
 *           of all of your bots.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permission for the <code>lex:GetBots</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotsCommandInput} for command's `input` shape.
 * @see {@link GetBotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 *
 * @example To get a list of bots
 * ```javascript
 * // This example shows how to get a list of all of the bots in your account.
 * const input = {
 *   "maxResults": 5,
 *   "nextToken": ""
 * };
 * const command = new GetBotsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "bots": [
 *     {
 *       "version": "$LATEST",
 *       "name": "DocOrderPizzaBot",
 *       "createdDate": 1494360160.133,
 *       "description": "Orders a pizza from a local pizzeria.",
 *       "lastUpdatedDate": 1494360160.133,
 *       "status": "NOT_BUILT"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-bots-1494432220036
 * ```
 *
 */
export class GetBotsCommand extends $Command<
  GetBotsCommandInput,
  GetBotsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: GetBotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotsCommandInput, GetBotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBotsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBotsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotsCommandOutput> {
    return deserializeAws_restJson1GetBotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
