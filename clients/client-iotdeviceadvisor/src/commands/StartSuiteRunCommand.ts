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
import { StartSuiteRunRequest, StartSuiteRunResponse } from "../models/models_0";
import { de_StartSuiteRunCommand, se_StartSuiteRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSuiteRunCommand}.
 */
export interface StartSuiteRunCommandInput extends StartSuiteRunRequest {}
/**
 * @public
 *
 * The output of {@link StartSuiteRunCommand}.
 */
export interface StartSuiteRunCommandOutput extends StartSuiteRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a Device Advisor test suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, StartSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, StartSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // StartSuiteRunRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteDefinitionVersion: "STRING_VALUE",
 *   suiteRunConfiguration: { // SuiteRunConfiguration
 *     primaryDevice: { // DeviceUnderTest
 *       thingArn: "STRING_VALUE",
 *       certificateArn: "STRING_VALUE",
 *       deviceRoleArn: "STRING_VALUE",
 *     },
 *     selectedTestList: [ // SelectedTestList
 *       "STRING_VALUE",
 *     ],
 *     parallelRun: true || false,
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartSuiteRunCommand(input);
 * const response = await client.send(command);
 * // { // StartSuiteRunResponse
 * //   suiteRunId: "STRING_VALUE",
 * //   suiteRunArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   endpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSuiteRunCommandInput - {@link StartSuiteRunCommandInput}
 * @returns {@link StartSuiteRunCommandOutput}
 * @see {@link StartSuiteRunCommandInput} for command's `input` shape.
 * @see {@link StartSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Sends a Conflict Exception.</p>
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
export class StartSuiteRunCommand extends $Command<
  StartSuiteRunCommandInput,
  StartSuiteRunCommandOutput,
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
  constructor(readonly input: StartSuiteRunCommandInput) {
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
  ): Handler<StartSuiteRunCommandInput, StartSuiteRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartSuiteRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "StartSuiteRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotSenateService",
        operation: "StartSuiteRun",
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
  private serialize(input: StartSuiteRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSuiteRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSuiteRunCommandOutput> {
    return de_StartSuiteRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
