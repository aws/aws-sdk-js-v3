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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeRoutingProfileRequest, DescribeRoutingProfileResponse } from "../models/models_0";
import { de_DescribeRoutingProfileCommand, se_DescribeRoutingProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRoutingProfileCommand}.
 */
export interface DescribeRoutingProfileCommandInput extends DescribeRoutingProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRoutingProfileCommand}.
 */
export interface DescribeRoutingProfileCommandOutput extends DescribeRoutingProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeRoutingProfileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRoutingProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRoutingProfileResponse
 * //   RoutingProfile: { // RoutingProfile
 * //     InstanceId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     RoutingProfileArn: "STRING_VALUE",
 * //     RoutingProfileId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MediaConcurrencies: [ // MediaConcurrencies
 * //       { // MediaConcurrency
 * //         Channel: "VOICE" || "CHAT" || "TASK", // required
 * //         Concurrency: Number("int"), // required
 * //         CrossChannelBehavior: { // CrossChannelBehavior
 * //           BehaviorType: "ROUTE_CURRENT_CHANNEL_ONLY" || "ROUTE_ANY_CHANNEL", // required
 * //         },
 * //       },
 * //     ],
 * //     DefaultOutboundQueueId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     NumberOfAssociatedQueues: Number("long"),
 * //     NumberOfAssociatedUsers: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRoutingProfileCommandInput - {@link DescribeRoutingProfileCommandInput}
 * @returns {@link DescribeRoutingProfileCommandOutput}
 * @see {@link DescribeRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class DescribeRoutingProfileCommand extends $Command<
  DescribeRoutingProfileCommandInput,
  DescribeRoutingProfileCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DescribeRoutingProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRoutingProfileCommandInput, DescribeRoutingProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRoutingProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeRoutingProfileCommand";
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
  private serialize(input: DescribeRoutingProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRoutingProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRoutingProfileCommandOutput> {
    return de_DescribeRoutingProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
