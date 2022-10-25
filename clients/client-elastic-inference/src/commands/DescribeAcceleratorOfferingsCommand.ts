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
  DescribeAcceleratorOfferingsRequest,
  DescribeAcceleratorOfferingsRequestFilterSensitiveLog,
  DescribeAcceleratorOfferingsResponse,
  DescribeAcceleratorOfferingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAcceleratorOfferingsCommand,
  serializeAws_restJson1DescribeAcceleratorOfferingsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAcceleratorOfferingsCommandInput extends DescribeAcceleratorOfferingsRequest {}
export interface DescribeAcceleratorOfferingsCommandOutput
  extends DescribeAcceleratorOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Describes the locations in which a given accelerator type or set of types is present in a given region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for ElasticInferenceClient's `config` shape.
 *
 */
export class DescribeAcceleratorOfferingsCommand extends $Command<
  DescribeAcceleratorOfferingsCommandInput,
  DescribeAcceleratorOfferingsCommandOutput,
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

  constructor(readonly input: DescribeAcceleratorOfferingsCommandInput) {
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
  ): Handler<DescribeAcceleratorOfferingsCommandInput, DescribeAcceleratorOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAcceleratorOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAcceleratorOfferingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAcceleratorOfferingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAcceleratorOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAcceleratorOfferingsCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
