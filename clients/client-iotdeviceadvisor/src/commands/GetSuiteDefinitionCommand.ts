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
} from "@smithy/types";

import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetSuiteDefinitionRequest, GetSuiteDefinitionResponse } from "../models/models_0";
import { de_GetSuiteDefinitionCommand, se_GetSuiteDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSuiteDefinitionCommand}.
 */
export interface GetSuiteDefinitionCommandInput extends GetSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetSuiteDefinitionCommand}.
 */
export interface GetSuiteDefinitionCommandOutput extends GetSuiteDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // GetSuiteDefinitionRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteDefinitionVersion: "STRING_VALUE",
 * };
 * const command = new GetSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetSuiteDefinitionResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionArn: "STRING_VALUE",
 * //   suiteDefinitionVersion: "STRING_VALUE",
 * //   latestVersion: "STRING_VALUE",
 * //   suiteDefinitionConfiguration: { // SuiteDefinitionConfiguration
 * //     suiteDefinitionName: "STRING_VALUE", // required
 * //     devices: [ // DeviceUnderTestList
 * //       { // DeviceUnderTest
 * //         thingArn: "STRING_VALUE",
 * //         certificateArn: "STRING_VALUE",
 * //         deviceRoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     intendedForQualification: true || false,
 * //     isLongDurationTest: true || false,
 * //     rootGroup: "STRING_VALUE", // required
 * //     devicePermissionRoleArn: "STRING_VALUE", // required
 * //     protocol: "MqttV3_1_1" || "MqttV5" || "MqttV3_1_1_OverWebSocket" || "MqttV5_OverWebSocket",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSuiteDefinitionCommandInput - {@link GetSuiteDefinitionCommandInput}
 * @returns {@link GetSuiteDefinitionCommandOutput}
 * @see {@link GetSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Sends an Internal Failure exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Sends a Resource Not Found exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Sends a validation exception.</p>
 *
 * @throws {@link IotDeviceAdvisorServiceException}
 * <p>Base exception class for all service exceptions from IotDeviceAdvisor service.</p>
 *
 */
export class GetSuiteDefinitionCommand extends $Command<
  GetSuiteDefinitionCommandInput,
  GetSuiteDefinitionCommandOutput,
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
  constructor(readonly input: GetSuiteDefinitionCommandInput) {
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
  ): Handler<GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSuiteDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "GetSuiteDefinitionCommand";
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
  private serialize(input: GetSuiteDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSuiteDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteDefinitionCommandOutput> {
    return de_GetSuiteDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
