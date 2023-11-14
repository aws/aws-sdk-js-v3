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
import { ImportBackendAuthRequest, ImportBackendAuthResponse } from "../models/models_0";
import { de_ImportBackendAuthCommand, se_ImportBackendAuthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportBackendAuthCommand}.
 */
export interface ImportBackendAuthCommandInput extends ImportBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link ImportBackendAuthCommand}.
 */
export interface ImportBackendAuthCommandOutput extends ImportBackendAuthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Imports an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ImportBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ImportBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // ImportBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   IdentityPoolId: "STRING_VALUE",
 *   NativeClientId: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   WebClientId: "STRING_VALUE", // required
 * };
 * const command = new ImportBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // ImportBackendAuthResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportBackendAuthCommandInput - {@link ImportBackendAuthCommandInput}
 * @returns {@link ImportBackendAuthCommandOutput}
 * @see {@link ImportBackendAuthCommandInput} for command's `input` shape.
 * @see {@link ImportBackendAuthCommandOutput} for command's `response` shape.
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
export class ImportBackendAuthCommand extends $Command<
  ImportBackendAuthCommandInput,
  ImportBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
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
  constructor(readonly input: ImportBackendAuthCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportBackendAuthCommandInput, ImportBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportBackendAuthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "ImportBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyBackend",
        operation: "ImportBackendAuth",
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
  private serialize(input: ImportBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportBackendAuthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportBackendAuthCommandOutput> {
    return de_ImportBackendAuthCommand(output, context);
  }
}
