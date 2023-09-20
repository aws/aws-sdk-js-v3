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
  DescribeAppInstanceUserRequest,
  DescribeAppInstanceUserResponse,
  DescribeAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppInstanceUserCommand, se_DescribeAppInstanceUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceUserCommand}.
 */
export interface DescribeAppInstanceUserCommandInput extends DescribeAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceUserCommand}.
 */
export interface DescribeAppInstanceUserCommandOutput extends DescribeAppInstanceUserResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the full details of an <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceUserResponse
 * //   AppInstanceUser: { // AppInstanceUser
 * //     AppInstanceUserArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Metadata: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ExpirationSettings: { // ExpirationSettings
 * //       ExpirationDays: Number("int"), // required
 * //       ExpirationCriterion: "CREATED_TIMESTAMP", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceUserCommandInput - {@link DescribeAppInstanceUserCommandInput}
 * @returns {@link DescribeAppInstanceUserCommandOutput}
 * @see {@link DescribeAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceUserCommandOutput} for command's `response` shape.
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
export class DescribeAppInstanceUserCommand extends $Command<
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
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
  constructor(readonly input: DescribeAppInstanceUserCommandInput) {
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
  ): Handler<DescribeAppInstanceUserCommandInput, DescribeAppInstanceUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppInstanceUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "DescribeAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeAppInstanceUserResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeIdentityService",
        operation: "DescribeAppInstanceUser",
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
  private serialize(input: DescribeAppInstanceUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppInstanceUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppInstanceUserCommandOutput> {
    return de_DescribeAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
