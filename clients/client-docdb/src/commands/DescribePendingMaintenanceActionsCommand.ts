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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  DescribePendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsMessageFilterSensitiveLog,
  PendingMaintenanceActionsMessage,
  PendingMaintenanceActionsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribePendingMaintenanceActionsCommand,
  serializeAws_queryDescribePendingMaintenanceActionsCommand,
} from "../protocols/Aws_query";

export interface DescribePendingMaintenanceActionsCommandInput extends DescribePendingMaintenanceActionsMessage {}
export interface DescribePendingMaintenanceActionsCommandOutput
  extends PendingMaintenanceActionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of resources (for example, instances) that have at least one pending
 *             maintenance action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class DescribePendingMaintenanceActionsCommand extends $Command<
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: DescribePendingMaintenanceActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePendingMaintenanceActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribePendingMaintenanceActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePendingMaintenanceActionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: PendingMaintenanceActionsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePendingMaintenanceActionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribePendingMaintenanceActionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> {
    return deserializeAws_queryDescribePendingMaintenanceActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
