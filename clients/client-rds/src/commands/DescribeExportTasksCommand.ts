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

import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeExportTasksCommand,
  serializeAws_queryDescribeExportTasksCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandInput extends DescribeExportTasksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandOutput extends ExportTasksMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a snapshot or cluster export to Amazon S3. This API operation supports
 *             pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeExportTasksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeExportTasksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   ExportTaskIdentifier: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   SourceType: "SNAPSHOT" || "CLUSTER",
 * };
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeExportTasksCommandInput - {@link DescribeExportTasksCommandInput}
 * @returns {@link DescribeExportTasksCommandOutput}
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ExportTaskNotFoundFault} (client fault)
 *  <p>The export task doesn't exist.</p>
 *
 *
 */
export class DescribeExportTasksCommand extends $Command<
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeExportTasksCommandInput) {
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
  ): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExportTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeExportTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeExportTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeExportTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExportTasksCommandOutput> {
    return deserializeAws_queryDescribeExportTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
