// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import {
  UpdateConnectorProfileRequest,
  UpdateConnectorProfileRequestFilterSensitiveLog,
  UpdateConnectorProfileResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConnectorProfileCommand,
  serializeAws_restJson1UpdateConnectorProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateConnectorProfileCommand}.
 */
export interface UpdateConnectorProfileCommandInput extends UpdateConnectorProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorProfileCommand}.
 */
export interface UpdateConnectorProfileCommandOutput extends UpdateConnectorProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p> Updates a given connector profile associated with your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UpdateConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UpdateConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = {
 *   connectorProfileName: "STRING_VALUE", // required
 *   connectionMode: "Public" || "Private", // required
 *   connectorProfileConfig: {
 *     connectorProfileProperties: {
 *       Amplitude: {},
 *       Datadog: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Dynatrace: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       GoogleAnalytics: {},
 *       Honeycode: {},
 *       InforNexus: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Marketo: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Redshift: {
 *         databaseUrl: "STRING_VALUE",
 *         bucketName: "STRING_VALUE", // required
 *         bucketPrefix: "STRING_VALUE",
 *         roleArn: "STRING_VALUE", // required
 *         dataApiRoleArn: "STRING_VALUE",
 *         isRedshiftServerless: true || false,
 *         clusterIdentifier: "STRING_VALUE",
 *         workgroupName: "STRING_VALUE",
 *         databaseName: "STRING_VALUE",
 *       },
 *       Salesforce: {
 *         instanceUrl: "STRING_VALUE",
 *         isSandboxEnvironment: true || false,
 *         usePrivateLinkForMetadataAndAuthorization: true || false,
 *       },
 *       ServiceNow: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Singular: {},
 *       Slack: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Snowflake: {
 *         warehouse: "STRING_VALUE", // required
 *         stage: "STRING_VALUE", // required
 *         bucketName: "STRING_VALUE", // required
 *         bucketPrefix: "STRING_VALUE",
 *         privateLinkServiceName: "STRING_VALUE",
 *         accountName: "STRING_VALUE",
 *         region: "STRING_VALUE",
 *       },
 *       Trendmicro: {},
 *       Veeva: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Zendesk: {
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       SAPOData: {
 *         applicationHostUrl: "STRING_VALUE", // required
 *         applicationServicePath: "STRING_VALUE", // required
 *         portNumber: Number("int"), // required
 *         clientNumber: "STRING_VALUE", // required
 *         logonLanguage: "STRING_VALUE",
 *         privateLinkServiceName: "STRING_VALUE",
 *         oAuthProperties: {
 *           tokenUrl: "STRING_VALUE", // required
 *           authCodeUrl: "STRING_VALUE", // required
 *           oAuthScopes: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       CustomConnector: {
 *         profileProperties: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         oAuth2Properties: {
 *           tokenUrl: "STRING_VALUE", // required
 *           oAuth2GrantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE", // required
 *           tokenUrlCustomProperties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *       Pardot: {
 *         instanceUrl: "STRING_VALUE",
 *         isSandboxEnvironment: true || false,
 *         businessUnitId: "STRING_VALUE",
 *       },
 *     },
 *     connectorProfileCredentials: {
 *       Amplitude: {
 *         apiKey: "STRING_VALUE", // required
 *         secretKey: "STRING_VALUE", // required
 *       },
 *       Datadog: {
 *         apiKey: "STRING_VALUE", // required
 *         applicationKey: "STRING_VALUE", // required
 *       },
 *       Dynatrace: {
 *         apiToken: "STRING_VALUE", // required
 *       },
 *       GoogleAnalytics: {
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       Honeycode: {
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       InforNexus: {
 *         accessKeyId: "STRING_VALUE", // required
 *         userId: "STRING_VALUE", // required
 *         secretAccessKey: "STRING_VALUE", // required
 *         datakey: "STRING_VALUE", // required
 *       },
 *       Marketo: {
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       Redshift: {
 *         username: "STRING_VALUE",
 *         password: "STRING_VALUE",
 *       },
 *       Salesforce: {
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *         clientCredentialsArn: "STRING_VALUE",
 *       },
 *       ServiceNow: {
 *         username: "STRING_VALUE", // required
 *         password: "STRING_VALUE", // required
 *       },
 *       Singular: {
 *         apiKey: "STRING_VALUE", // required
 *       },
 *       Slack: {
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       Snowflake: {
 *         username: "STRING_VALUE", // required
 *         password: "STRING_VALUE", // required
 *       },
 *       Trendmicro: {
 *         apiSecretKey: "STRING_VALUE", // required
 *       },
 *       Veeva: {
 *         username: "STRING_VALUE", // required
 *         password: "STRING_VALUE", // required
 *       },
 *       Zendesk: {
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       SAPOData: {
 *         basicAuthCredentials: {
 *           username: "STRING_VALUE", // required
 *           password: "STRING_VALUE", // required
 *         },
 *         oAuthCredentials: {
 *           clientId: "STRING_VALUE", // required
 *           clientSecret: "STRING_VALUE", // required
 *           accessToken: "STRING_VALUE",
 *           refreshToken: "STRING_VALUE",
 *           oAuthRequest: {
 *             authCode: "STRING_VALUE",
 *             redirectUri: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       CustomConnector: {
 *         authenticationType: "OAUTH2" || "APIKEY" || "BASIC" || "CUSTOM", // required
 *         basic: {
 *           username: "STRING_VALUE", // required
 *           password: "STRING_VALUE", // required
 *         },
 *         oauth2: {
 *           clientId: "STRING_VALUE",
 *           clientSecret: "STRING_VALUE",
 *           accessToken: "STRING_VALUE",
 *           refreshToken: "STRING_VALUE",
 *           oAuthRequest: {
 *             authCode: "STRING_VALUE",
 *             redirectUri: "STRING_VALUE",
 *           },
 *         },
 *         apiKey: {
 *           apiKey: "STRING_VALUE", // required
 *           apiSecretKey: "STRING_VALUE",
 *         },
 *         custom: {
 *           customAuthenticationType: "STRING_VALUE", // required
 *           credentialsMap: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *       Pardot: {
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *         clientCredentialsArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateConnectorProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateConnectorProfileCommandInput - {@link UpdateConnectorProfileCommandInput}
 * @returns {@link UpdateConnectorProfileCommandOutput}
 * @see {@link UpdateConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 *
 */
export class UpdateConnectorProfileCommand extends $Command<
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: UpdateConnectorProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectorProfileCommandInput, UpdateConnectorProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectorProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "UpdateConnectorProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectorProfileRequestFilterSensitiveLog,
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
  private serialize(input: UpdateConnectorProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConnectorProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectorProfileCommandOutput> {
    return deserializeAws_restJson1UpdateConnectorProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
