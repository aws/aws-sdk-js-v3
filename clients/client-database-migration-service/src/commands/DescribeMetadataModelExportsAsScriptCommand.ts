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
  DescribeMetadataModelExportsAsScriptMessage,
  DescribeMetadataModelExportsAsScriptResponse,
} from "../models/models_0";
import {
  de_DescribeMetadataModelExportsAsScriptCommand,
  se_DescribeMetadataModelExportsAsScriptCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelExportsAsScriptCommand}.
 */
export interface DescribeMetadataModelExportsAsScriptCommandInput extends DescribeMetadataModelExportsAsScriptMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelExportsAsScriptCommand}.
 */
export interface DescribeMetadataModelExportsAsScriptCommandOutput
  extends DescribeMetadataModelExportsAsScriptResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of metadata model exports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelExportsAsScriptMessage
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
 * const command = new DescribeMetadataModelExportsAsScriptCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelExportsAsScriptResponse
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
 * @param DescribeMetadataModelExportsAsScriptCommandInput - {@link DescribeMetadataModelExportsAsScriptCommandInput}
 * @returns {@link DescribeMetadataModelExportsAsScriptCommandOutput}
 * @see {@link DescribeMetadataModelExportsAsScriptCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelExportsAsScriptCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe Metadata Model Exports As Script
 * ```javascript
 * // Returns a paginated list of metadata model exports.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "request-id",
 *       "Values": [
 *         "01234567-89ab-cdef-0123-456789abcdef"
 *       ]
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MaxRecords": 20,
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new DescribeMetadataModelExportsAsScriptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "Requests": [
 *     {
 *       "MigrationProjectArn": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *       "RequestIdentifier": "01234567-89ab-cdef-0123-456789abcdef",
 *       "Status": "SUCCESS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-metadata-model-exports-as-script-1689719253938
 * ```
 *
 */
export class DescribeMetadataModelExportsAsScriptCommand extends $Command<
  DescribeMetadataModelExportsAsScriptCommandInput,
  DescribeMetadataModelExportsAsScriptCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
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
  constructor(readonly input: DescribeMetadataModelExportsAsScriptCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMetadataModelExportsAsScriptCommandInput, DescribeMetadataModelExportsAsScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMetadataModelExportsAsScriptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeMetadataModelExportsAsScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeMetadataModelExportsAsScript",
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
    input: DescribeMetadataModelExportsAsScriptCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMetadataModelExportsAsScriptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMetadataModelExportsAsScriptCommandOutput> {
    return de_DescribeMetadataModelExportsAsScriptCommand(output, context);
  }
}
