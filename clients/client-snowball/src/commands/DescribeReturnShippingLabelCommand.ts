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
  DescribeReturnShippingLabelRequest,
  DescribeReturnShippingLabelRequestFilterSensitiveLog,
  DescribeReturnShippingLabelResult,
  DescribeReturnShippingLabelResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReturnShippingLabelCommand,
  serializeAws_json1_1DescribeReturnShippingLabelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface DescribeReturnShippingLabelCommandInput extends DescribeReturnShippingLabelRequest {}
export interface DescribeReturnShippingLabelCommandOutput extends DescribeReturnShippingLabelResult, __MetadataBearer {}

/**
 * <p>Information on the shipping label of a Snow device that is being returned to Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class DescribeReturnShippingLabelCommand extends $Command<
  DescribeReturnShippingLabelCommandInput,
  DescribeReturnShippingLabelCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: DescribeReturnShippingLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReturnShippingLabelCommandInput, DescribeReturnShippingLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReturnShippingLabelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "DescribeReturnShippingLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReturnShippingLabelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReturnShippingLabelResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReturnShippingLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReturnShippingLabelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReturnShippingLabelCommandOutput> {
    return deserializeAws_json1_1DescribeReturnShippingLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
