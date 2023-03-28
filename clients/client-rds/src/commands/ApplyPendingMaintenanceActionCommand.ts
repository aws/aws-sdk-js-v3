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

import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import {
  deserializeAws_queryApplyPendingMaintenanceActionCommand,
  serializeAws_queryApplyPendingMaintenanceActionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandInput extends ApplyPendingMaintenanceActionMessage {}
/**
 * @public
 *
 * The output of {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandOutput
  extends ApplyPendingMaintenanceActionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ApplyPendingMaintenanceActionMessage
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ApplyAction: "STRING_VALUE", // required
 *   OptInType: "STRING_VALUE", // required
 * };
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ApplyPendingMaintenanceActionCommandInput - {@link ApplyPendingMaintenanceActionCommandInput}
 * @returns {@link ApplyPendingMaintenanceActionCommandOutput}
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 *
 * @example To apply a pending maintenance action
 * ```javascript
 * // This example immediately applies a pending system update to a DB instance.
 * const input = {
 *   "ApplyAction": "system-update",
 *   "OptInType": "immediate",
 *   "ResourceIdentifier": "arn:aws:rds:us-east-1:992648334831:db:mymysqlinstance"
 * };
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ResourcePendingMaintenanceActions": {}
 * }
 * *\/
 * // example id: apply-pending-maintenance-action-2a026047-8bbb-47fc-b695-abad9f308c24
 * ```
 *
 */
export class ApplyPendingMaintenanceActionCommand extends $Command<
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ApplyPendingMaintenanceActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ApplyPendingMaintenanceActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ApplyPendingMaintenanceActionCommand";
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
  private serialize(input: ApplyPendingMaintenanceActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryApplyPendingMaintenanceActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> {
    return deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
