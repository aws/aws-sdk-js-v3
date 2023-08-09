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
import { StartAuditMitigationActionsTaskRequest, StartAuditMitigationActionsTaskResponse } from "../models/models_2";
import {
  de_StartAuditMitigationActionsTaskCommand,
  se_StartAuditMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAuditMitigationActionsTaskCommand}.
 */
export interface StartAuditMitigationActionsTaskCommandInput extends StartAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartAuditMitigationActionsTaskCommand}.
 */
export interface StartAuditMitigationActionsTaskCommandOutput
  extends StartAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // StartAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 *   target: { // AuditMitigationActionsTaskTarget
 *     auditTaskId: "STRING_VALUE",
 *     findingIds: [ // FindingIds
 *       "STRING_VALUE",
 *     ],
 *     auditCheckToReasonCodeFilter: { // AuditCheckToReasonCodeFilter
 *       "<keys>": [ // ReasonForNonComplianceCodes
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   auditCheckToActionsMapping: { // AuditCheckToActionsMapping // required
 *     "<keys>": [ // MitigationActionNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new StartAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartAuditMitigationActionsTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAuditMitigationActionsTaskCommandInput - {@link StartAuditMitigationActionsTaskCommandInput}
 * @returns {@link StartAuditMitigationActionsTaskCommandOutput}
 * @see {@link StartAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link TaskAlreadyExistsException} (client fault)
 *  <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class StartAuditMitigationActionsTaskCommand extends $Command<
  StartAuditMitigationActionsTaskCommandInput,
  StartAuditMitigationActionsTaskCommandOutput,
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
  constructor(readonly input: StartAuditMitigationActionsTaskCommandInput) {
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
  ): Handler<StartAuditMitigationActionsTaskCommandInput, StartAuditMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAuditMitigationActionsTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "StartAuditMitigationActionsTaskCommand";
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
    input: StartAuditMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartAuditMitigationActionsTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAuditMitigationActionsTaskCommandOutput> {
    return de_StartAuditMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
