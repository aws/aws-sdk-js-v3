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

import { ResizeProgressMessage, ResizeProgressMessageFilterSensitiveLog } from "../models/models_0";
import { DescribeResizeMessage, DescribeResizeMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryDescribeResizeCommand,
  serializeAws_queryDescribeResizeCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeResizeCommandInput extends DescribeResizeMessage {}
export interface DescribeResizeCommandOutput extends ResizeProgressMessage, __MetadataBearer {}

/**
 * <p>Returns information about the last resize operation for the specified cluster. If
 *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
 *                 404</code> error is returned. If a resize operation was initiated and completed, the
 *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
 *         <p>A resize operation can be requested using <a>ModifyCluster</a> and
 *             specifying a different number or type of nodes for the cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeResizeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResizeCommandInput} for command's `input` shape.
 * @see {@link DescribeResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeResizeCommand extends $Command<
  DescribeResizeCommandInput,
  DescribeResizeCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DescribeResizeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResizeCommandInput, DescribeResizeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeResizeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeResizeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeResizeMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ResizeProgressMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeResizeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeResizeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeResizeCommandOutput> {
    return deserializeAws_queryDescribeResizeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
