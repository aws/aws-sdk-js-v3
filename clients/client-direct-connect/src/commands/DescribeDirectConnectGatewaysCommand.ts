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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewaysRequest, DescribeDirectConnectGatewaysResult } from "../models/models_0";
import {
  de_DescribeDirectConnectGatewaysCommand,
  se_DescribeDirectConnectGatewaysCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewaysCommand}.
 */
export interface DescribeDirectConnectGatewaysCommandInput extends DescribeDirectConnectGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewaysCommand}.
 */
export interface DescribeDirectConnectGatewaysCommandOutput
  extends DescribeDirectConnectGatewaysResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewaysRequest
 *   directConnectGatewayId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewaysResult
 * //   directConnectGateways: [ // DirectConnectGatewayList
 * //     { // DirectConnectGateway
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       directConnectGatewayName: "STRING_VALUE",
 * //       amazonSideAsn: Number("long"),
 * //       ownerAccount: "STRING_VALUE",
 * //       directConnectGatewayState: "pending" || "available" || "deleting" || "deleted",
 * //       stateChangeError: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewaysCommandInput - {@link DescribeDirectConnectGatewaysCommandInput}
 * @returns {@link DescribeDirectConnectGatewaysCommandOutput}
 * @see {@link DescribeDirectConnectGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewaysCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class DescribeDirectConnectGatewaysCommand extends $Command<
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DescribeDirectConnectGatewaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDirectConnectGatewaysCommandInput, DescribeDirectConnectGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDirectConnectGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "DescribeDirectConnectGateways",
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
  private serialize(input: DescribeDirectConnectGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDirectConnectGatewaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewaysCommandOutput> {
    return de_DescribeDirectConnectGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
