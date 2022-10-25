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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  ExtendTransactionRequest,
  ExtendTransactionRequestFilterSensitiveLog,
  ExtendTransactionResponse,
  ExtendTransactionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExtendTransactionCommand,
  serializeAws_restJson1ExtendTransactionCommand,
} from "../protocols/Aws_restJson1";

export interface ExtendTransactionCommandInput extends ExtendTransactionRequest {}
export interface ExtendTransactionCommandOutput extends ExtendTransactionResponse, __MetadataBearer {}

/**
 * <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p>
 *
 * 	        <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ExtendTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ExtendTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ExtendTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExtendTransactionCommandInput} for command's `input` shape.
 * @see {@link ExtendTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class ExtendTransactionCommand extends $Command<
  ExtendTransactionCommandInput,
  ExtendTransactionCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: ExtendTransactionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExtendTransactionCommandInput, ExtendTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExtendTransactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "ExtendTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExtendTransactionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExtendTransactionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExtendTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExtendTransactionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExtendTransactionCommandOutput> {
    return deserializeAws_restJson1ExtendTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
