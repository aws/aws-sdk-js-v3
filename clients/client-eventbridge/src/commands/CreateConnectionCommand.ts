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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_0";
import { de_CreateConnectionCommand, se_CreateConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends CreateConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a connection. A connection defines the authorization type and credentials to use
 *       for authorization with an API destination HTTP endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // CreateConnectionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AuthorizationType: "BASIC" || "OAUTH_CLIENT_CREDENTIALS" || "API_KEY", // required
 *   AuthParameters: { // CreateConnectionAuthRequestParameters
 *     BasicAuthParameters: { // CreateConnectionBasicAuthRequestParameters
 *       Username: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *     },
 *     OAuthParameters: { // CreateConnectionOAuthRequestParameters
 *       ClientParameters: { // CreateConnectionOAuthClientRequestParameters
 *         ClientID: "STRING_VALUE", // required
 *         ClientSecret: "STRING_VALUE", // required
 *       },
 *       AuthorizationEndpoint: "STRING_VALUE", // required
 *       HttpMethod: "GET" || "POST" || "PUT", // required
 *       OAuthHttpParameters: { // ConnectionHttpParameters
 *         HeaderParameters: [ // ConnectionHeaderParametersList
 *           { // ConnectionHeaderParameter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             IsValueSecret: true || false,
 *           },
 *         ],
 *         QueryStringParameters: [ // ConnectionQueryStringParametersList
 *           { // ConnectionQueryStringParameter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             IsValueSecret: true || false,
 *           },
 *         ],
 *         BodyParameters: [ // ConnectionBodyParametersList
 *           { // ConnectionBodyParameter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             IsValueSecret: true || false,
 *           },
 *         ],
 *       },
 *     },
 *     ApiKeyAuthParameters: { // CreateConnectionApiKeyAuthRequestParameters
 *       ApiKeyName: "STRING_VALUE", // required
 *       ApiKeyValue: "STRING_VALUE", // required
 *     },
 *     InvocationHttpParameters: {
 *       HeaderParameters: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           IsValueSecret: true || false,
 *         },
 *       ],
 *       QueryStringParameters: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           IsValueSecret: true || false,
 *         },
 *       ],
 *       BodyParameters: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           IsValueSecret: true || false,
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 *
 */
export class CreateConnectionCommand extends $Command<
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
  EventBridgeClientResolvedConfig
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
  constructor(readonly input: CreateConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "CreateConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectionCommandOutput> {
    return de_CreateConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
