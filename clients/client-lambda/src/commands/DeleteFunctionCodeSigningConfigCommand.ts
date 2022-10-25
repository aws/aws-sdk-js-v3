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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  DeleteFunctionCodeSigningConfigRequest,
  DeleteFunctionCodeSigningConfigRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand,
  serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteFunctionCodeSigningConfigCommandInput extends DeleteFunctionCodeSigningConfigRequest {}
export interface DeleteFunctionCodeSigningConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the code signing configuration from the function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class DeleteFunctionCodeSigningConfigCommand extends $Command<
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: DeleteFunctionCodeSigningConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFunctionCodeSigningConfigCommandInput, DeleteFunctionCodeSigningConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFunctionCodeSigningConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "DeleteFunctionCodeSigningConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFunctionCodeSigningConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteFunctionCodeSigningConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFunctionCodeSigningConfigCommandOutput> {
    return deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
