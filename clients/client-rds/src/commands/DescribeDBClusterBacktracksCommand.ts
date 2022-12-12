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
  DBClusterBacktrackMessage,
  DBClusterBacktrackMessageFilterSensitiveLog,
  DescribeDBClusterBacktracksMessage,
  DescribeDBClusterBacktracksMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterBacktracksCommand,
  serializeAws_queryDescribeDBClusterBacktracksCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeDBClusterBacktracksCommandInput extends DescribeDBClusterBacktracksMessage {}
export interface DescribeDBClusterBacktracksCommandOutput extends DBClusterBacktrackMessage, __MetadataBearer {}

/**
 * <p>Returns information about backtracks for a DB cluster.</p>
 *          <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterBacktracksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterBacktracksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBClusterBacktracksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterBacktracksCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterBacktracksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeDBClusterBacktracksCommand extends $Command<
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: DescribeDBClusterBacktracksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterBacktracksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterBacktracksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterBacktracksMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterBacktrackMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBClusterBacktracksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterBacktracksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterBacktracksCommandOutput> {
    return deserializeAws_queryDescribeDBClusterBacktracksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
