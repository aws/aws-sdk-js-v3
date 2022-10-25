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
  ListLayersRequest,
  ListLayersRequestFilterSensitiveLog,
  ListLayersResponse,
  ListLayersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListLayersCommand,
  serializeAws_restJson1ListLayersCommand,
} from "../protocols/Aws_restJson1";

export interface ListLayersCommandInput extends ListLayersRequest {}
export interface ListLayersCommandOutput extends ListLayersResponse, __MetadataBearer {}

/**
 * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda
 *         layers</a> and shows information about the latest version of each. Specify a
 *         <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime
 *         identifier</a> to list only layers that indicate that they're compatible with that
 *       runtime. Specify a compatible architecture to include only layers that are compatible with
 *       that  <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayersCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayersCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListLayersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLayersCommandInput} for command's `input` shape.
 * @see {@link ListLayersCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListLayersCommand extends $Command<
  ListLayersCommandInput,
  ListLayersCommandOutput,
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

  constructor(readonly input: ListLayersCommandInput) {
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
  ): Handler<ListLayersCommandInput, ListLayersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLayersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListLayersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLayersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLayersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLayersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLayersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLayersCommandOutput> {
    return deserializeAws_restJson1ListLayersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
