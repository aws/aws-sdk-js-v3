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
  ListVersionsByFunctionRequest,
  ListVersionsByFunctionRequestFilterSensitiveLog,
  ListVersionsByFunctionResponse,
  ListVersionsByFunctionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListVersionsByFunctionCommand,
  serializeAws_restJson1ListVersionsByFunctionCommand,
} from "../protocols/Aws_restJson1";

export interface ListVersionsByFunctionCommandInput extends ListVersionsByFunctionRequest {}
export interface ListVersionsByFunctionCommandOutput extends ListVersionsByFunctionResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>,
 *       with the version-specific configuration of each. Lambda returns up to 50 versions per call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListVersionsByFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListVersionsByFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListVersionsByFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVersionsByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListVersionsByFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListVersionsByFunctionCommand extends $Command<
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
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

  constructor(readonly input: ListVersionsByFunctionCommandInput) {
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
  ): Handler<ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVersionsByFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListVersionsByFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVersionsByFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVersionsByFunctionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVersionsByFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVersionsByFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVersionsByFunctionCommandOutput> {
    return deserializeAws_restJson1ListVersionsByFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
