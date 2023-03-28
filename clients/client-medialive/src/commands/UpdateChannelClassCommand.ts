// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateChannelClassRequest, UpdateChannelClassResponse } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateChannelClassCommand,
  serializeAws_restJson1UpdateChannelClassCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateChannelClassCommand}.
 */
export interface UpdateChannelClassCommandInput extends UpdateChannelClassRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelClassCommand}.
 */
export interface UpdateChannelClassCommandOutput extends UpdateChannelClassResponse, __MetadataBearer {}

/**
 * @public
 * Changes the class of the channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateChannelClassCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateChannelClassCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateChannelClassRequest
 *   ChannelClass: "STANDARD" || "SINGLE_PIPELINE", // required
 *   ChannelId: "STRING_VALUE", // required
 *   Destinations: [ // __listOfOutputDestination
 *     { // OutputDestination
 *       Id: "STRING_VALUE",
 *       MediaPackageSettings: [ // __listOfMediaPackageOutputDestinationSettings
 *         { // MediaPackageOutputDestinationSettings
 *           ChannelId: "STRING_VALUE",
 *         },
 *       ],
 *       MultiplexSettings: { // MultiplexProgramChannelDestinationSettings
 *         MultiplexId: "STRING_VALUE",
 *         ProgramName: "STRING_VALUE",
 *       },
 *       Settings: [ // __listOfOutputDestinationSettings
 *         { // OutputDestinationSettings
 *           PasswordParam: "STRING_VALUE",
 *           StreamName: "STRING_VALUE",
 *           Url: "STRING_VALUE",
 *           Username: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateChannelClassCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateChannelClassCommandInput - {@link UpdateChannelClassCommandInput}
 * @returns {@link UpdateChannelClassCommandOutput}
 * @see {@link UpdateChannelClassCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelClassCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 *
 */
export class UpdateChannelClassCommand extends $Command<
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput,
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
  constructor(readonly input: UpdateChannelClassCommandInput) {
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
  ): Handler<UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateChannelClassCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateChannelClassCommand";
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
  private serialize(input: UpdateChannelClassCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateChannelClassCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChannelClassCommandOutput> {
    return deserializeAws_restJson1UpdateChannelClassCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
