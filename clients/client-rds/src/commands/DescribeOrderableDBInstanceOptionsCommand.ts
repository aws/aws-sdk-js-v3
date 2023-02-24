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
  DescribeOrderableDBInstanceOptionsMessage,
  DescribeOrderableDBInstanceOptionsMessageFilterSensitiveLog,
  OrderableDBInstanceOptionsMessage,
  OrderableDBInstanceOptionsMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand,
  serializeAws_queryDescribeOrderableDBInstanceOptionsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeOrderableDBInstanceOptionsCommandInput extends DescribeOrderableDBInstanceOptionsMessage {}
export interface DescribeOrderableDBInstanceOptionsCommandOutput
  extends OrderableDBInstanceOptionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOrderableDBInstanceOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOrderableDBInstanceOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOrderableDBInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableDBInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableDBInstanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeOrderableDBInstanceOptionsCommand extends $Command<
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
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

  constructor(readonly input: DescribeOrderableDBInstanceOptionsCommandInput) {
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
  ): Handler<DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrderableDBInstanceOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOrderableDBInstanceOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrderableDBInstanceOptionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: OrderableDBInstanceOptionsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrderableDBInstanceOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOrderableDBInstanceOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> {
    return deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
