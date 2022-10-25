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
  GetIntentsRequest,
  GetIntentsRequestFilterSensitiveLog,
  GetIntentsResponse,
  GetIntentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIntentsCommand,
  serializeAws_restJson1GetIntentsCommand,
} from "../protocols/Aws_restJson1";

export interface GetIntentsCommandInput extends GetIntentsRequest {}
export interface GetIntentsCommandOutput extends GetIntentsResponse, __MetadataBearer {}

/**
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
 * const command = new GetIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntentsCommandInput} for command's `input` shape.
 * @see {@link GetIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
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
      inputFilterSensitiveLog: GetIntentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIntentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentsCommandOutput> {
    return deserializeAws_restJson1GetIntentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
