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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import {
  DefineExpressionRequest,
  DefineExpressionRequestFilterSensitiveLog,
  DefineExpressionResponse,
  DefineExpressionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDefineExpressionCommand,
  serializeAws_queryDefineExpressionCommand,
} from "../protocols/Aws_query";

export interface DefineExpressionCommandInput extends DefineExpressionRequest {}
export interface DefineExpressionCommandOutput extends DefineExpressionResponse, __MetadataBearer {}

/**
 * <p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones.  If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineExpressionCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineExpressionCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineExpressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineExpressionCommandInput} for command's `input` shape.
 * @see {@link DefineExpressionCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 */
export class DefineExpressionCommand extends $Command<
  DefineExpressionCommandInput,
  DefineExpressionCommandOutput,
  CloudSearchClientResolvedConfig
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

  constructor(readonly input: DefineExpressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DefineExpressionCommandInput, DefineExpressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DefineExpressionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineExpressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DefineExpressionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DefineExpressionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineExpressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineExpressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineExpressionCommandOutput> {
    return deserializeAws_queryDefineExpressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
