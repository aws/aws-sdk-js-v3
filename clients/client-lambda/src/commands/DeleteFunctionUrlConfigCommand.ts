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
import { DeleteFunctionUrlConfigRequest, DeleteFunctionUrlConfigRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFunctionUrlConfigCommand,
  serializeAws_restJson1DeleteFunctionUrlConfigCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteFunctionUrlConfigCommandInput extends DeleteFunctionUrlConfigRequest {}
export interface DeleteFunctionUrlConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Lambda function URL. When you delete a function URL, you
 *       can't recover it. Creating a new function URL results in a different URL address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionUrlConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class DeleteFunctionUrlConfigCommand extends $Command<
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
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

  constructor(readonly input: DeleteFunctionUrlConfigCommandInput) {
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
  ): Handler<DeleteFunctionUrlConfigCommandInput, DeleteFunctionUrlConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFunctionUrlConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "DeleteFunctionUrlConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFunctionUrlConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFunctionUrlConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFunctionUrlConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFunctionUrlConfigCommandOutput> {
    return deserializeAws_restJson1DeleteFunctionUrlConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
