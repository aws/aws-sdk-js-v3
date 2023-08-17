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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetAppInstanceStreamingConfigurationsRequest,
  GetAppInstanceStreamingConfigurationsResponse,
  GetAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetAppInstanceStreamingConfigurationsCommand,
  se_GetAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAppInstanceStreamingConfigurationsCommand}.
 */
export interface GetAppInstanceStreamingConfigurationsCommandInput
  extends GetAppInstanceStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetAppInstanceStreamingConfigurationsCommand}.
 */
export interface GetAppInstanceStreamingConfigurationsCommandOutput
  extends GetAppInstanceStreamingConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the streaming settings for an <code>AppInstance</code>.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingStreamingConfigurations.html">GetMessagingStreamingConfigurations</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // GetAppInstanceStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new GetAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetAppInstanceStreamingConfigurationsResponse
 * //   AppInstanceStreamingConfigurations: [ // AppInstanceStreamingConfigurationList
 * //     { // AppInstanceStreamingConfiguration
 * //       AppInstanceDataType: "Channel" || "ChannelMessage", // required
 * //       ResourceArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppInstanceStreamingConfigurationsCommandInput - {@link GetAppInstanceStreamingConfigurationsCommandInput}
 * @returns {@link GetAppInstanceStreamingConfigurationsCommandOutput}
 * @see {@link GetAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class GetAppInstanceStreamingConfigurationsCommand extends $Command<
  GetAppInstanceStreamingConfigurationsCommandInput,
  GetAppInstanceStreamingConfigurationsCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: GetAppInstanceStreamingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppInstanceStreamingConfigurationsCommandInput, GetAppInstanceStreamingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAppInstanceStreamingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetAppInstanceStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
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
    input: GetAppInstanceStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetAppInstanceStreamingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAppInstanceStreamingConfigurationsCommandOutput> {
    return de_GetAppInstanceStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
