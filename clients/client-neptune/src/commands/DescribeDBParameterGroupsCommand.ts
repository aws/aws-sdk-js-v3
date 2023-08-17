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

import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DescribeDBParameterGroupsCommand, se_DescribeDBParameterGroupsCommand } from "../protocols/Aws_query";

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
 * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a
 *       <code>DBParameterGroupName</code> is specified, the list will contain only the description of
 *       the specified DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class DescribeDBParameterGroupsCommand extends $Command<
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
  NeptuneClientResolvedConfig
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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBParameterGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBParameterGroupsCommand";
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
