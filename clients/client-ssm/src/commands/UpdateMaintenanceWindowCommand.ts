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

import {
  UpdateMaintenanceWindowRequest,
  UpdateMaintenanceWindowRequestFilterSensitiveLog,
  UpdateMaintenanceWindowResult,
  UpdateMaintenanceWindowResultFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateMaintenanceWindowCommand, se_UpdateMaintenanceWindowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceWindowCommand}.
 */
export interface UpdateMaintenanceWindowCommandInput extends UpdateMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceWindowCommand}.
 */
export interface UpdateMaintenanceWindowCommandOutput extends UpdateMaintenanceWindowResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Schedule: "STRING_VALUE",
 *   ScheduleTimezone: "STRING_VALUE",
 *   ScheduleOffset: Number("int"),
 *   Duration: Number("int"),
 *   Cutoff: Number("int"),
 *   AllowUnassociatedTargets: true || false,
 *   Enabled: true || false,
 *   Replace: true || false,
 * };
 * const command = new UpdateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   StartDate: "STRING_VALUE",
 * //   EndDate: "STRING_VALUE",
 * //   Schedule: "STRING_VALUE",
 * //   ScheduleTimezone: "STRING_VALUE",
 * //   ScheduleOffset: Number("int"),
 * //   Duration: Number("int"),
 * //   Cutoff: Number("int"),
 * //   AllowUnassociatedTargets: true || false,
 * //   Enabled: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceWindowCommandInput - {@link UpdateMaintenanceWindowCommandInput}
 * @returns {@link UpdateMaintenanceWindowCommandOutput}
 * @see {@link UpdateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowCommandOutput} for command's `response` shape.
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
export class UpdateMaintenanceWindowCommand extends $Command<
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
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
  constructor(readonly input: UpdateMaintenanceWindowCommandInput) {
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
  ): Handler<UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMaintenanceWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "UpdateMaintenanceWindow",
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
  private serialize(input: UpdateMaintenanceWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMaintenanceWindowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMaintenanceWindowCommandOutput> {
    return de_UpdateMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
