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

import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import {
  DescribeAcceleratorTypesRequest,
  DescribeAcceleratorTypesRequestFilterSensitiveLog,
  DescribeAcceleratorTypesResponse,
  DescribeAcceleratorTypesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAcceleratorTypesCommand,
  serializeAws_restJson1DescribeAcceleratorTypesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAcceleratorTypesCommandInput extends DescribeAcceleratorTypesRequest {}
export interface DescribeAcceleratorTypesCommandOutput extends DescribeAcceleratorTypesResponse, __MetadataBearer {}

/**
 * <p>
 *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorTypesCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorTypesCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for ElasticInferenceClient's `config` shape.
 *
 */
export class DescribeAcceleratorTypesCommand extends $Command<
  DescribeAcceleratorTypesCommandInput,
  DescribeAcceleratorTypesCommandOutput,
  ElasticInferenceClientResolvedConfig
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

  constructor(readonly input: DescribeAcceleratorTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticInferenceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAcceleratorTypesCommandInput, DescribeAcceleratorTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAcceleratorTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAcceleratorTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAcceleratorTypesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAcceleratorTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAcceleratorTypesCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
