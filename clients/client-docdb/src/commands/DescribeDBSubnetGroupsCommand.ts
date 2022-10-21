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
  DBSubnetGroupMessage,
  DBSubnetGroupMessageFilterSensitiveLog,
  DescribeDBSubnetGroupsMessage,
  DescribeDBSubnetGroupsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBSubnetGroupsCommand,
  serializeAws_queryDescribeDBSubnetGroupsCommand,
} from "../protocols/Aws_query";

export interface DescribeDBSubnetGroupsCommandInput extends DescribeDBSubnetGroupsMessage {}
export interface DescribeDBSubnetGroupsCommandOutput extends DBSubnetGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBSubnetGroup</code> descriptions. If a
 *                 <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBSubnetGroupsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class DescribeDBSubnetGroupsCommand extends $Command<
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
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

  constructor(readonly input: DescribeDBSubnetGroupsCommandInput) {
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
  ): Handler<DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBSubnetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBSubnetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBSubnetGroupsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBSubnetGroupMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBSubnetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBSubnetGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBSubnetGroupsCommandOutput> {
    return deserializeAws_queryDescribeDBSubnetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
