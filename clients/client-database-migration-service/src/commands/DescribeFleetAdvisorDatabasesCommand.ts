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
import { DescribeFleetAdvisorDatabasesRequest, DescribeFleetAdvisorDatabasesResponse } from "../models/models_0";
import {
  de_DescribeFleetAdvisorDatabasesCommand,
  se_DescribeFleetAdvisorDatabasesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorDatabasesCommand}.
 */
export interface DescribeFleetAdvisorDatabasesCommandInput extends DescribeFleetAdvisorDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorDatabasesCommand}.
 */
export interface DescribeFleetAdvisorDatabasesCommandOutput
  extends DescribeFleetAdvisorDatabasesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Fleet Advisor databases in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorDatabasesRequest
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
 * const command = new DescribeFleetAdvisorDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorDatabasesResponse
 * //   Databases: [ // DatabaseList
 * //     { // DatabaseResponse
 * //       DatabaseId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       NumberOfSchemas: Number("long"),
 * //       Server: { // ServerShortInfoResponse
 * //         ServerId: "STRING_VALUE",
 * //         IpAddress: "STRING_VALUE",
 * //         ServerName: "STRING_VALUE",
 * //       },
 * //       SoftwareDetails: { // DatabaseInstanceSoftwareDetailsResponse
 * //         Engine: "STRING_VALUE",
 * //         EngineVersion: "STRING_VALUE",
 * //         EngineEdition: "STRING_VALUE",
 * //         ServicePack: "STRING_VALUE",
 * //         SupportLevel: "STRING_VALUE",
 * //         OsArchitecture: Number("int"),
 * //         Tooltip: "STRING_VALUE",
 * //       },
 * //       Collectors: [ // CollectorsList
 * //         { // CollectorShortInfoResponse
 * //           CollectorReferencedId: "STRING_VALUE",
 * //           CollectorName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorDatabasesCommandInput - {@link DescribeFleetAdvisorDatabasesCommandInput}
 * @returns {@link DescribeFleetAdvisorDatabasesCommandOutput}
 * @see {@link DescribeFleetAdvisorDatabasesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorDatabasesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeFleetAdvisorDatabasesCommand extends $Command<
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
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
  constructor(readonly input: DescribeFleetAdvisorDatabasesCommandInput) {
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
  ): Handler<DescribeFleetAdvisorDatabasesCommandInput, DescribeFleetAdvisorDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetAdvisorDatabasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeFleetAdvisorDatabasesCommand";
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
  private serialize(input: DescribeFleetAdvisorDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFleetAdvisorDatabasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetAdvisorDatabasesCommandOutput> {
    return de_DescribeFleetAdvisorDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
