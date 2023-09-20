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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceUserEndpointsRequest,
  ListAppInstanceUserEndpointsRequestFilterSensitiveLog,
  ListAppInstanceUserEndpointsResponse,
  ListAppInstanceUserEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListAppInstanceUserEndpointsCommand,
  se_ListAppInstanceUserEndpointsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstanceUserEndpointsCommand}.
 */
export interface ListAppInstanceUserEndpointsCommandInput extends ListAppInstanceUserEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceUserEndpointsCommand}.
 */
export interface ListAppInstanceUserEndpointsCommandOutput
  extends ListAppInstanceUserEndpointsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all the <code>AppInstanceUserEndpoints</code> created under a single <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // ListAppInstanceUserEndpointsRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceUserEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceUserEndpointsResponse
 * //   AppInstanceUserEndpoints: [ // AppInstanceUserEndpointSummaryList
 * //     { // AppInstanceUserEndpointSummary
 * //       AppInstanceUserArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "APNS" || "APNS_SANDBOX" || "GCM",
 * //       AllowMessages: "ALL" || "NONE",
 * //       EndpointState: { // EndpointState
 * //         Status: "ACTIVE" || "INACTIVE", // required
 * //         StatusReason: "INVALID_DEVICE_TOKEN" || "INVALID_PINPOINT_ARN",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceUserEndpointsCommandInput - {@link ListAppInstanceUserEndpointsCommandInput}
 * @returns {@link ListAppInstanceUserEndpointsCommandOutput}
 * @see {@link ListAppInstanceUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUserEndpointsCommandOutput} for command's `response` shape.
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
export class ListAppInstanceUserEndpointsCommand extends $Command<
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput,
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
  constructor(readonly input: ListAppInstanceUserEndpointsCommandInput) {
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
  ): Handler<ListAppInstanceUserEndpointsCommandInput, ListAppInstanceUserEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppInstanceUserEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "ListAppInstanceUserEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceUserEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceUserEndpointsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeIdentityService",
        operation: "ListAppInstanceUserEndpoints",
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
  private serialize(input: ListAppInstanceUserEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppInstanceUserEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAppInstanceUserEndpointsCommandOutput> {
    return de_ListAppInstanceUserEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
