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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddBridgeSourcesRequest, AddBridgeSourcesResponse } from "../models/models_0";
import { de_AddBridgeSourcesCommand, se_AddBridgeSourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddBridgeSourcesCommand}.
 */
export interface AddBridgeSourcesCommandInput extends AddBridgeSourcesRequest {}
/**
 * @public
 *
 * The output of {@link AddBridgeSourcesCommand}.
 */
export interface AddBridgeSourcesCommandOutput extends AddBridgeSourcesResponse, __MetadataBearer {}

/**
 * @public
 * Adds sources to an existing bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddBridgeSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddBridgeSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // AddBridgeSourcesRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   Sources: [ // __listOfAddBridgeSourceRequest // required
 *     { // AddBridgeSourceRequest
 *       FlowSource: { // AddBridgeFlowSourceRequest
 *         FlowArn: "STRING_VALUE", // required
 *         FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 *           VpcInterfaceName: "STRING_VALUE",
 *         },
 *         Name: "STRING_VALUE", // required
 *       },
 *       NetworkSource: { // AddBridgeNetworkSourceRequest
 *         MulticastIp: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         NetworkName: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new AddBridgeSourcesCommand(input);
 * const response = await client.send(command);
 * // { // AddBridgeSourcesResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Sources: [ // __listOfBridgeSource
 * //     { // BridgeSource
 * //       FlowSource: { // BridgeFlowSource
 * //         FlowArn: "STRING_VALUE", // required
 * //         FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //         Name: "STRING_VALUE", // required
 * //         OutputArn: "STRING_VALUE",
 * //       },
 * //       NetworkSource: { // BridgeNetworkSource
 * //         MulticastIp: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         NetworkName: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddBridgeSourcesCommandInput - {@link AddBridgeSourcesCommandInput}
 * @returns {@link AddBridgeSourcesCommandOutput}
 * @see {@link AddBridgeSourcesCommandInput} for command's `input` shape.
 * @see {@link AddBridgeSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class AddBridgeSourcesCommand extends $Command<
  AddBridgeSourcesCommandInput,
  AddBridgeSourcesCommandOutput,
  MediaConnectClientResolvedConfig
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
  constructor(readonly input: AddBridgeSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddBridgeSourcesCommandInput, AddBridgeSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddBridgeSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddBridgeSourcesCommand";
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
  private serialize(input: AddBridgeSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddBridgeSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddBridgeSourcesCommandOutput> {
    return de_AddBridgeSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
