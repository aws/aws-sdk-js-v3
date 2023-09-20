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

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { UpdateBackendConfigRequest, UpdateBackendConfigResponse } from "../models/models_0";
import { de_UpdateBackendConfigCommand, se_UpdateBackendConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackendConfigCommand}.
 */
export interface UpdateBackendConfigCommandInput extends UpdateBackendConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendConfigCommand}.
 */
export interface UpdateBackendConfigCommandOutput extends UpdateBackendConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the AWS resources required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendConfigRequest
 *   AppId: "STRING_VALUE", // required
 *   LoginAuthConfig: { // LoginAuthConfigReqObj
 *     AwsCognitoIdentityPoolId: "STRING_VALUE",
 *     AwsCognitoRegion: "STRING_VALUE",
 *     AwsUserPoolsId: "STRING_VALUE",
 *     AwsUserPoolsWebClientId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateBackendConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendConfigResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendManagerAppId: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   LoginAuthConfig: { // LoginAuthConfigReqObj
 * //     AwsCognitoIdentityPoolId: "STRING_VALUE",
 * //     AwsCognitoRegion: "STRING_VALUE",
 * //     AwsUserPoolsId: "STRING_VALUE",
 * //     AwsUserPoolsWebClientId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBackendConfigCommandInput - {@link UpdateBackendConfigCommandInput}
 * @returns {@link UpdateBackendConfigCommandOutput}
 * @see {@link UpdateBackendConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 */
export class UpdateBackendConfigCommand extends $Command<
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
  AmplifyBackendClientResolvedConfig
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
  constructor(readonly input: UpdateBackendConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendConfigCommandInput, UpdateBackendConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBackendConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "UpdateBackendConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyBackend",
        operation: "UpdateBackendConfig",
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
  private serialize(input: UpdateBackendConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBackendConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackendConfigCommandOutput> {
    return de_UpdateBackendConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
