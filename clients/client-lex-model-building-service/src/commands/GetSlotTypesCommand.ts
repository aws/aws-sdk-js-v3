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
  GetSlotTypesRequest,
  GetSlotTypesRequestFilterSensitiveLog,
  GetSlotTypesResponse,
  GetSlotTypesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSlotTypesCommand,
  serializeAws_restJson1GetSlotTypesCommand,
} from "../protocols/Aws_restJson1";

export interface GetSlotTypesCommandInput extends GetSlotTypesRequest {}
export interface GetSlotTypesCommandOutput extends GetSlotTypesResponse, __MetadataBearer {}

/**
 * <p>Returns slot type information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all slot types that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all slot
 *           types. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetSlotTypes</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSlotTypesCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetSlotTypesCommand extends $Command<
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput,
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

  constructor(readonly input: GetSlotTypesCommandInput) {
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
  ): Handler<GetSlotTypesCommandInput, GetSlotTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSlotTypesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetSlotTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSlotTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSlotTypesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSlotTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSlotTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSlotTypesCommandOutput> {
    return deserializeAws_restJson1GetSlotTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
