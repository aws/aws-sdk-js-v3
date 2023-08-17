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
import {
  DescribeMetadataModelExportsToTargetMessage,
  DescribeMetadataModelExportsToTargetResponse,
} from "../models/models_0";
import {
  de_DescribeMetadataModelExportsToTargetCommand,
  se_DescribeMetadataModelExportsToTargetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelExportsToTargetCommand}.
 */
export interface DescribeMetadataModelExportsToTargetCommandInput extends DescribeMetadataModelExportsToTargetMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelExportsToTargetCommand}.
 */
export interface DescribeMetadataModelExportsToTargetCommandOutput
  extends DescribeMetadataModelExportsToTargetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of metadata model exports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelExportsToTargetCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelExportsToTargetCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelExportsToTargetMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeMetadataModelExportsToTargetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelExportsToTargetResponse
 * //   Marker: "STRING_VALUE",
 * //   Requests: [ // SchemaConversionRequestList
 * //     { // SchemaConversionRequest
 * //       Status: "STRING_VALUE",
 * //       RequestIdentifier: "STRING_VALUE",
 * //       MigrationProjectArn: "STRING_VALUE",
 * //       Error: { // ErrorDetails Union: only one key present
 * //         defaultErrorDetails: { // DefaultErrorDetails
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       ExportSqlDetails: { // ExportSqlDetails
 * //         S3ObjectKey: "STRING_VALUE",
 * //         ObjectURL: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetadataModelExportsToTargetCommandInput - {@link DescribeMetadataModelExportsToTargetCommandInput}
 * @returns {@link DescribeMetadataModelExportsToTargetCommandOutput}
 * @see {@link DescribeMetadataModelExportsToTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelExportsToTargetCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeMetadataModelExportsToTargetCommand extends $Command<
  DescribeMetadataModelExportsToTargetCommandInput,
  DescribeMetadataModelExportsToTargetCommandOutput,
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
  constructor(readonly input: DescribeMetadataModelExportsToTargetCommandInput) {
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
  ): Handler<DescribeMetadataModelExportsToTargetCommandInput, DescribeMetadataModelExportsToTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMetadataModelExportsToTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeMetadataModelExportsToTargetCommand";
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
    input: DescribeMetadataModelExportsToTargetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMetadataModelExportsToTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMetadataModelExportsToTargetCommandOutput> {
    return de_DescribeMetadataModelExportsToTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
