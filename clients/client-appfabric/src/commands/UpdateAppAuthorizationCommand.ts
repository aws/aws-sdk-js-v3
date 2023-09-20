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

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import {
  UpdateAppAuthorizationRequest,
  UpdateAppAuthorizationRequestFilterSensitiveLog,
  UpdateAppAuthorizationResponse,
} from "../models/models_0";
import { de_UpdateAppAuthorizationCommand, se_UpdateAppAuthorizationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppAuthorizationCommand}.
 */
export interface UpdateAppAuthorizationCommandInput extends UpdateAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppAuthorizationCommand}.
 */
export interface UpdateAppAuthorizationCommandOutput extends UpdateAppAuthorizationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an app authorization within an app bundle, which allows AppFabric to connect to an
 *          application.</p>
 *          <p>If the app authorization was in a <code>connected</code> state, updating the app
 *          authorization will set it back to a <code>PendingConnect</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, UpdateAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, UpdateAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // UpdateAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   appAuthorizationIdentifier: "STRING_VALUE", // required
 *   credential: { // Credential Union: only one key present
 *     oauth2Credential: { // Oauth2Credential
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     apiKeyCredential: { // ApiKeyCredential
 *       apiKey: "STRING_VALUE", // required
 *     },
 *   },
 *   tenant: { // Tenant
 *     tenantIdentifier: "STRING_VALUE", // required
 *     tenantDisplayName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppAuthorizationResponse
 * //   appAuthorization: { // AppAuthorization
 * //     appAuthorizationArn: "STRING_VALUE", // required
 * //     appBundleArn: "STRING_VALUE", // required
 * //     app: "STRING_VALUE", // required
 * //     tenant: { // Tenant
 * //       tenantIdentifier: "STRING_VALUE", // required
 * //       tenantDisplayName: "STRING_VALUE", // required
 * //     },
 * //     authType: "oauth2" || "apiKey", // required
 * //     status: "PendingConnect" || "Connected" || "ConnectionValidationFailed" || "TokenAutoRotationFailed", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     persona: "admin" || "endUser",
 * //     authUrl: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppAuthorizationCommandInput - {@link UpdateAppAuthorizationCommandInput}
 * @returns {@link UpdateAppAuthorizationCommandOutput}
 * @see {@link UpdateAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link UpdateAppAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 */
export class UpdateAppAuthorizationCommand extends $Command<
  UpdateAppAuthorizationCommandInput,
  UpdateAppAuthorizationCommandOutput,
  AppFabricClientResolvedConfig
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
  constructor(readonly input: UpdateAppAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppFabricClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAppAuthorizationCommandInput, UpdateAppAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAppAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "UpdateAppAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAppAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FabricFrontEndService",
        operation: "UpdateAppAuthorization",
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
  private serialize(input: UpdateAppAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAppAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAppAuthorizationCommandOutput> {
    return de_UpdateAppAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
