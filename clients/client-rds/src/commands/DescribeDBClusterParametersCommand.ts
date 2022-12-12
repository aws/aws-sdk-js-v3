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
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupDetailsFilterSensitiveLog,
  DescribeDBClusterParametersMessage,
  DescribeDBClusterParametersMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterParametersCommand,
  serializeAws_queryDescribeDBClusterParametersCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeDBClusterParametersCommandInput extends DescribeDBClusterParametersMessage {}
export interface DescribeDBClusterParametersCommandOutput extends DBClusterParameterGroupDetails, __MetadataBearer {}

/**
 * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeDBClusterParametersCommand extends $Command<
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
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

  constructor(readonly input: DescribeDBClusterParametersCommandInput) {
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
  ): Handler<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterParametersMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterParameterGroupDetailsFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBClusterParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterParametersCommandOutput> {
    return deserializeAws_queryDescribeDBClusterParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
