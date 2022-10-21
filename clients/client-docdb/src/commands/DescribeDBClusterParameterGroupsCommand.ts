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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  DBClusterParameterGroupsMessage,
  DBClusterParameterGroupsMessageFilterSensitiveLog,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParameterGroupsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterParameterGroupsCommand,
  serializeAws_queryDescribeDBClusterParameterGroupsCommand,
} from "../protocols/Aws_query";

export interface DescribeDBClusterParameterGroupsCommandInput extends DescribeDBClusterParameterGroupsMessage {}
export interface DescribeDBClusterParameterGroupsCommandOutput
  extends DBClusterParameterGroupsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterParameterGroupsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterParameterGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class DescribeDBClusterParameterGroupsCommand extends $Command<
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: DescribeDBClusterParameterGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterParameterGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBClusterParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterParameterGroupsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterParameterGroupsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDBClusterParameterGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterParameterGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput> {
    return deserializeAws_queryDescribeDBClusterParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
