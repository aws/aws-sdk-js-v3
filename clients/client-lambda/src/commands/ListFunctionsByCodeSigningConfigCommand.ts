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
  ListFunctionsByCodeSigningConfigRequest,
  ListFunctionsByCodeSigningConfigRequestFilterSensitiveLog,
  ListFunctionsByCodeSigningConfigResponse,
  ListFunctionsByCodeSigningConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand,
  serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand,
} from "../protocols/Aws_restJson1";

export interface ListFunctionsByCodeSigningConfigCommandInput extends ListFunctionsByCodeSigningConfigRequest {}
export interface ListFunctionsByCodeSigningConfigCommandOutput
  extends ListFunctionsByCodeSigningConfigResponse,
    __MetadataBearer {}

/**
 * <p>List the functions that use the specified code signing configuration. You can use this method prior to deleting a
 *       code signing configuration, to verify that no functions are using it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsByCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsByCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionsByCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionsByCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsByCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListFunctionsByCodeSigningConfigCommand extends $Command<
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
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

  constructor(readonly input: ListFunctionsByCodeSigningConfigCommandInput) {
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
  ): Handler<ListFunctionsByCodeSigningConfigCommandInput, ListFunctionsByCodeSigningConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFunctionsByCodeSigningConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionsByCodeSigningConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionsByCodeSigningConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionsByCodeSigningConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFunctionsByCodeSigningConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFunctionsByCodeSigningConfigCommandOutput> {
    return deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
