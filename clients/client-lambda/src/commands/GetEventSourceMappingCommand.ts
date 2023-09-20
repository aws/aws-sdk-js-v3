// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { EventSourceMappingConfiguration, GetEventSourceMappingRequest } from "../models/models_0";
import { de_GetEventSourceMappingCommand, se_GetEventSourceMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEventSourceMappingCommand}.
 */
export interface GetEventSourceMappingCommandInput extends GetEventSourceMappingRequest {}
/**
 * @public
 *
 * The output of {@link GetEventSourceMappingCommand}.
 */
export interface GetEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of
 *         <a>ListEventSourceMappings</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetEventSourceMappingRequest
 *   UUID: "STRING_VALUE", // required
 * };
 * const command = new GetEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * // { // EventSourceMappingConfiguration
 * //   UUID: "STRING_VALUE",
 * //   StartingPosition: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP",
 * //   StartingPositionTimestamp: new Date("TIMESTAMP"),
 * //   BatchSize: Number("int"),
 * //   MaximumBatchingWindowInSeconds: Number("int"),
 * //   ParallelizationFactor: Number("int"),
 * //   EventSourceArn: "STRING_VALUE",
 * //   FilterCriteria: { // FilterCriteria
 * //     Filters: [ // FilterList
 * //       { // Filter
 * //         Pattern: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   FunctionArn: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   LastProcessingResult: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   StateTransitionReason: "STRING_VALUE",
 * //   DestinationConfig: { // DestinationConfig
 * //     OnSuccess: { // OnSuccess
 * //       Destination: "STRING_VALUE",
 * //     },
 * //     OnFailure: { // OnFailure
 * //       Destination: "STRING_VALUE",
 * //     },
 * //   },
 * //   Topics: [ // Topics
 * //     "STRING_VALUE",
 * //   ],
 * //   Queues: [ // Queues
 * //     "STRING_VALUE",
 * //   ],
 * //   SourceAccessConfigurations: [ // SourceAccessConfigurations
 * //     { // SourceAccessConfiguration
 * //       Type: "BASIC_AUTH" || "VPC_SUBNET" || "VPC_SECURITY_GROUP" || "SASL_SCRAM_512_AUTH" || "SASL_SCRAM_256_AUTH" || "VIRTUAL_HOST" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE",
 * //       URI: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SelfManagedEventSource: { // SelfManagedEventSource
 * //     Endpoints: { // Endpoints
 * //       "<keys>": [ // EndpointLists
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   MaximumRecordAgeInSeconds: Number("int"),
 * //   BisectBatchOnFunctionError: true || false,
 * //   MaximumRetryAttempts: Number("int"),
 * //   TumblingWindowInSeconds: Number("int"),
 * //   FunctionResponseTypes: [ // FunctionResponseTypeList
 * //     "ReportBatchItemFailures",
 * //   ],
 * //   AmazonManagedKafkaEventSourceConfig: { // AmazonManagedKafkaEventSourceConfig
 * //     ConsumerGroupId: "STRING_VALUE",
 * //   },
 * //   SelfManagedKafkaEventSourceConfig: { // SelfManagedKafkaEventSourceConfig
 * //     ConsumerGroupId: "STRING_VALUE",
 * //   },
 * //   ScalingConfig: { // ScalingConfig
 * //     MaximumConcurrency: Number("int"),
 * //   },
 * //   DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 * //     DatabaseName: "STRING_VALUE",
 * //     CollectionName: "STRING_VALUE",
 * //     FullDocument: "UpdateLookup" || "Default",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventSourceMappingCommandInput - {@link GetEventSourceMappingCommandInput}
 * @returns {@link GetEventSourceMappingCommandOutput}
 * @see {@link GetEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link GetEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export class GetEventSourceMappingCommand extends $Command<
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: GetEventSourceMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventSourceMappingCommandInput, GetEventSourceMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventSourceMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetEventSourceMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "GetEventSourceMapping",
      },
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
  private serialize(input: GetEventSourceMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEventSourceMappingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventSourceMappingCommandOutput> {
    return de_GetEventSourceMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
