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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputRequest, UpdateInputResponse } from "../models/models_2";
import { de_UpdateInputCommand, se_UpdateInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInputCommand}.
 */
export interface UpdateInputCommandInput extends UpdateInputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputCommand}.
 */
export interface UpdateInputCommandOutput extends UpdateInputResponse, __MetadataBearer {}

/**
 * @public
 * Updates an input.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateInputRequest
 *   Destinations: [ // __listOfInputDestinationRequest
 *     { // InputDestinationRequest
 *       StreamName: "STRING_VALUE",
 *     },
 *   ],
 *   InputDevices: [ // __listOfInputDeviceRequest
 *     { // InputDeviceRequest
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   InputId: "STRING_VALUE", // required
 *   InputSecurityGroups: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   MediaConnectFlows: [ // __listOfMediaConnectFlowRequest
 *     { // MediaConnectFlowRequest
 *       FlowArn: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Sources: [ // __listOfInputSourceRequest
 *     { // InputSourceRequest
 *       PasswordParam: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *       Username: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateInputCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInputResponse
 * //   Input: { // Input
 * //     Arn: "STRING_VALUE",
 * //     AttachedChannels: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Destinations: [ // __listOfInputDestination
 * //       { // InputDestination
 * //         Ip: "STRING_VALUE",
 * //         Port: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Vpc: { // InputDestinationVpc
 * //           AvailabilityZone: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Id: "STRING_VALUE",
 * //     InputClass: "STANDARD" || "SINGLE_PIPELINE",
 * //     InputDevices: [ // __listOfInputDeviceSettings
 * //       { // InputDeviceSettings
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     InputPartnerIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     InputSourceType: "STATIC" || "DYNAMIC",
 * //     MediaConnectFlows: [ // __listOfMediaConnectFlow
 * //       { // MediaConnectFlow
 * //         FlowArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     SecurityGroups: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Sources: [ // __listOfInputSource
 * //       { // InputSource
 * //         PasswordParam: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "CREATING" || "DETACHED" || "ATTACHED" || "DELETING" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInputCommandInput - {@link UpdateInputCommandInput}
 * @returns {@link UpdateInputCommandOutput}
 * @see {@link UpdateInputCommandInput} for command's `input` shape.
 * @see {@link UpdateInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class UpdateInputCommand extends $Command<
  UpdateInputCommandInput,
  UpdateInputCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: UpdateInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInputCommandInput, UpdateInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateInputCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateInputCommand";
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
  private serialize(input: UpdateInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInputCommandOutput> {
    return de_UpdateInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
