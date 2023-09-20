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
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/models_1";
import { de_RefreshSchemasCommand, se_RefreshSchemasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RefreshSchemasCommand}.
 */
export interface RefreshSchemasCommandInput extends RefreshSchemasMessage {}
/**
 * @public
 *
 * The output of {@link RefreshSchemasCommand}.
 */
export interface RefreshSchemasCommandOutput extends RefreshSchemasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RefreshSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RefreshSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // RefreshSchemasMessage
 *   EndpointArn: "STRING_VALUE", // required
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * // { // RefreshSchemasResponse
 * //   RefreshSchemasStatus: { // RefreshSchemasStatus
 * //     EndpointArn: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     Status: "successful" || "failed" || "refreshing",
 * //     LastRefreshDate: new Date("TIMESTAMP"),
 * //     LastFailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RefreshSchemasCommandInput - {@link RefreshSchemasCommandInput}
 * @returns {@link RefreshSchemasCommandOutput}
 * @see {@link RefreshSchemasCommandInput} for command's `input` shape.
 * @see {@link RefreshSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Refresh schema
 * ```javascript
 * // Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the describe-refresh-schemas-status operation.
 * const input = {
 *   "EndpointArn": "",
 *   "ReplicationInstanceArn": ""
 * };
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RefreshSchemasStatus": {}
 * }
 * *\/
 * // example id: refresh-schema-1481762399111
 * ```
 *
 */
export class RefreshSchemasCommand extends $Command<
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput,
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
  constructor(readonly input: RefreshSchemasCommandInput) {
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
  ): Handler<RefreshSchemasCommandInput, RefreshSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RefreshSchemasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "RefreshSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "RefreshSchemas",
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
  private serialize(input: RefreshSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RefreshSchemasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshSchemasCommandOutput> {
    return de_RefreshSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
