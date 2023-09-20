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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddBridgeOutputsRequest, AddBridgeOutputsResponse } from "../models/models_0";
import { de_AddBridgeOutputsCommand, se_AddBridgeOutputsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddBridgeOutputsCommand}.
 */
export interface AddBridgeOutputsCommandInput extends AddBridgeOutputsRequest {}
/**
 * @public
 *
 * The output of {@link AddBridgeOutputsCommand}.
 */
export interface AddBridgeOutputsCommandOutput extends AddBridgeOutputsResponse, __MetadataBearer {}

/**
 * @public
 * Adds outputs to an existing bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddBridgeOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddBridgeOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // AddBridgeOutputsRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   Outputs: [ // __listOfAddBridgeOutputRequest // required
 *     { // AddBridgeOutputRequest
 *       NetworkOutput: { // AddBridgeNetworkOutputRequest
 *         IpAddress: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         NetworkName: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 *         Ttl: Number("int"), // required
 *       },
 *     },
 *   ],
 * };
 * const command = new AddBridgeOutputsCommand(input);
 * const response = await client.send(command);
 * // { // AddBridgeOutputsResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Outputs: [ // __listOfBridgeOutput
 * //     { // BridgeOutput
 * //       FlowOutput: { // BridgeFlowOutput
 * //         FlowArn: "STRING_VALUE", // required
 * //         FlowSourceArn: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       NetworkOutput: { // BridgeNetworkOutput
 * //         IpAddress: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         NetworkName: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //         Ttl: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddBridgeOutputsCommandInput - {@link AddBridgeOutputsCommandInput}
 * @returns {@link AddBridgeOutputsCommandOutput}
 * @see {@link AddBridgeOutputsCommandInput} for command's `input` shape.
 * @see {@link AddBridgeOutputsCommandOutput} for command's `response` shape.
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
export class AddBridgeOutputsCommand extends $Command<
  AddBridgeOutputsCommandInput,
  AddBridgeOutputsCommandOutput,
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
  constructor(readonly input: AddBridgeOutputsCommandInput) {
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
  ): Handler<AddBridgeOutputsCommandInput, AddBridgeOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddBridgeOutputsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddBridgeOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "AddBridgeOutputs",
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
  private serialize(input: AddBridgeOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddBridgeOutputsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddBridgeOutputsCommandOutput> {
    return de_AddBridgeOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
