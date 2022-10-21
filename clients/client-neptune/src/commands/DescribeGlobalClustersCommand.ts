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
  DescribeGlobalClustersMessage,
  DescribeGlobalClustersMessageFilterSensitiveLog,
  GlobalClustersMessage,
  GlobalClustersMessageFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryDescribeGlobalClustersCommand,
  serializeAws_queryDescribeGlobalClustersCommand,
} from "../protocols/Aws_query";

export interface DescribeGlobalClustersCommandInput extends DescribeGlobalClustersMessage {}
export interface DescribeGlobalClustersCommandOutput extends GlobalClustersMessage, __MetadataBearer {}

/**
 * <p>Returns information about Neptune global database clusters. This API
 *       supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class DescribeGlobalClustersCommand extends $Command<
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
  NeptuneClientResolvedConfig
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

  constructor(readonly input: DescribeGlobalClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeGlobalClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalClustersMessageFilterSensitiveLog,
      outputFilterSensitiveLog: GlobalClustersMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGlobalClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeGlobalClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalClustersCommandOutput> {
    return deserializeAws_queryDescribeGlobalClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
