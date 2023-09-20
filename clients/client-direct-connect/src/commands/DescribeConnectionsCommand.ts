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
import { Connections, DescribeConnectionsRequest } from "../models/models_0";
import { de_DescribeConnectionsCommand, se_DescribeConnectionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionsCommand}.
 */
export interface DescribeConnectionsCommandInput extends DescribeConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionsCommand}.
 */
export interface DescribeConnectionsCommandOutput extends Connections, __MetadataBearer {}

/**
 * @public
 * <p>Displays the specified connection or all connections in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeConnectionsRequest
 *   connectionId: "STRING_VALUE",
 * };
 * const command = new DescribeConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // Connections
 * //   connections: [ // ConnectionList
 * //     { // Connection
 * //       ownerAccount: "STRING_VALUE",
 * //       connectionId: "STRING_VALUE",
 * //       connectionName: "STRING_VALUE",
 * //       connectionState: "ordering" || "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //       region: "STRING_VALUE",
 * //       location: "STRING_VALUE",
 * //       bandwidth: "STRING_VALUE",
 * //       vlan: Number("int"),
 * //       partnerName: "STRING_VALUE",
 * //       loaIssueTime: new Date("TIMESTAMP"),
 * //       lagId: "STRING_VALUE",
 * //       awsDevice: "STRING_VALUE",
 * //       jumboFrameCapable: true || false,
 * //       awsDeviceV2: "STRING_VALUE",
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //       hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       providerName: "STRING_VALUE",
 * //       macSecCapable: true || false,
 * //       portEncryptionStatus: "STRING_VALUE",
 * //       encryptionMode: "STRING_VALUE",
 * //       macSecKeys: [ // MacSecKeyList
 * //         { // MacSecKey
 * //           secretARN: "STRING_VALUE",
 * //           ckn: "STRING_VALUE",
 * //           state: "STRING_VALUE",
 * //           startOn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConnectionsCommandInput - {@link DescribeConnectionsCommandInput}
 * @returns {@link DescribeConnectionsCommandOutput}
 * @see {@link DescribeConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsCommandOutput} for command's `response` shape.
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
export class DescribeConnectionsCommand extends $Command<
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
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
  constructor(readonly input: DescribeConnectionsCommandInput) {
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
  ): Handler<DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "DescribeConnections",
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
  private serialize(input: DescribeConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectionsCommandOutput> {
    return de_DescribeConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
