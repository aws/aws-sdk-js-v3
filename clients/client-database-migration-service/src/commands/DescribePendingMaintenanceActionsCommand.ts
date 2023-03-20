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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribePendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePendingMaintenanceActionsCommand,
  serializeAws_json1_1DescribePendingMaintenanceActionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribePendingMaintenanceActionsCommand}.
 */
export interface DescribePendingMaintenanceActionsCommandInput extends DescribePendingMaintenanceActionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribePendingMaintenanceActionsCommand}.
 */
export interface DescribePendingMaintenanceActionsCommandOutput
  extends DescribePendingMaintenanceActionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>For internal use only</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribePendingMaintenanceActionsCommandInput - {@link DescribePendingMaintenanceActionsCommandInput}
 * @returns {@link DescribePendingMaintenanceActionsCommandOutput}
 * @see {@link DescribePendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 *
 */
export class DescribePendingMaintenanceActionsCommand extends $Command<
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePendingMaintenanceActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribePendingMaintenanceActionsCommand";
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
    input: DescribePendingMaintenanceActionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePendingMaintenanceActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> {
    return deserializeAws_json1_1DescribePendingMaintenanceActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
