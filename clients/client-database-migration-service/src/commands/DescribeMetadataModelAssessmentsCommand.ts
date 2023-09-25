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
import { DescribeMetadataModelAssessmentsMessage, DescribeMetadataModelAssessmentsResponse } from "../models/models_0";
import {
  de_DescribeMetadataModelAssessmentsCommand,
  se_DescribeMetadataModelAssessmentsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelAssessmentsCommand}.
 */
export interface DescribeMetadataModelAssessmentsCommandInput extends DescribeMetadataModelAssessmentsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelAssessmentsCommand}.
 */
export interface DescribeMetadataModelAssessmentsCommandOutput
  extends DescribeMetadataModelAssessmentsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of metadata model assessments for your account in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelAssessmentsMessage
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
 * const command = new DescribeMetadataModelAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelAssessmentsResponse
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
 * @param DescribeMetadataModelAssessmentsCommandInput - {@link DescribeMetadataModelAssessmentsCommandInput}
 * @returns {@link DescribeMetadataModelAssessmentsCommandOutput}
 * @see {@link DescribeMetadataModelAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe Metadata Model Assessments
 * ```javascript
 * // Returns a paginated list of metadata model assessments for your account in the current region.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "my-migration-project",
 *       "Values": [
 *         "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 *       ]
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MaxRecords": 20,
 *   "MigrationProjectIdentifier": ""
 * };
 * const command = new DescribeMetadataModelAssessmentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "ASDLKJASDJKHDFHGDNBGDASKJHGFK",
 *   "Requests": [
 *     {
 *       "MigrationProjectArn": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *       "RequestIdentifier": "01234567-89ab-cdef-0123-456789abcdef",
 *       "Status": "SUCCESS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-metadata-model-assessments-1689718702303
 * ```
 *
 */
export class DescribeMetadataModelAssessmentsCommand extends $Command<
  DescribeMetadataModelAssessmentsCommandInput,
  DescribeMetadataModelAssessmentsCommandOutput,
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
  constructor(readonly input: DescribeMetadataModelAssessmentsCommandInput) {
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
  ): Handler<DescribeMetadataModelAssessmentsCommandInput, DescribeMetadataModelAssessmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMetadataModelAssessmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeMetadataModelAssessmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeMetadataModelAssessments",
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
    input: DescribeMetadataModelAssessmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMetadataModelAssessmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMetadataModelAssessmentsCommandOutput> {
    return de_DescribeMetadataModelAssessmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
