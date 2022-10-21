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
  DBInstanceMessage,
  DBInstanceMessageFilterSensitiveLog,
  DescribeDBInstancesMessage,
  DescribeDBInstancesMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBInstancesCommand,
  serializeAws_queryDescribeDBInstancesCommand,
} from "../protocols/Aws_query";

export interface DescribeDBInstancesCommandInput extends DescribeDBInstancesMessage {}
export interface DescribeDBInstancesCommandOutput extends DBInstanceMessage, __MetadataBearer {}

/**
 * <p>Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBInstancesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class DescribeDBInstancesCommand extends $Command<
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
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

  constructor(readonly input: DescribeDBInstancesCommandInput) {
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
  ): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBInstancesMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBInstanceMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBInstancesCommandOutput> {
    return deserializeAws_queryDescribeDBInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
