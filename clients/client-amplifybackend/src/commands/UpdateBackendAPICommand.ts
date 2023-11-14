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
import { UpdateBackendAPIRequest, UpdateBackendAPIResponse } from "../models/models_0";
import { de_UpdateBackendAPICommand, se_UpdateBackendAPICommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackendAPICommand}.
 */
export interface UpdateBackendAPICommandInput extends UpdateBackendAPIRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendAPICommand}.
 */
export interface UpdateBackendAPICommandOutput extends UpdateBackendAPIResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendAPIRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // BackendAPIResourceConfig
 *     AdditionalAuthTypes: [ // ListOfBackendAPIAuthType
 *       { // BackendAPIAuthType
 *         Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 *         Settings: { // BackendAPIAppSyncAuthSettings
 *           CognitoUserPoolId: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *           ExpirationTime: Number("double"),
 *           OpenIDAuthTTL: "STRING_VALUE",
 *           OpenIDClientId: "STRING_VALUE",
 *           OpenIDIatTTL: "STRING_VALUE",
 *           OpenIDIssueURL: "STRING_VALUE",
 *           OpenIDProviderName: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     ApiName: "STRING_VALUE",
 *     ConflictResolution: { // BackendAPIConflictResolution
 *       ResolutionStrategy: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 *     },
 *     DefaultAuthType: {
 *       Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 *       Settings: {
 *         CognitoUserPoolId: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         ExpirationTime: Number("double"),
 *         OpenIDAuthTTL: "STRING_VALUE",
 *         OpenIDClientId: "STRING_VALUE",
 *         OpenIDIatTTL: "STRING_VALUE",
 *         OpenIDIssueURL: "STRING_VALUE",
 *         OpenIDProviderName: "STRING_VALUE",
 *       },
 *     },
 *     Service: "STRING_VALUE",
 *     TransformSchema: "STRING_VALUE",
 *   },
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBackendAPICommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendAPIResponse
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
 * @param UpdateBackendAPICommandInput - {@link UpdateBackendAPICommandInput}
 * @returns {@link UpdateBackendAPICommandOutput}
 * @see {@link UpdateBackendAPICommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAPICommandOutput} for command's `response` shape.
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
export class UpdateBackendAPICommand extends $Command<
  UpdateBackendAPICommandInput,
  UpdateBackendAPICommandOutput,
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
  constructor(readonly input: UpdateBackendAPICommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendAPICommandInput, UpdateBackendAPICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBackendAPICommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "UpdateBackendAPICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyBackend",
        operation: "UpdateBackendAPI",
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
  private serialize(input: UpdateBackendAPICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBackendAPICommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackendAPICommandOutput> {
    return de_UpdateBackendAPICommand(output, context);
  }
}
