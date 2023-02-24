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

import {
  UpdateMaintenanceWindowRequest,
  UpdateMaintenanceWindowRequestFilterSensitiveLog,
  UpdateMaintenanceWindowResult,
  UpdateMaintenanceWindowResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowCommand,
  serializeAws_json1_1UpdateMaintenanceWindowCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateMaintenanceWindowCommandInput extends UpdateMaintenanceWindowRequest {}
export interface UpdateMaintenanceWindowCommandOutput extends UpdateMaintenanceWindowResult, __MetadataBearer {}

/**
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
 * const command = new UpdateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
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
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMaintenanceWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceWindowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMaintenanceWindowCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
