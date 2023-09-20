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

import { ClusterParameterGroupDetails, DescribeClusterParametersMessage } from "../models/models_0";
import { de_DescribeClusterParametersCommand, se_DescribeClusterParametersCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterParametersCommand}.
 */
export interface DescribeClusterParametersCommandInput extends DescribeClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterParametersCommand}.
 */
export interface DescribeClusterParametersCommandOutput extends ClusterParameterGroupDetails, __MetadataBearer {}

/**
 * @public
 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
 *             parameter group. For each parameter the response includes information such as parameter
 *             name, description, data type, value, whether the parameter value is modifiable, and so
 *             on.</p>
 *          <p>You can specify <i>source</i> filter to retrieve parameters of only
 *             specific type. For example, to retrieve parameters that were modified by a user action
 *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
 *                 <i>source</i> equal to <i>user</i>.</p>
 *          <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterParametersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterParametersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterParametersMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // ClusterParameterGroupDetails
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       ApplyType: "static" || "dynamic",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClusterParametersCommandInput - {@link DescribeClusterParametersCommandInput}
 * @returns {@link DescribeClusterParametersCommandOutput}
 * @see {@link DescribeClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeClusterParametersCommand extends $Command<
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeClusterParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeClusterParameters",
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
  private serialize(input: DescribeClusterParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterParametersCommandOutput> {
    return de_DescribeClusterParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
