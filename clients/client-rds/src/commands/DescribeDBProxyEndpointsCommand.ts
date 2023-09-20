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

import { DescribeDBProxyEndpointsRequest, DescribeDBProxyEndpointsResponse } from "../models/models_1";
import { de_DescribeDBProxyEndpointsCommand, se_DescribeDBProxyEndpointsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBProxyEndpointsCommand}.
 */
export interface DescribeDBProxyEndpointsCommandInput extends DescribeDBProxyEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBProxyEndpointsCommand}.
 */
export interface DescribeDBProxyEndpointsCommandOutput extends DescribeDBProxyEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about DB proxy endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyEndpointsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyEndpointsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBProxyEndpointsRequest
 *   DBProxyName: "STRING_VALUE",
 *   DBProxyEndpointName: "STRING_VALUE",
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
 * const command = new DescribeDBProxyEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBProxyEndpointsResponse
 * //   DBProxyEndpoints: [ // DBProxyEndpointList
 * //     { // DBProxyEndpoint
 * //       DBProxyEndpointName: "STRING_VALUE",
 * //       DBProxyEndpointArn: "STRING_VALUE",
 * //       DBProxyName: "STRING_VALUE",
 * //       Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting",
 * //       VpcId: "STRING_VALUE",
 * //       VpcSecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcSubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Endpoint: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       TargetRole: "READ_WRITE" || "READ_ONLY",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBProxyEndpointsCommandInput - {@link DescribeDBProxyEndpointsCommandInput}
 * @returns {@link DescribeDBProxyEndpointsCommandOutput}
 * @see {@link DescribeDBProxyEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyEndpointsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DescribeDBProxyEndpointsCommand extends $Command<
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
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
  constructor(readonly input: DescribeDBProxyEndpointsCommandInput) {
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
  ): Handler<DescribeDBProxyEndpointsCommandInput, DescribeDBProxyEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBProxyEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBProxyEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBProxyEndpoints",
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
  private serialize(input: DescribeDBProxyEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBProxyEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBProxyEndpointsCommandOutput> {
    return de_DescribeDBProxyEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
