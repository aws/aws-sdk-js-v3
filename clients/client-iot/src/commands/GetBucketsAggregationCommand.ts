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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetBucketsAggregationRequest, GetBucketsAggregationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetBucketsAggregationCommand,
  serializeAws_restJson1GetBucketsAggregationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetBucketsAggregationCommand}.
 */
export interface GetBucketsAggregationCommandInput extends GetBucketsAggregationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketsAggregationCommand}.
 */
export interface GetBucketsAggregationCommandOutput extends GetBucketsAggregationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Aggregates on indexed data with search queries pertaining to particular fields. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBucketsAggregationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBucketsAggregationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetBucketsAggregationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetBucketsAggregationCommandInput - {@link GetBucketsAggregationCommandInput}
 * @returns {@link GetBucketsAggregationCommandOutput}
 * @see {@link GetBucketsAggregationCommandInput} for command's `input` shape.
 * @see {@link GetBucketsAggregationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidAggregationException} (client fault)
 *  <p>The aggregation is invalid.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 *
 */
export class GetBucketsAggregationCommand extends $Command<
  GetBucketsAggregationCommandInput,
  GetBucketsAggregationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: GetBucketsAggregationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketsAggregationCommandInput, GetBucketsAggregationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketsAggregationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetBucketsAggregationCommand";
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
  private serialize(input: GetBucketsAggregationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBucketsAggregationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketsAggregationCommandOutput> {
    return deserializeAws_restJson1GetBucketsAggregationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
