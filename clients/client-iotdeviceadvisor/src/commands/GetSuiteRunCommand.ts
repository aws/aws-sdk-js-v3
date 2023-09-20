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
import { GetSuiteRunRequest, GetSuiteRunResponse } from "../models/models_0";
import { de_GetSuiteRunCommand, se_GetSuiteRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSuiteRunCommand}.
 */
export interface GetSuiteRunCommandInput extends GetSuiteRunRequest {}
/**
 * @public
 *
 * The output of {@link GetSuiteRunCommand}.
 */
export interface GetSuiteRunCommandOutput extends GetSuiteRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a Device Advisor test suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // GetSuiteRunRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteRunId: "STRING_VALUE", // required
 * };
 * const command = new GetSuiteRunCommand(input);
 * const response = await client.send(command);
 * // { // GetSuiteRunResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionVersion: "STRING_VALUE",
 * //   suiteRunId: "STRING_VALUE",
 * //   suiteRunArn: "STRING_VALUE",
 * //   suiteRunConfiguration: { // SuiteRunConfiguration
 * //     primaryDevice: { // DeviceUnderTest
 * //       thingArn: "STRING_VALUE",
 * //       certificateArn: "STRING_VALUE",
 * //       deviceRoleArn: "STRING_VALUE",
 * //     },
 * //     selectedTestList: [ // SelectedTestList
 * //       "STRING_VALUE",
 * //     ],
 * //     parallelRun: true || false,
 * //   },
 * //   testResult: { // TestResult
 * //     groups: [ // GroupResultList
 * //       { // GroupResult
 * //         groupId: "STRING_VALUE",
 * //         groupName: "STRING_VALUE",
 * //         tests: [ // TestCaseRuns
 * //           { // TestCaseRun
 * //             testCaseRunId: "STRING_VALUE",
 * //             testCaseDefinitionId: "STRING_VALUE",
 * //             testCaseDefinitionName: "STRING_VALUE",
 * //             status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             logUrl: "STRING_VALUE",
 * //             warnings: "STRING_VALUE",
 * //             failure: "STRING_VALUE",
 * //             testScenarios: [ // TestCaseScenariosList
 * //               { // TestCaseScenario
 * //                 testCaseScenarioId: "STRING_VALUE",
 * //                 testCaseScenarioType: "Advanced" || "Basic",
 * //                 status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //                 failure: "STRING_VALUE",
 * //                 systemMessage: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //   errorReason: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSuiteRunCommandInput - {@link GetSuiteRunCommandInput}
 * @returns {@link GetSuiteRunCommandOutput}
 * @see {@link GetSuiteRunCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunCommandOutput} for command's `response` shape.
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
export class GetSuiteRunCommand extends $Command<
  GetSuiteRunCommandInput,
  GetSuiteRunCommandOutput,
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
  constructor(readonly input: GetSuiteRunCommandInput) {
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
  ): Handler<GetSuiteRunCommandInput, GetSuiteRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSuiteRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "GetSuiteRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotSenateService",
        operation: "GetSuiteRun",
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
  private serialize(input: GetSuiteRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSuiteRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteRunCommandOutput> {
    return de_GetSuiteRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
