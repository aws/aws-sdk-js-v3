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
  DescribeExtensionPackAssociationsMessage,
  DescribeExtensionPackAssociationsResponse,
} from "../models/models_0";
import {
  de_DescribeExtensionPackAssociationsCommand,
  se_DescribeExtensionPackAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExtensionPackAssociationsCommand}.
 */
export interface DescribeExtensionPackAssociationsCommandInput extends DescribeExtensionPackAssociationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeExtensionPackAssociationsCommand}.
 */
export interface DescribeExtensionPackAssociationsCommandOutput
  extends DescribeExtensionPackAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of extension pack associations for the specified migration project.
 *          An extension pack is an add-on module
 *          that emulates functions present in a source database that are required when converting objects
 *          to the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeExtensionPackAssociationsMessage
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
 * const command = new DescribeExtensionPackAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExtensionPackAssociationsResponse
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
 * @param DescribeExtensionPackAssociationsCommandInput - {@link DescribeExtensionPackAssociationsCommandInput}
 * @returns {@link DescribeExtensionPackAssociationsCommandOutput}
 * @see {@link DescribeExtensionPackAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeExtensionPackAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe Extension Pack Associations
 * ```javascript
 * // Returns a paginated list of extension pack associations for the specified migration project.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "instance-profile-identifier",
 *       "Values": [
 *         "arn:aws:dms:us-east-1:012345678901:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 *       ]
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MaxRecords": 20,
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new DescribeExtensionPackAssociationsCommand(input);
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
 * // example id: describe-extension-pack-associations-1689718322580
 * ```
 *
 */
export class DescribeExtensionPackAssociationsCommand extends $Command<
  DescribeExtensionPackAssociationsCommandInput,
  DescribeExtensionPackAssociationsCommandOutput,
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
  constructor(readonly input: DescribeExtensionPackAssociationsCommandInput) {
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
  ): Handler<DescribeExtensionPackAssociationsCommandInput, DescribeExtensionPackAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExtensionPackAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeExtensionPackAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeExtensionPackAssociations",
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
    input: DescribeExtensionPackAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeExtensionPackAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeExtensionPackAssociationsCommandOutput> {
    return de_DescribeExtensionPackAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
