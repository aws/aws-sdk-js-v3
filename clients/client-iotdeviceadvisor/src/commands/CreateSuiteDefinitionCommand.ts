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

import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse } from "../models/models_0";
import { de_CreateSuiteDefinitionCommand, se_CreateSuiteDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSuiteDefinitionCommand}.
 */
export interface CreateSuiteDefinitionCommandInput extends CreateSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSuiteDefinitionCommand}.
 */
export interface CreateSuiteDefinitionCommandOutput extends CreateSuiteDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // CreateSuiteDefinitionRequest
 *   suiteDefinitionConfiguration: { // SuiteDefinitionConfiguration
 *     suiteDefinitionName: "STRING_VALUE", // required
 *     devices: [ // DeviceUnderTestList
 *       { // DeviceUnderTest
 *         thingArn: "STRING_VALUE",
 *         certificateArn: "STRING_VALUE",
 *         deviceRoleArn: "STRING_VALUE",
 *       },
 *     ],
 *     intendedForQualification: true || false,
 *     isLongDurationTest: true || false,
 *     rootGroup: "STRING_VALUE", // required
 *     devicePermissionRoleArn: "STRING_VALUE", // required
 *     protocol: "MqttV3_1_1" || "MqttV5" || "MqttV3_1_1_OverWebSocket" || "MqttV5_OverWebSocket",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSuiteDefinitionResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionArn: "STRING_VALUE",
 * //   suiteDefinitionName: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSuiteDefinitionCommandInput - {@link CreateSuiteDefinitionCommandInput}
 * @returns {@link CreateSuiteDefinitionCommandOutput}
 * @see {@link CreateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Sends an Internal Failure exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Sends a validation exception.</p>
 *
 * @throws {@link IotDeviceAdvisorServiceException}
 * <p>Base exception class for all service exceptions from IotDeviceAdvisor service.</p>
 *
 */
export class CreateSuiteDefinitionCommand extends $Command<
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
> {
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
  constructor(readonly input: CreateSuiteDefinitionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IotDeviceAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSuiteDefinitionCommandInput, CreateSuiteDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSuiteDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "CreateSuiteDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotSenateService",
        operation: "CreateSuiteDefinition",
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
  private serialize(input: CreateSuiteDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSuiteDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSuiteDefinitionCommandOutput> {
    return de_CreateSuiteDefinitionCommand(output, context);
  }
}
