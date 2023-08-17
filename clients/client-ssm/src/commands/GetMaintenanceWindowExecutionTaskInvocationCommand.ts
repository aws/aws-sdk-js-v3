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

import {
  GetMaintenanceWindowExecutionTaskInvocationRequest,
  GetMaintenanceWindowExecutionTaskInvocationResult,
  GetMaintenanceWindowExecutionTaskInvocationResultFilterSensitiveLog,
} from "../models/models_1";
import {
  de_GetMaintenanceWindowExecutionTaskInvocationCommand,
  se_GetMaintenanceWindowExecutionTaskInvocationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowExecutionTaskInvocationCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskInvocationCommandInput
  extends GetMaintenanceWindowExecutionTaskInvocationRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowExecutionTaskInvocationCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskInvocationCommandOutput
  extends GetMaintenanceWindowExecutionTaskInvocationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a specific task running on a specific target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowExecutionTaskInvocationRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 *   TaskId: "STRING_VALUE", // required
 *   InvocationId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowExecutionTaskInvocationResult
 * //   WindowExecutionId: "STRING_VALUE",
 * //   TaskExecutionId: "STRING_VALUE",
 * //   InvocationId: "STRING_VALUE",
 * //   ExecutionId: "STRING_VALUE",
 * //   TaskType: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //   Parameters: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //   StatusDetails: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   OwnerInformation: "STRING_VALUE",
 * //   WindowTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowExecutionTaskInvocationCommandInput - {@link GetMaintenanceWindowExecutionTaskInvocationCommandInput}
 * @returns {@link GetMaintenanceWindowExecutionTaskInvocationCommandOutput}
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetMaintenanceWindowExecutionTaskInvocationCommand extends $Command<
  GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: GetMaintenanceWindowExecutionTaskInvocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    GetMaintenanceWindowExecutionTaskInvocationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetMaintenanceWindowExecutionTaskInvocationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowExecutionTaskInvocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskInvocationResultFilterSensitiveLog,
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
    input: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetMaintenanceWindowExecutionTaskInvocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> {
    return de_GetMaintenanceWindowExecutionTaskInvocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
