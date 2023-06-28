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
import { DescribeFleetAdvisorSchemasRequest, DescribeFleetAdvisorSchemasResponse } from "../models/models_0";
import { de_DescribeFleetAdvisorSchemasCommand, se_DescribeFleetAdvisorSchemasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorSchemasCommand}.
 */
export interface DescribeFleetAdvisorSchemasCommandInput extends DescribeFleetAdvisorSchemasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorSchemasCommand}.
 */
export interface DescribeFleetAdvisorSchemasCommandOutput
  extends DescribeFleetAdvisorSchemasResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of schemas detected by Fleet Advisor Collectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorSchemasRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetAdvisorSchemasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorSchemasResponse
 * //   FleetAdvisorSchemas: [ // FleetAdvisorSchemaList
 * //     { // SchemaResponse
 * //       CodeLineCount: Number("long"),
 * //       CodeSize: Number("long"),
 * //       Complexity: "STRING_VALUE",
 * //       Server: { // ServerShortInfoResponse
 * //         ServerId: "STRING_VALUE",
 * //         IpAddress: "STRING_VALUE",
 * //         ServerName: "STRING_VALUE",
 * //       },
 * //       DatabaseInstance: { // DatabaseShortInfoResponse
 * //         DatabaseId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         DatabaseIpAddress: "STRING_VALUE",
 * //         DatabaseEngine: "STRING_VALUE",
 * //       },
 * //       SchemaId: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       OriginalSchema: { // SchemaShortInfoResponse
 * //         SchemaId: "STRING_VALUE",
 * //         SchemaName: "STRING_VALUE",
 * //         DatabaseId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         DatabaseIpAddress: "STRING_VALUE",
 * //       },
 * //       Similarity: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorSchemasCommandInput - {@link DescribeFleetAdvisorSchemasCommandInput}
 * @returns {@link DescribeFleetAdvisorSchemasCommandOutput}
 * @see {@link DescribeFleetAdvisorSchemasCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeFleetAdvisorSchemasCommand extends $Command<
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
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
  constructor(readonly input: DescribeFleetAdvisorSchemasCommandInput) {
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
  ): Handler<DescribeFleetAdvisorSchemasCommandInput, DescribeFleetAdvisorSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetAdvisorSchemasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeFleetAdvisorSchemasCommand";
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
  private serialize(input: DescribeFleetAdvisorSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFleetAdvisorSchemasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetAdvisorSchemasCommandOutput> {
    return de_DescribeFleetAdvisorSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
