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
  DescribeTableRestoreStatusMessage,
  DescribeTableRestoreStatusMessageFilterSensitiveLog,
  TableRestoreStatusMessage,
  TableRestoreStatusMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeTableRestoreStatusCommand,
  serializeAws_queryDescribeTableRestoreStatusCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeTableRestoreStatusCommandInput extends DescribeTableRestoreStatusMessage {}
export interface DescribeTableRestoreStatusCommandOutput extends TableRestoreStatusMessage, __MetadataBearer {}

/**
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTableRestoreStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTableRestoreStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeTableRestoreStatusCommand extends $Command<
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
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

  constructor(readonly input: DescribeTableRestoreStatusCommandInput) {
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
  ): Handler<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTableRestoreStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeTableRestoreStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableRestoreStatusMessageFilterSensitiveLog,
      outputFilterSensitiveLog: TableRestoreStatusMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTableRestoreStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTableRestoreStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTableRestoreStatusCommandOutput> {
    return deserializeAws_queryDescribeTableRestoreStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
