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
import { ListSuiteRunsRequest, ListSuiteRunsResponse } from "../models/models_0";
import { de_ListSuiteRunsCommand, se_ListSuiteRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSuiteRunsCommand}.
 */
export interface ListSuiteRunsCommandInput extends ListSuiteRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListSuiteRunsCommand}.
 */
export interface ListSuiteRunsCommandOutput extends ListSuiteRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test
 *             suite, or the runs of a specific version of the test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteRunsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteRunsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // ListSuiteRunsRequest
 *   suiteDefinitionId: "STRING_VALUE",
 *   suiteDefinitionVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSuiteRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListSuiteRunsResponse
 * //   suiteRunsList: [ // SuiteRunsList
 * //     { // SuiteRunInformation
 * //       suiteDefinitionId: "STRING_VALUE",
 * //       suiteDefinitionVersion: "STRING_VALUE",
 * //       suiteDefinitionName: "STRING_VALUE",
 * //       suiteRunId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endAt: new Date("TIMESTAMP"),
 * //       status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //       passed: Number("int"),
 * //       failed: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSuiteRunsCommandInput - {@link ListSuiteRunsCommandInput}
 * @returns {@link ListSuiteRunsCommandOutput}
 * @see {@link ListSuiteRunsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteRunsCommandOutput} for command's `response` shape.
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
export class ListSuiteRunsCommand extends $Command<
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
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
  constructor(readonly input: ListSuiteRunsCommandInput) {
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
  ): Handler<ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSuiteRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "ListSuiteRunsCommand";
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
  private serialize(input: ListSuiteRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSuiteRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSuiteRunsCommandOutput> {
    return de_ListSuiteRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
