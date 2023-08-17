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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListDetectMitigationActionsExecutionsRequest,
  ListDetectMitigationActionsExecutionsResponse,
} from "../models/models_1";
import {
  de_ListDetectMitigationActionsExecutionsCommand,
  se_ListDetectMitigationActionsExecutionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDetectMitigationActionsExecutionsCommand}.
 */
export interface ListDetectMitigationActionsExecutionsCommandInput
  extends ListDetectMitigationActionsExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectMitigationActionsExecutionsCommand}.
 */
export interface ListDetectMitigationActionsExecutionsCommandOutput
  extends ListDetectMitigationActionsExecutionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListDetectMitigationActionsExecutionsRequest
 *   taskId: "STRING_VALUE",
 *   violationId: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDetectMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectMitigationActionsExecutionsResponse
 * //   actionsExecutions: [ // DetectMitigationActionExecutionList
 * //     { // DetectMitigationActionExecution
 * //       taskId: "STRING_VALUE",
 * //       violationId: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       thingName: "STRING_VALUE",
 * //       executionStartDate: new Date("TIMESTAMP"),
 * //       executionEndDate: new Date("TIMESTAMP"),
 * //       status: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "SKIPPED",
 * //       errorCode: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectMitigationActionsExecutionsCommandInput - {@link ListDetectMitigationActionsExecutionsCommandInput}
 * @returns {@link ListDetectMitigationActionsExecutionsCommandOutput}
 * @see {@link ListDetectMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsExecutionsCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListDetectMitigationActionsExecutionsCommand extends $Command<
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
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
  constructor(readonly input: ListDetectMitigationActionsExecutionsCommandInput) {
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
  ): Handler<ListDetectMitigationActionsExecutionsCommandInput, ListDetectMitigationActionsExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDetectMitigationActionsExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListDetectMitigationActionsExecutionsCommand";
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
    input: ListDetectMitigationActionsExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListDetectMitigationActionsExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDetectMitigationActionsExecutionsCommandOutput> {
    return de_ListDetectMitigationActionsExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
