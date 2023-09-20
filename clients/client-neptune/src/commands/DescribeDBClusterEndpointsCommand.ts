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

import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DescribeDBClusterEndpointsCommand, se_DescribeDBClusterEndpointsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterEndpointsCommand}.
 */
export interface DescribeDBClusterEndpointsCommandInput extends DescribeDBClusterEndpointsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterEndpointsCommand}.
 */
export interface DescribeDBClusterEndpointsCommandOutput extends DBClusterEndpointMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *         and Amazon DocDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterEndpointsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterEndpointsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // DescribeDBClusterEndpointsMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   DBClusterEndpointIdentifier: "STRING_VALUE",
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
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterEndpointMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterEndpoints: [ // DBClusterEndpointList
 * //     { // DBClusterEndpoint
 * //       DBClusterEndpointIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       EndpointType: "STRING_VALUE",
 * //       CustomEndpointType: "STRING_VALUE",
 * //       StaticMembers: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ExcludedMembers: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterEndpointArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterEndpointsCommandInput - {@link DescribeDBClusterEndpointsCommandInput}
 * @returns {@link DescribeDBClusterEndpointsCommandOutput}
 * @see {@link DescribeDBClusterEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterEndpointsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class DescribeDBClusterEndpointsCommand extends $Command<
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
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
  constructor(readonly input: DescribeDBClusterEndpointsCommandInput) {
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
  ): Handler<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBClusterEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterEndpoints",
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
  private serialize(input: DescribeDBClusterEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClusterEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterEndpointsCommandOutput> {
    return de_DescribeDBClusterEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
