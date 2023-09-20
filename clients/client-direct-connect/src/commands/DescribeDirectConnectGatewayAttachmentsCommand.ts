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
import {
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewayAttachmentsResult,
} from "../models/models_0";
import {
  de_DescribeDirectConnectGatewayAttachmentsCommand,
  se_DescribeDirectConnectGatewayAttachmentsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewayAttachmentsCommand}.
 */
export interface DescribeDirectConnectGatewayAttachmentsCommandInput
  extends DescribeDirectConnectGatewayAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewayAttachmentsCommand}.
 */
export interface DescribeDirectConnectGatewayAttachmentsCommandOutput
  extends DescribeDirectConnectGatewayAttachmentsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewayAttachmentsRequest
 *   directConnectGatewayId: "STRING_VALUE",
 *   virtualInterfaceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewayAttachmentsResult
 * //   directConnectGatewayAttachments: [ // DirectConnectGatewayAttachmentList
 * //     { // DirectConnectGatewayAttachment
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       virtualInterfaceId: "STRING_VALUE",
 * //       virtualInterfaceRegion: "STRING_VALUE",
 * //       virtualInterfaceOwnerAccount: "STRING_VALUE",
 * //       attachmentState: "attaching" || "attached" || "detaching" || "detached",
 * //       attachmentType: "TransitVirtualInterface" || "PrivateVirtualInterface",
 * //       stateChangeError: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewayAttachmentsCommandInput - {@link DescribeDirectConnectGatewayAttachmentsCommandInput}
 * @returns {@link DescribeDirectConnectGatewayAttachmentsCommandOutput}
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandOutput} for command's `response` shape.
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
export class DescribeDirectConnectGatewayAttachmentsCommand extends $Command<
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
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
  constructor(readonly input: DescribeDirectConnectGatewayAttachmentsCommandInput) {
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
  ): Handler<
    DescribeDirectConnectGatewayAttachmentsCommandInput,
    DescribeDirectConnectGatewayAttachmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeDirectConnectGatewayAttachmentsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewayAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "DescribeDirectConnectGatewayAttachments",
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
    input: DescribeDirectConnectGatewayAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDirectConnectGatewayAttachmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> {
    return de_DescribeDirectConnectGatewayAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
