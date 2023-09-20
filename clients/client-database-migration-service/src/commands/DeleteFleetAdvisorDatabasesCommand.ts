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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DeleteFleetAdvisorDatabasesRequest, DeleteFleetAdvisorDatabasesResponse } from "../models/models_0";
import { de_DeleteFleetAdvisorDatabasesCommand, se_DeleteFleetAdvisorDatabasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetAdvisorDatabasesCommand}.
 */
export interface DeleteFleetAdvisorDatabasesCommandInput extends DeleteFleetAdvisorDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetAdvisorDatabasesCommand}.
 */
export interface DeleteFleetAdvisorDatabasesCommandOutput
  extends DeleteFleetAdvisorDatabasesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Fleet Advisor collector databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteFleetAdvisorDatabasesRequest
 *   DatabaseIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteFleetAdvisorDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetAdvisorDatabasesResponse
 * //   DatabaseIds: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFleetAdvisorDatabasesCommandInput - {@link DeleteFleetAdvisorDatabasesCommandInput}
 * @returns {@link DeleteFleetAdvisorDatabasesCommandOutput}
 * @see {@link DeleteFleetAdvisorDatabasesCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetAdvisorDatabasesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidOperationFault} (client fault)
 *  <p>The action or operation requested isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DeleteFleetAdvisorDatabasesCommand extends $Command<
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
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
  constructor(readonly input: DeleteFleetAdvisorDatabasesCommandInput) {
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
  ): Handler<DeleteFleetAdvisorDatabasesCommandInput, DeleteFleetAdvisorDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFleetAdvisorDatabasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteFleetAdvisorDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DeleteFleetAdvisorDatabases",
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
  private serialize(input: DeleteFleetAdvisorDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFleetAdvisorDatabasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFleetAdvisorDatabasesCommandOutput> {
    return de_DeleteFleetAdvisorDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
