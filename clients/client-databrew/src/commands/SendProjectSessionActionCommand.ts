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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  SendProjectSessionActionRequest,
  SendProjectSessionActionRequestFilterSensitiveLog,
  SendProjectSessionActionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1SendProjectSessionActionCommand,
  serializeAws_restJson1SendProjectSessionActionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SendProjectSessionActionCommand}.
 */
export interface SendProjectSessionActionCommandInput extends SendProjectSessionActionRequest {}
/**
 * @public
 *
 * The output of {@link SendProjectSessionActionCommand}.
 */
export interface SendProjectSessionActionCommandOutput extends SendProjectSessionActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Performs a recipe step within an interactive DataBrew session that's currently
 *             open.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, SendProjectSessionActionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, SendProjectSessionActionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = {
 *   Preview: true || false,
 *   Name: "STRING_VALUE", // required
 *   RecipeStep: {
 *     Action: {
 *       Operation: "STRING_VALUE", // required
 *       Parameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     ConditionExpressions: [
 *       {
 *         Condition: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *         TargetColumn: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   StepIndex: Number("int"),
 *   ClientSessionId: "STRING_VALUE",
 *   ViewFrame: {
 *     StartColumnIndex: Number("int"), // required
 *     ColumnRange: Number("int"),
 *     HiddenColumns: [
 *       "STRING_VALUE",
 *     ],
 *     StartRowIndex: Number("int"),
 *     RowRange: Number("int"),
 *     Analytics: "ENABLE" || "DISABLE",
 *   },
 * };
 * const command = new SendProjectSessionActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SendProjectSessionActionCommandInput - {@link SendProjectSessionActionCommandInput}
 * @returns {@link SendProjectSessionActionCommandOutput}
 * @see {@link SendProjectSessionActionCommandInput} for command's `input` shape.
 * @see {@link SendProjectSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 *
 */
export class SendProjectSessionActionCommand extends $Command<
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: SendProjectSessionActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendProjectSessionActionCommandInput, SendProjectSessionActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendProjectSessionActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "SendProjectSessionActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendProjectSessionActionRequestFilterSensitiveLog,
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
  private serialize(input: SendProjectSessionActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendProjectSessionActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendProjectSessionActionCommandOutput> {
    return deserializeAws_restJson1SendProjectSessionActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
