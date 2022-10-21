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
  DBClusterEndpointMessage,
  DBClusterEndpointMessageFilterSensitiveLog,
  DescribeDBClusterEndpointsMessage,
  DescribeDBClusterEndpointsMessageFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryDescribeDBClusterEndpointsCommand,
  serializeAws_queryDescribeDBClusterEndpointsCommand,
} from "../protocols/Aws_query";

export interface DescribeDBClusterEndpointsCommandInput extends DescribeDBClusterEndpointsMessage {}
export interface DescribeDBClusterEndpointsCommandOutput extends DBClusterEndpointMessage, __MetadataBearer {}

/**
 * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *         and Amazon DocDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterEndpointsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterEndpointsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterEndpointsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class DescribeDBClusterEndpointsCommand extends $Command<
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
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

  constructor(readonly input: DescribeDBClusterEndpointsCommandInput) {
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
  ): Handler<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBClusterEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterEndpointsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterEndpointMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBClusterEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterEndpointsCommandOutput> {
    return deserializeAws_queryDescribeDBClusterEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
