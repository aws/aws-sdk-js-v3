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
  ModifyClusterMaintenanceMessage,
  ModifyClusterMaintenanceMessageFilterSensitiveLog,
  ModifyClusterMaintenanceResult,
  ModifyClusterMaintenanceResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyClusterMaintenanceCommand,
  serializeAws_queryModifyClusterMaintenanceCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface ModifyClusterMaintenanceCommandInput extends ModifyClusterMaintenanceMessage {}
export interface ModifyClusterMaintenanceCommandOutput extends ModifyClusterMaintenanceResult, __MetadataBearer {}

/**
 * <p>Modifies the maintenance settings of a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterMaintenanceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterMaintenanceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterMaintenanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterMaintenanceCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class ModifyClusterMaintenanceCommand extends $Command<
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: ModifyClusterMaintenanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyClusterMaintenanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterMaintenanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterMaintenanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterMaintenanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterMaintenanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterMaintenanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterMaintenanceCommandOutput> {
    return deserializeAws_queryModifyClusterMaintenanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
