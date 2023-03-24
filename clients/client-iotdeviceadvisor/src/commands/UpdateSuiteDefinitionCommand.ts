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

import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { UpdateSuiteDefinitionRequest, UpdateSuiteDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSuiteDefinitionCommand,
  serializeAws_restJson1UpdateSuiteDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateSuiteDefinitionCommand}.
 */
export interface UpdateSuiteDefinitionCommandInput extends UpdateSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSuiteDefinitionCommand}.
 */
export interface UpdateSuiteDefinitionCommandOutput extends UpdateSuiteDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, UpdateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, UpdateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = {
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteDefinitionConfiguration: {
 *     suiteDefinitionName: "STRING_VALUE", // required
 *     devices: [
 *       {
 *         thingArn: "STRING_VALUE",
 *         certificateArn: "STRING_VALUE",
 *       },
 *     ],
 *     intendedForQualification: true || false,
 *     isLongDurationTest: true || false,
 *     rootGroup: "STRING_VALUE", // required
 *     devicePermissionRoleArn: "STRING_VALUE", // required
 *     protocol: "MqttV3_1_1" || "MqttV5",
 *   },
 * };
 * const command = new UpdateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSuiteDefinitionCommandInput - {@link UpdateSuiteDefinitionCommandInput}
 * @returns {@link UpdateSuiteDefinitionCommandOutput}
 * @see {@link UpdateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Sends an Internal Failure exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Sends a validation exception.</p>
 *
 *
 */
export class UpdateSuiteDefinitionCommand extends $Command<
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
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
  constructor(readonly input: UpdateSuiteDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IotDeviceAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSuiteDefinitionCommandInput, UpdateSuiteDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSuiteDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "UpdateSuiteDefinitionCommand";
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
  private serialize(input: UpdateSuiteDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSuiteDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSuiteDefinitionCommandOutput> {
    return deserializeAws_restJson1UpdateSuiteDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
