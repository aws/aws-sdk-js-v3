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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutAppInstanceStreamingConfigurationsRequest,
  PutAppInstanceStreamingConfigurationsRequestFilterSensitiveLog,
  PutAppInstanceStreamingConfigurationsResponse,
  PutAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  de_PutAppInstanceStreamingConfigurationsCommand,
  se_PutAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutAppInstanceStreamingConfigurationsCommand}.
 */
export interface PutAppInstanceStreamingConfigurationsCommandInput
  extends PutAppInstanceStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link PutAppInstanceStreamingConfigurationsCommand}.
 */
export interface PutAppInstanceStreamingConfigurationsCommandOutput
  extends PutAppInstanceStreamingConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>The data streaming configurations of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutAppInstanceStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   AppInstanceStreamingConfigurations: [ // AppInstanceStreamingConfigurationList // required
 *     { // AppInstanceStreamingConfiguration
 *       AppInstanceDataType: "Channel" || "ChannelMessage", // required
 *       ResourceArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // PutAppInstanceStreamingConfigurationsResponse
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
 * @param PutAppInstanceStreamingConfigurationsRequest - {@link PutAppInstanceStreamingConfigurationsRequest}
 * @returns {@link PutAppInstanceStreamingConfigurationsResponse}
 * @see {@link PutAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
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
export class PutAppInstanceStreamingConfigurationsCommand extends $Command<
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
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
  constructor(readonly input: PutAppInstanceStreamingConfigurationsCommandInput) {
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
  ): Handler<PutAppInstanceStreamingConfigurationsCommandInput, PutAppInstanceStreamingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAppInstanceStreamingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutAppInstanceStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAppInstanceStreamingConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
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
    input: PutAppInstanceStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutAppInstanceStreamingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppInstanceStreamingConfigurationsCommandOutput> {
    return de_PutAppInstanceStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
