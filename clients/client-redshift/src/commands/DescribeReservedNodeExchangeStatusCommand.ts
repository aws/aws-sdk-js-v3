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
  DescribeReservedNodeExchangeStatusInputMessage,
  DescribeReservedNodeExchangeStatusOutputMessage,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeReservedNodeExchangeStatusCommand,
  serializeAws_queryDescribeReservedNodeExchangeStatusCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link DescribeReservedNodeExchangeStatusCommand}.
 */
export interface DescribeReservedNodeExchangeStatusCommandInput
  extends DescribeReservedNodeExchangeStatusInputMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodeExchangeStatusCommand}.
 */
export interface DescribeReservedNodeExchangeStatusCommandOutput
  extends DescribeReservedNodeExchangeStatusOutputMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns exchange status details and associated metadata for a reserved-node
 *             exchange. Statuses include such values as in progress and requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodeExchangeStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodeExchangeStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeReservedNodeExchangeStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReservedNodeExchangeStatusCommandInput - {@link DescribeReservedNodeExchangeStatusCommandInput}
 * @returns {@link DescribeReservedNodeExchangeStatusCommandOutput}
 * @see {@link DescribeReservedNodeExchangeStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodeExchangeStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ReservedNodeExchangeNotFoundFault} (client fault)
 *  <p>The reserved-node exchange status wasn't found.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 *
 */
export class DescribeReservedNodeExchangeStatusCommand extends $Command<
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeReservedNodeExchangeStatusCommandInput) {
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
  ): Handler<DescribeReservedNodeExchangeStatusCommandInput, DescribeReservedNodeExchangeStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedNodeExchangeStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeReservedNodeExchangeStatusCommand";
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
  private serialize(
    input: DescribeReservedNodeExchangeStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedNodeExchangeStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedNodeExchangeStatusCommandOutput> {
    return deserializeAws_queryDescribeReservedNodeExchangeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
