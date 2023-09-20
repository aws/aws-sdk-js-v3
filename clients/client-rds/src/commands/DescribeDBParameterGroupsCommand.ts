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

import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_1";
import { de_DescribeDBParameterGroupsCommand, se_DescribeDBParameterGroupsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBParameterGroupsCommand}.
 */
export interface DescribeDBParameterGroupsCommandInput extends DescribeDBParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBParameterGroupsCommand}.
 */
export interface DescribeDBParameterGroupsCommandOutput extends DBParameterGroupsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified,
 *             the list will contain only the description of the specified DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBParameterGroupsMessage
 *   DBParameterGroupName: "STRING_VALUE",
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
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   DBParameterGroups: [ // DBParameterGroupList
 * //     { // DBParameterGroup
 * //       DBParameterGroupName: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DBParameterGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBParameterGroupsCommandInput - {@link DescribeDBParameterGroupsCommandInput}
 * @returns {@link DescribeDBParameterGroupsCommandOutput}
 * @see {@link DescribeDBParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe your DB parameter groups
 * ```javascript
 * // The following example retrieves details about your DB parameter groups.
 * const input = {};
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBParameterGroups": [
 *     {
 *       "DBParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:pg:default.aurora-mysql5.7",
 *       "DBParameterGroupFamily": "aurora-mysql5.7",
 *       "DBParameterGroupName": "default.aurora-mysql5.7",
 *       "Description": "Default parameter group for aurora-mysql5.7"
 *     },
 *     {
 *       "DBParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:pg:default.aurora-postgresql9.6",
 *       "DBParameterGroupFamily": "aurora-postgresql9.6",
 *       "DBParameterGroupName": "default.aurora-postgresql9.6",
 *       "Description": "Default parameter group for aurora-postgresql9.6"
 *     },
 *     {
 *       "DBParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:pg:default.aurora5.6",
 *       "DBParameterGroupFamily": "aurora5.6",
 *       "DBParameterGroupName": "default.aurora5.6",
 *       "Description": "Default parameter group for aurora5.6"
 *     },
 *     {
 *       "DBParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:pg:default.mariadb10.1",
 *       "DBParameterGroupFamily": "mariadb10.1",
 *       "DBParameterGroupName": "default.mariadb10.1",
 *       "Description": "Default parameter group for mariadb10.1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-your-db-parameter-groups-1680279250598
 * ```
 *
 */
export class DescribeDBParameterGroupsCommand extends $Command<
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeDBParameterGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBParameterGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBParameterGroups",
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
  private serialize(input: DescribeDBParameterGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBParameterGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBParameterGroupsCommandOutput> {
    return de_DescribeDBParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
