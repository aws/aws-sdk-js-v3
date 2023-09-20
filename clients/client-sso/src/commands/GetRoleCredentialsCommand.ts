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

import {
  GetRoleCredentialsRequest,
  GetRoleCredentialsRequestFilterSensitiveLog,
  GetRoleCredentialsResponse,
  GetRoleCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRoleCredentialsCommand, se_GetRoleCredentialsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRoleCredentialsCommand}.
 */
export interface GetRoleCredentialsCommandInput extends GetRoleCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetRoleCredentialsCommand}.
 */
export interface GetRoleCredentialsCommandOutput extends GetRoleCredentialsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the STS short-term credentials for a given role name that is assigned to the
 *       user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, GetRoleCredentialsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const input = { // GetRoleCredentialsRequest
 *   roleName: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   accessToken: "STRING_VALUE", // required
 * };
 * const command = new GetRoleCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleCredentialsResponse
 * //   roleCredentials: { // RoleCredentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //     expiration: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoleCredentialsCommandInput - {@link GetRoleCredentialsCommandInput}
 * @returns {@link GetRoleCredentialsCommandOutput}
 * @see {@link GetRoleCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetRoleCredentialsCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 *
 * @throws {@link SSOServiceException}
 * <p>Base exception class for all service exceptions from SSO service.</p>
 *
 */
export class GetRoleCredentialsCommand extends $Command<
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput,
  SSOClientResolvedConfig
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
  constructor(readonly input: GetRoleCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRoleCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOClient";
    const commandName = "GetRoleCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoleCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRoleCredentialsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBPortalService",
        operation: "GetRoleCredentials",
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
  private serialize(input: GetRoleCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRoleCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoleCredentialsCommandOutput> {
    return de_GetRoleCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
