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
import { DescribeEndpointTypesMessage, DescribeEndpointTypesResponse } from "../models/models_0";
import { de_DescribeEndpointTypesCommand, se_DescribeEndpointTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointTypesCommand}.
 */
export interface DescribeEndpointTypesCommandInput extends DescribeEndpointTypesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointTypesCommand}.
 */
export interface DescribeEndpointTypesCommandOutput extends DescribeEndpointTypesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the type of endpoints available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEndpointTypesMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointTypesResponse
 * //   Marker: "STRING_VALUE",
 * //   SupportedEndpointTypes: [ // SupportedEndpointTypeList
 * //     { // SupportedEndpointType
 * //       EngineName: "STRING_VALUE",
 * //       SupportsCDC: true || false,
 * //       EndpointType: "source" || "target",
 * //       ReplicationInstanceEngineMinimumVersion: "STRING_VALUE",
 * //       EngineDisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointTypesCommandInput - {@link DescribeEndpointTypesCommandInput}
 * @returns {@link DescribeEndpointTypesCommandOutput}
 * @see {@link DescribeEndpointTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointTypesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe endpoint types
 * ```javascript
 * // Returns information about the type of endpoints available.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "string",
 *       "Values": [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeEndpointTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "SupportedEndpointTypes": []
 * }
 * *\/
 * // example id: describe-endpoint-types-1481754742591
 * ```
 *
 */
export class DescribeEndpointTypesCommand extends $Command<
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
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
  constructor(readonly input: DescribeEndpointTypesCommandInput) {
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
  ): Handler<DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEndpointTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeEndpointTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeEndpointTypes",
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
  private serialize(input: DescribeEndpointTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEndpointTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointTypesCommandOutput> {
    return de_DescribeEndpointTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
