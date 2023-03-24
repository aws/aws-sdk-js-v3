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
import { DescribeAcceleratorOfferingsRequest, DescribeAcceleratorOfferingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAcceleratorOfferingsCommand,
  serializeAws_restJson1DescribeAcceleratorOfferingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeAcceleratorOfferingsCommand}.
 */
export interface DescribeAcceleratorOfferingsCommandInput extends DescribeAcceleratorOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcceleratorOfferingsCommand}.
 */
export interface DescribeAcceleratorOfferingsCommandOutput
  extends DescribeAcceleratorOfferingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Describes the locations in which a given accelerator type or set of types is present in a given region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const input = {
 *   locationType: "STRING_VALUE", // required
 *   acceleratorTypes: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAcceleratorOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAcceleratorOfferingsCommandInput - {@link DescribeAcceleratorOfferingsCommandInput}
 * @returns {@link DescribeAcceleratorOfferingsCommandOutput}
 * @see {@link DescribeAcceleratorOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for ElasticInferenceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>
 *             Raised when a malformed input has been provided to the API.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Raised when an unexpected error occurred during request processing.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             Raised when the requested resource cannot be found.
 *         </p>
 *
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

  /**
   * @public
   */
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
  private serialize(input: DescribeAcceleratorOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAcceleratorOfferingsCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
