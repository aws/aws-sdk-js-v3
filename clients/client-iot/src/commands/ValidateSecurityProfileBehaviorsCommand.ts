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
import { ValidateSecurityProfileBehaviorsRequest, ValidateSecurityProfileBehaviorsResponse } from "../models/models_2";
import {
  deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand,
  serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ValidateSecurityProfileBehaviorsCommand}.
 */
export interface ValidateSecurityProfileBehaviorsCommandInput extends ValidateSecurityProfileBehaviorsRequest {}
/**
 * @public
 *
 * The output of {@link ValidateSecurityProfileBehaviorsCommand}.
 */
export interface ValidateSecurityProfileBehaviorsCommandOutput
  extends ValidateSecurityProfileBehaviorsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ValidateSecurityProfileBehaviorsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ValidateSecurityProfileBehaviorsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = {
 *   behaviors: [ // required
 *     {
 *       name: "STRING_VALUE", // required
 *       metric: "STRING_VALUE",
 *       metricDimension: {
 *         dimensionName: "STRING_VALUE", // required
 *         operator: "IN" || "NOT_IN",
 *       },
 *       criteria: {
 *         comparisonOperator: "less-than" || "less-than-equals" || "greater-than" || "greater-than-equals" || "in-cidr-set" || "not-in-cidr-set" || "in-port-set" || "not-in-port-set" || "in-set" || "not-in-set",
 *         value: {
 *           count: Number("long"),
 *           cidrs: [
 *             "STRING_VALUE",
 *           ],
 *           ports: [
 *             Number("int"),
 *           ],
 *           number: Number("double"),
 *           numbers: [
 *             Number("double"),
 *           ],
 *           strings: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         durationSeconds: Number("int"),
 *         consecutiveDatapointsToAlarm: Number("int"),
 *         consecutiveDatapointsToClear: Number("int"),
 *         statisticalThreshold: {
 *           statistic: "STRING_VALUE",
 *         },
 *         mlDetectionConfig: {
 *           confidenceLevel: "LOW" || "MEDIUM" || "HIGH", // required
 *         },
 *       },
 *       suppressAlerts: true || false,
 *     },
 *   ],
 * };
 * const command = new ValidateSecurityProfileBehaviorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ValidateSecurityProfileBehaviorsCommandInput - {@link ValidateSecurityProfileBehaviorsCommandInput}
 * @returns {@link ValidateSecurityProfileBehaviorsCommandOutput}
 * @see {@link ValidateSecurityProfileBehaviorsCommandInput} for command's `input` shape.
 * @see {@link ValidateSecurityProfileBehaviorsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 *
 */
export class ValidateSecurityProfileBehaviorsCommand extends $Command<
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
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
  constructor(readonly input: ValidateSecurityProfileBehaviorsCommandInput) {
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
  ): Handler<ValidateSecurityProfileBehaviorsCommandInput, ValidateSecurityProfileBehaviorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateSecurityProfileBehaviorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ValidateSecurityProfileBehaviorsCommand";
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
    input: ValidateSecurityProfileBehaviorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateSecurityProfileBehaviorsCommandOutput> {
    return deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
