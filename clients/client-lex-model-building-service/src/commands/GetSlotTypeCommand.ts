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
import { GetSlotTypeRequest, GetSlotTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSlotTypeCommand,
  serializeAws_restJson1GetSlotTypeCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetSlotTypeCommand}.
 */
export interface GetSlotTypeCommandInput extends GetSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetSlotTypeCommand}.
 */
export interface GetSlotTypeCommandOutput extends GetSlotTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific version of a slot type. In
 *       addition to specifying the slot type name, you must specify the slot type
 *       version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetSlotTypeCommandInput - {@link GetSlotTypeCommandInput}
 * @returns {@link GetSlotTypeCommandOutput}
 * @see {@link GetSlotTypeCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeCommandOutput} for command's `response` shape.
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
 * @example To get information about a slot type
 * ```javascript
 * // This example shows how to get information about a slot type.
 * const input = {
 *   "version": "$LATEST",
 *   "name": "DocPizzaCrustType"
 * };
 * const command = new GetSlotTypeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "version": "$LATEST",
 *   "name": "DocPizzaCrustType",
 *   "checksum": "210b3d5a-90a3-4b22-ac7e-f50c2c71095f",
 *   "createdDate": 1494359274.403,
 *   "description": "Available crust types",
 *   "enumerationValues": [
 *     {
 *       "value": "thick"
 *     },
 *     {
 *       "value": "thin"
 *     }
 *   ],
 *   "lastUpdatedDate": 1494359274.403
 * }
 * *\/
 * // example id: to-get-information-about-a-slot-type-1494432961004
 * ```
 *
 */
export class GetSlotTypeCommand extends $Command<
  GetSlotTypeCommandInput,
  GetSlotTypeCommandOutput,
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
  constructor(readonly input: GetSlotTypeCommandInput) {
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
  ): Handler<GetSlotTypeCommandInput, GetSlotTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSlotTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetSlotTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetSlotTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSlotTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSlotTypeCommandOutput> {
    return deserializeAws_restJson1GetSlotTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
