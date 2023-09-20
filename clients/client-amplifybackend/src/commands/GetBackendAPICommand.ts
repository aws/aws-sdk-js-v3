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
import { GetBackendAPIRequest, GetBackendAPIResponse } from "../models/models_0";
import { de_GetBackendAPICommand, se_GetBackendAPICommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackendAPICommand}.
 */
export interface GetBackendAPICommandInput extends GetBackendAPIRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendAPICommand}.
 */
export interface GetBackendAPICommandOutput extends GetBackendAPIResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details for a backend API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendAPIRequest
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
 * const command = new GetBackendAPICommand(input);
 * const response = await client.send(command);
 * // { // GetBackendAPIResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   ResourceConfig: { // BackendAPIResourceConfig
 * //     AdditionalAuthTypes: [ // ListOfBackendAPIAuthType
 * //       { // BackendAPIAuthType
 * //         Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 * //         Settings: { // BackendAPIAppSyncAuthSettings
 * //           CognitoUserPoolId: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           ExpirationTime: Number("double"),
 * //           OpenIDAuthTTL: "STRING_VALUE",
 * //           OpenIDClientId: "STRING_VALUE",
 * //           OpenIDIatTTL: "STRING_VALUE",
 * //           OpenIDIssueURL: "STRING_VALUE",
 * //           OpenIDProviderName: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ApiName: "STRING_VALUE",
 * //     ConflictResolution: { // BackendAPIConflictResolution
 * //       ResolutionStrategy: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 * //     },
 * //     DefaultAuthType: {
 * //       Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 * //       Settings: {
 * //         CognitoUserPoolId: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         ExpirationTime: Number("double"),
 * //         OpenIDAuthTTL: "STRING_VALUE",
 * //         OpenIDClientId: "STRING_VALUE",
 * //         OpenIDIatTTL: "STRING_VALUE",
 * //         OpenIDIssueURL: "STRING_VALUE",
 * //         OpenIDProviderName: "STRING_VALUE",
 * //       },
 * //     },
 * //     Service: "STRING_VALUE",
 * //     TransformSchema: "STRING_VALUE",
 * //   },
 * //   ResourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendAPICommandInput - {@link GetBackendAPICommandInput}
 * @returns {@link GetBackendAPICommandOutput}
 * @see {@link GetBackendAPICommandInput} for command's `input` shape.
 * @see {@link GetBackendAPICommandOutput} for command's `response` shape.
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
export class GetBackendAPICommand extends $Command<
  GetBackendAPICommandInput,
  GetBackendAPICommandOutput,
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
  constructor(readonly input: GetBackendAPICommandInput) {
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
  ): Handler<GetBackendAPICommandInput, GetBackendAPICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBackendAPICommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "GetBackendAPICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyBackend",
        operation: "GetBackendAPI",
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
  private serialize(input: GetBackendAPICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackendAPICommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackendAPICommandOutput> {
    return de_GetBackendAPICommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
