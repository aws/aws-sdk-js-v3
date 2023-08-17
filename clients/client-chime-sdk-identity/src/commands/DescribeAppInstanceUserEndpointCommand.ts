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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import {
  DescribeAppInstanceUserEndpointRequest,
  DescribeAppInstanceUserEndpointResponse,
  DescribeAppInstanceUserEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeAppInstanceUserEndpointCommand,
  se_DescribeAppInstanceUserEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceUserEndpointCommand}.
 */
export interface DescribeAppInstanceUserEndpointCommandInput extends DescribeAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceUserEndpointCommand}.
 */
export interface DescribeAppInstanceUserEndpointCommandOutput
  extends DescribeAppInstanceUserEndpointResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the full details of an <code>AppInstanceUserEndpoint</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceUserEndpointResponse
 * //   AppInstanceUserEndpoint: { // AppInstanceUserEndpoint
 * //     AppInstanceUserArn: "STRING_VALUE",
 * //     EndpointId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "APNS" || "APNS_SANDBOX" || "GCM",
 * //     ResourceArn: "STRING_VALUE",
 * //     EndpointAttributes: { // EndpointAttributes
 * //       DeviceToken: "STRING_VALUE", // required
 * //       VoipDeviceToken: "STRING_VALUE",
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     AllowMessages: "ALL" || "NONE",
 * //     EndpointState: { // EndpointState
 * //       Status: "ACTIVE" || "INACTIVE", // required
 * //       StatusReason: "INVALID_DEVICE_TOKEN" || "INVALID_PINPOINT_ARN",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceUserEndpointCommandInput - {@link DescribeAppInstanceUserEndpointCommandInput}
 * @returns {@link DescribeAppInstanceUserEndpointCommandOutput}
 * @see {@link DescribeAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceUserEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 */
export class DescribeAppInstanceUserEndpointCommand extends $Command<
  DescribeAppInstanceUserEndpointCommandInput,
  DescribeAppInstanceUserEndpointCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
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
  constructor(readonly input: DescribeAppInstanceUserEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppInstanceUserEndpointCommandInput, DescribeAppInstanceUserEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppInstanceUserEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "DescribeAppInstanceUserEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeAppInstanceUserEndpointResponseFilterSensitiveLog,
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
    input: DescribeAppInstanceUserEndpointCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAppInstanceUserEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAppInstanceUserEndpointCommandOutput> {
    return de_DescribeAppInstanceUserEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
