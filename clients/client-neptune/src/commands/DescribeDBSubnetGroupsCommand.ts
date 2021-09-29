import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBSubnetGroupsCommand,
  serializeAws_queryDescribeDBSubnetGroupsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeDBSubnetGroupsCommandInput extends DescribeDBSubnetGroupsMessage {}
export interface DescribeDBSubnetGroupsCommandOutput extends DBSubnetGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the
 *       list will contain only the descriptions of the specified DBSubnetGroup.</p>
 *          <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBSubnetGroupsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDBSubnetGroupsCommand extends $Command<
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBSubnetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBSubnetGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBSubnetGroupMessage.filterSensitiveLog,
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
