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
  ClusterVersionsMessage,
  ClusterVersionsMessageFilterSensitiveLog,
  DescribeClusterVersionsMessage,
  DescribeClusterVersionsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterVersionsCommand,
  serializeAws_queryDescribeClusterVersionsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeClusterVersionsCommandInput extends DescribeClusterVersionsMessage {}
export interface DescribeClusterVersionsCommandOutput extends ClusterVersionsMessage, __MetadataBearer {}

/**
 * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
 *
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterVersionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterVersionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterVersionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeClusterVersionsCommand extends $Command<
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
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

  constructor(readonly input: DescribeClusterVersionsCommandInput) {
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
  ): Handler<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterVersionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ClusterVersionsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterVersionsCommandOutput> {
    return deserializeAws_queryDescribeClusterVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
