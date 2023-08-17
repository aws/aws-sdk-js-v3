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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DeleteCollectorRequest } from "../models/models_0";
import { de_DeleteFleetAdvisorCollectorCommand, se_DeleteFleetAdvisorCollectorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetAdvisorCollectorCommand}.
 */
export interface DeleteFleetAdvisorCollectorCommandInput extends DeleteCollectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetAdvisorCollectorCommand}.
 */
export interface DeleteFleetAdvisorCollectorCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Fleet Advisor collector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteCollectorRequest
 *   CollectorReferencedId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFleetAdvisorCollectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFleetAdvisorCollectorCommandInput - {@link DeleteFleetAdvisorCollectorCommandInput}
 * @returns {@link DeleteFleetAdvisorCollectorCommandOutput}
 * @see {@link DeleteFleetAdvisorCollectorCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetAdvisorCollectorCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link CollectorNotFoundFault} (client fault)
 *  <p>The specified collector doesn't exist.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DeleteFleetAdvisorCollectorCommand extends $Command<
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
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
  constructor(readonly input: DeleteFleetAdvisorCollectorCommandInput) {
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
  ): Handler<DeleteFleetAdvisorCollectorCommandInput, DeleteFleetAdvisorCollectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFleetAdvisorCollectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteFleetAdvisorCollectorCommand";
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
  private serialize(input: DeleteFleetAdvisorCollectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFleetAdvisorCollectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFleetAdvisorCollectorCommandOutput> {
    return de_DeleteFleetAdvisorCollectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
