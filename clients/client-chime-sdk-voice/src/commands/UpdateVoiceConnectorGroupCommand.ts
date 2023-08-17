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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse } from "../models/models_0";
import { de_UpdateVoiceConnectorGroupCommand, se_UpdateVoiceConnectorGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVoiceConnectorGroupCommand}.
 */
export interface UpdateVoiceConnectorGroupCommandInput extends UpdateVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceConnectorGroupCommand}.
 */
export interface UpdateVoiceConnectorGroupCommandOutput extends UpdateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings for the specified Amazon Chime SDK Voice Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   VoiceConnectorItems: [ // VoiceConnectorItemList // required
 *     { // VoiceConnectorItem
 *       VoiceConnectorId: "STRING_VALUE", // required
 *       Priority: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceConnectorGroupResponse
 * //   VoiceConnectorGroup: { // VoiceConnectorGroup
 * //     VoiceConnectorGroupId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VoiceConnectorItems: [ // VoiceConnectorItemList
 * //       { // VoiceConnectorItem
 * //         VoiceConnectorId: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     VoiceConnectorGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVoiceConnectorGroupCommandInput - {@link UpdateVoiceConnectorGroupCommandInput}
 * @returns {@link UpdateVoiceConnectorGroupCommandOutput}
 * @see {@link UpdateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 */
export class UpdateVoiceConnectorGroupCommand extends $Command<
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: UpdateVoiceConnectorGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVoiceConnectorGroupCommandInput, UpdateVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVoiceConnectorGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "UpdateVoiceConnectorGroupCommand";
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
  private serialize(input: UpdateVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVoiceConnectorGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> {
    return de_UpdateVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
