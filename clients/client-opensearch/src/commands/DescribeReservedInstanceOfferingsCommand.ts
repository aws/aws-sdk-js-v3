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
  DescribeReservedInstanceOfferingsRequest,
  DescribeReservedInstanceOfferingsResponse,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1DescribeReservedInstanceOfferingsCommand,
  serializeAws_restJson1DescribeReservedInstanceOfferingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeReservedInstanceOfferingsCommand}.
 */
export interface DescribeReservedInstanceOfferingsCommandInput extends DescribeReservedInstanceOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservedInstanceOfferingsCommand}.
 */
export interface DescribeReservedInstanceOfferingsCommandOutput
  extends DescribeReservedInstanceOfferingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the available Amazon OpenSearch Service Reserved Instance offerings for a given
 *    Region. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ri.html">Reserved Instances in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeReservedInstanceOfferingsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeReservedInstanceOfferingsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DescribeReservedInstanceOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReservedInstanceOfferingsCommandInput - {@link DescribeReservedInstanceOfferingsCommandInput}
 * @returns {@link DescribeReservedInstanceOfferingsCommandOutput}
 * @see {@link DescribeReservedInstanceOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstanceOfferingsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist..</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 *
 */
export class DescribeReservedInstanceOfferingsCommand extends $Command<
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: DescribeReservedInstanceOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedInstanceOfferingsCommandInput, DescribeReservedInstanceOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedInstanceOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeReservedInstanceOfferingsCommand";
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
    input: DescribeReservedInstanceOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReservedInstanceOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedInstanceOfferingsCommandOutput> {
    return deserializeAws_restJson1DescribeReservedInstanceOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
