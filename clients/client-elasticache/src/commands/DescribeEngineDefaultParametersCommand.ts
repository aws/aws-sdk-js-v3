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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  DescribeEngineDefaultParametersMessage,
  DescribeEngineDefaultParametersMessageFilterSensitiveLog,
  DescribeEngineDefaultParametersResult,
  DescribeEngineDefaultParametersResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeEngineDefaultParametersCommand,
  serializeAws_queryDescribeEngineDefaultParametersCommand,
} from "../protocols/Aws_query";

export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {}
export interface DescribeEngineDefaultParametersCommandOutput
  extends DescribeEngineDefaultParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns the default engine and
 *             system parameter information for the specified cache engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DescribeEngineDefaultParametersCommand extends $Command<
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
  ElastiCacheClientResolvedConfig
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

  constructor(readonly input: DescribeEngineDefaultParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEngineDefaultParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeEngineDefaultParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEngineDefaultParametersMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEngineDefaultParametersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEngineDefaultParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEngineDefaultParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEngineDefaultParametersCommandOutput> {
    return deserializeAws_queryDescribeEngineDefaultParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
