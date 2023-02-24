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
  DescribeDataSharesForProducerMessage,
  DescribeDataSharesForProducerMessageFilterSensitiveLog,
  DescribeDataSharesForProducerResult,
  DescribeDataSharesForProducerResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDataSharesForProducerCommand,
  serializeAws_queryDescribeDataSharesForProducerCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeDataSharesForProducerCommandInput extends DescribeDataSharesForProducerMessage {}
export interface DescribeDataSharesForProducerCommandOutput
  extends DescribeDataSharesForProducerResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of datashares when the account identifier being called is a producer account identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesForProducerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDataSharesForProducerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeDataSharesForProducerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSharesForProducerCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesForProducerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeDataSharesForProducerCommand extends $Command<
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
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

  constructor(readonly input: DescribeDataSharesForProducerCommandInput) {
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
  ): Handler<DescribeDataSharesForProducerCommandInput, DescribeDataSharesForProducerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataSharesForProducerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeDataSharesForProducerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataSharesForProducerMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataSharesForProducerResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataSharesForProducerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDataSharesForProducerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataSharesForProducerCommandOutput> {
    return deserializeAws_queryDescribeDataSharesForProducerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
