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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/models_0";
import { de_DescribeDBClusterParametersCommand, se_DescribeDBClusterParametersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterParametersCommand}.
 */
export interface DescribeDBClusterParametersCommandInput extends DescribeDBClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterParametersCommand}.
 */
export interface DescribeDBClusterParametersCommandOutput extends DBClusterParameterGroupDetails, __MetadataBearer {}

/**
 * @public
 * <p>Returns the detailed parameter list for a particular cluster parameter
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterParametersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterParametersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBClusterParametersMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
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
 * const command = new DescribeDBClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupDetails
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       ApplyType: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       ApplyMethod: "immediate" || "pending-reboot",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterParametersCommandInput - {@link DescribeDBClusterParametersCommandInput}
 * @returns {@link DescribeDBClusterParametersCommandOutput}
 * @see {@link DescribeDBClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class DescribeDBClusterParametersCommand extends $Command<
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
  DocDBClientResolvedConfig
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
  constructor(readonly input: DescribeDBClusterParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBClusterParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterParameters",
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
  private serialize(input: DescribeDBClusterParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClusterParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterParametersCommandOutput> {
    return de_DescribeDBClusterParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
