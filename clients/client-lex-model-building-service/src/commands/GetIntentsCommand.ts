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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetIntentsRequest, GetIntentsResponse } from "../models/models_0";
import { de_GetIntentsCommand, se_GetIntentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIntentsCommand}.
 */
export interface GetIntentsCommandInput extends GetIntentsRequest {}
/**
 * @public
 *
 * The output of {@link GetIntentsCommand}.
 */
export interface GetIntentsCommandOutput extends GetIntentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns intent information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all intents that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all
 *           intents. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetIntents</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetIntentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetIntentsCommand(input);
 * const response = await client.send(command);
 * // { // GetIntentsResponse
 * //   intents: [ // IntentMetadataList
 * //     { // IntentMetadata
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       createdDate: new Date("TIMESTAMP"),
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIntentsCommandInput - {@link GetIntentsCommandInput}
 * @returns {@link GetIntentsCommandOutput}
 * @see {@link GetIntentsCommandInput} for command's `input` shape.
 * @see {@link GetIntentsCommandOutput} for command's `response` shape.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 * @example To get a list of intents
 * ```javascript
 * // This example shows how to get a list of all of the intents in your account.
 * const input = {
 *   "maxResults": 10,
 *   "nextToken": ""
 * };
 * const command = new GetIntentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "intents": [
 *     {
 *       "version": "$LATEST",
 *       "name": "DocOrderPizza",
 *       "createdDate": 1494359783.453,
 *       "description": "Order a pizza from a local pizzeria.",
 *       "lastUpdatedDate": 1494359783.453
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-intents-1494432416363
 * ```
 *
 */
export class GetIntentsCommand extends $Command<
  GetIntentsCommandInput,
  GetIntentsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetIntentsCommandInput) {
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
  ): Handler<GetIntentsCommandInput, GetIntentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetIntentsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetIntentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseModelBuildingService",
        operation: "GetIntents",
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
  private serialize(input: GetIntentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIntentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentsCommandOutput> {
    return de_GetIntentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
