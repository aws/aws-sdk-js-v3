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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateMultiplexRequest, UpdateMultiplexResponse } from "../models/models_2";
import { de_UpdateMultiplexCommand, se_UpdateMultiplexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMultiplexCommand}.
 */
export interface UpdateMultiplexCommandInput extends UpdateMultiplexRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMultiplexCommand}.
 */
export interface UpdateMultiplexCommandOutput extends UpdateMultiplexResponse, __MetadataBearer {}

/**
 * @public
 * Updates a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateMultiplexRequest
 *   MultiplexId: "STRING_VALUE", // required
 *   MultiplexSettings: { // MultiplexSettings
 *     MaximumVideoBufferDelayMilliseconds: Number("int"),
 *     TransportStreamBitrate: Number("int"), // required
 *     TransportStreamId: Number("int"), // required
 *     TransportStreamReservedBitrate: Number("int"),
 *   },
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateMultiplexCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMultiplexResponse
 * //   Multiplex: { // Multiplex
 * //     Arn: "STRING_VALUE",
 * //     AvailabilityZones: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Destinations: [ // __listOfMultiplexOutputDestination
 * //       { // MultiplexOutputDestination
 * //         MediaConnectSettings: { // MultiplexMediaConnectOutputDestinationSettings
 * //           EntitlementArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Id: "STRING_VALUE",
 * //     MultiplexSettings: { // MultiplexSettings
 * //       MaximumVideoBufferDelayMilliseconds: Number("int"),
 * //       TransportStreamBitrate: Number("int"), // required
 * //       TransportStreamId: Number("int"), // required
 * //       TransportStreamReservedBitrate: Number("int"),
 * //     },
 * //     Name: "STRING_VALUE",
 * //     PipelinesRunningCount: Number("int"),
 * //     ProgramCount: Number("int"),
 * //     State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMultiplexCommandInput - {@link UpdateMultiplexCommandInput}
 * @returns {@link UpdateMultiplexCommandOutput}
 * @see {@link UpdateMultiplexCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexCommandOutput} for command's `response` shape.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class UpdateMultiplexCommand extends $Command<
  UpdateMultiplexCommandInput,
  UpdateMultiplexCommandOutput,
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
  constructor(readonly input: UpdateMultiplexCommandInput) {
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
  ): Handler<UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMultiplexCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateMultiplexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "UpdateMultiplex",
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
  private serialize(input: UpdateMultiplexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMultiplexCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMultiplexCommandOutput> {
    return de_UpdateMultiplexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
