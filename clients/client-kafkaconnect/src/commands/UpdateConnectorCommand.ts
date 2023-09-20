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

import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_0";
import { de_UpdateConnectorCommand, se_UpdateConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandOutput extends UpdateConnectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, UpdateConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, UpdateConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const input = { // UpdateConnectorRequest
 *   capacity: { // CapacityUpdate
 *     autoScaling: { // AutoScalingUpdate
 *       maxWorkerCount: Number("int"), // required
 *       mcuCount: Number("int"), // required
 *       minWorkerCount: Number("int"), // required
 *       scaleInPolicy: { // ScaleInPolicyUpdate
 *         cpuUtilizationPercentage: Number("int"), // required
 *       },
 *       scaleOutPolicy: { // ScaleOutPolicyUpdate
 *         cpuUtilizationPercentage: Number("int"), // required
 *       },
 *     },
 *     provisionedCapacity: { // ProvisionedCapacityUpdate
 *       mcuCount: Number("int"), // required
 *       workerCount: Number("int"), // required
 *     },
 *   },
 *   connectorArn: "STRING_VALUE", // required
 *   currentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectorCommandInput - {@link UpdateConnectorCommandInput}
 * @returns {@link UpdateConnectorCommandOutput}
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 */
export class UpdateConnectorCommand extends $Command<
  UpdateConnectorCommandInput,
  UpdateConnectorCommandOutput,
  KafkaConnectClientResolvedConfig
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
  constructor(readonly input: UpdateConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectorCommandInput, UpdateConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "UpdateConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KafkaConnect",
        operation: "UpdateConnector",
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
  private serialize(input: UpdateConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConnectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectorCommandOutput> {
    return de_UpdateConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
