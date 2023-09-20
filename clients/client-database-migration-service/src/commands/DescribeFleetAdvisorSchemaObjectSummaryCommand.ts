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
import {
  DescribeFleetAdvisorSchemaObjectSummaryRequest,
  DescribeFleetAdvisorSchemaObjectSummaryResponse,
} from "../models/models_0";
import {
  de_DescribeFleetAdvisorSchemaObjectSummaryCommand,
  se_DescribeFleetAdvisorSchemaObjectSummaryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorSchemaObjectSummaryCommand}.
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryCommandInput
  extends DescribeFleetAdvisorSchemaObjectSummaryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorSchemaObjectSummaryCommand}.
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryCommandOutput
  extends DescribeFleetAdvisorSchemaObjectSummaryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides descriptions of the schemas discovered by your Fleet Advisor
 *             collectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemaObjectSummaryCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemaObjectSummaryCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorSchemaObjectSummaryRequest
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
 * const command = new DescribeFleetAdvisorSchemaObjectSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorSchemaObjectSummaryResponse
 * //   FleetAdvisorSchemaObjects: [ // FleetAdvisorSchemaObjectList
 * //     { // FleetAdvisorSchemaObjectResponse
 * //       SchemaId: "STRING_VALUE",
 * //       ObjectType: "STRING_VALUE",
 * //       NumberOfObjects: Number("long"),
 * //       CodeLineCount: Number("long"),
 * //       CodeSize: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorSchemaObjectSummaryCommandInput - {@link DescribeFleetAdvisorSchemaObjectSummaryCommandInput}
 * @returns {@link DescribeFleetAdvisorSchemaObjectSummaryCommandOutput}
 * @see {@link DescribeFleetAdvisorSchemaObjectSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorSchemaObjectSummaryCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeFleetAdvisorSchemaObjectSummaryCommand extends $Command<
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
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
  constructor(readonly input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput) {
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
  ): Handler<
    DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    DescribeFleetAdvisorSchemaObjectSummaryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeFleetAdvisorSchemaObjectSummaryCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeFleetAdvisorSchemaObjectSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeFleetAdvisorSchemaObjectSummary",
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
  private serialize(
    input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeFleetAdvisorSchemaObjectSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> {
    return de_DescribeFleetAdvisorSchemaObjectSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
