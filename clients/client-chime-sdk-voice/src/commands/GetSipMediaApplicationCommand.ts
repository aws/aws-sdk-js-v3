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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  GetSipMediaApplicationRequest,
  GetSipMediaApplicationResponse,
  GetSipMediaApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSipMediaApplicationCommand, se_GetSipMediaApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSipMediaApplicationCommand}.
 */
export interface GetSipMediaApplicationCommandInput extends GetSipMediaApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetSipMediaApplicationCommand}.
 */
export interface GetSipMediaApplicationCommandOutput extends GetSipMediaApplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the information for a SIP media application, including name,
 *          AWS Region, and endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSipMediaApplicationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSipMediaApplicationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSipMediaApplicationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetSipMediaApplicationResponse
 * //   SipMediaApplication: { // SipMediaApplication
 * //     SipMediaApplicationId: "STRING_VALUE",
 * //     AwsRegion: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Endpoints: [ // SipMediaApplicationEndpointList
 * //       { // SipMediaApplicationEndpoint
 * //         LambdaArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     SipMediaApplicationArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSipMediaApplicationCommandInput - {@link GetSipMediaApplicationCommandInput}
 * @returns {@link GetSipMediaApplicationCommandOutput}
 * @see {@link GetSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationCommandOutput} for command's `response` shape.
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
export class GetSipMediaApplicationCommand extends $Command<
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
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
  constructor(readonly input: GetSipMediaApplicationCommandInput) {
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
  ): Handler<GetSipMediaApplicationCommandInput, GetSipMediaApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSipMediaApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetSipMediaApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetSipMediaApplicationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "GetSipMediaApplication",
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
  private serialize(input: GetSipMediaApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSipMediaApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSipMediaApplicationCommandOutput> {
    return de_GetSipMediaApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
