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
import { ListInputsRequest, ListInputsResponse } from "../models/models_1";
import { de_ListInputsCommand, se_ListInputsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInputsCommand}.
 */
export interface ListInputsCommandInput extends ListInputsRequest {}
/**
 * @public
 *
 * The output of {@link ListInputsCommand}.
 */
export interface ListInputsCommandOutput extends ListInputsResponse, __MetadataBearer {}

/**
 * @public
 * Produces list of inputs that have been created
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListInputsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInputsCommand(input);
 * const response = await client.send(command);
 * // { // ListInputsResponse
 * //   Inputs: [ // __listOfInput
 * //     { // Input
 * //       Arn: "STRING_VALUE",
 * //       AttachedChannels: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Destinations: [ // __listOfInputDestination
 * //         { // InputDestination
 * //           Ip: "STRING_VALUE",
 * //           Port: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           Vpc: { // InputDestinationVpc
 * //             AvailabilityZone: "STRING_VALUE",
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Id: "STRING_VALUE",
 * //       InputClass: "STANDARD" || "SINGLE_PIPELINE",
 * //       InputDevices: [ // __listOfInputDeviceSettings
 * //         { // InputDeviceSettings
 * //           Id: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InputPartnerIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       InputSourceType: "STATIC" || "DYNAMIC",
 * //       MediaConnectFlows: [ // __listOfMediaConnectFlow
 * //         { // MediaConnectFlow
 * //           FlowArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       SecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Sources: [ // __listOfInputSource
 * //         { // InputSource
 * //           PasswordParam: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           Username: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "CREATING" || "DETACHED" || "ATTACHED" || "DELETING" || "DELETED",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputsCommandInput - {@link ListInputsCommandInput}
 * @returns {@link ListInputsCommandOutput}
 * @see {@link ListInputsCommandInput} for command's `input` shape.
 * @see {@link ListInputsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class ListInputsCommand extends $Command<
  ListInputsCommandInput,
  ListInputsCommandOutput,
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
  constructor(readonly input: ListInputsCommandInput) {
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
  ): Handler<ListInputsCommandInput, ListInputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListInputsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListInputsCommand";
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
  private serialize(input: ListInputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInputsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInputsCommandOutput> {
    return de_ListInputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
