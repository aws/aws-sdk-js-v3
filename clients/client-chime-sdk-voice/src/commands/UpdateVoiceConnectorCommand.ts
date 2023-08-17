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
import { UpdateVoiceConnectorRequest, UpdateVoiceConnectorResponse } from "../models/models_0";
import { de_UpdateVoiceConnectorCommand, se_UpdateVoiceConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVoiceConnectorCommand}.
 */
export interface UpdateVoiceConnectorCommandInput extends UpdateVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceConnectorCommand}.
 */
export interface UpdateVoiceConnectorCommandOutput extends UpdateVoiceConnectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the details for the specified Amazon Chime SDK Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceConnectorRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   RequireEncryption: true || false, // required
 * };
 * const command = new UpdateVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceConnectorResponse
 * //   VoiceConnector: { // VoiceConnector
 * //     VoiceConnectorId: "STRING_VALUE",
 * //     AwsRegion: "us-east-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "ap-northeast-2" || "ap-northeast-1" || "ap-southeast-1" || "ap-southeast-2",
 * //     Name: "STRING_VALUE",
 * //     OutboundHostName: "STRING_VALUE",
 * //     RequireEncryption: true || false,
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     VoiceConnectorArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVoiceConnectorCommandInput - {@link UpdateVoiceConnectorCommandInput}
 * @returns {@link UpdateVoiceConnectorCommandOutput}
 * @see {@link UpdateVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class UpdateVoiceConnectorCommand extends $Command<
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
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
  constructor(readonly input: UpdateVoiceConnectorCommandInput) {
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
  ): Handler<UpdateVoiceConnectorCommandInput, UpdateVoiceConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVoiceConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "UpdateVoiceConnectorCommand";
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
  private serialize(input: UpdateVoiceConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVoiceConnectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVoiceConnectorCommandOutput> {
    return de_UpdateVoiceConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
