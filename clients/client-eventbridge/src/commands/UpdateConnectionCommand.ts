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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import {
  UpdateConnectionRequest,
  UpdateConnectionRequestFilterSensitiveLog,
  UpdateConnectionResponse,
} from "../models/models_0";
import { de_UpdateConnectionCommand, se_UpdateConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandOutput extends UpdateConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates settings for a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // UpdateConnectionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AuthorizationType: "BASIC" || "OAUTH_CLIENT_CREDENTIALS" || "API_KEY",
 *   AuthParameters: { // UpdateConnectionAuthRequestParameters
 *     BasicAuthParameters: { // UpdateConnectionBasicAuthRequestParameters
 *       Username: "STRING_VALUE",
 *       Password: "STRING_VALUE",
 *     },
 *     OAuthParameters: { // UpdateConnectionOAuthRequestParameters
 *       ClientParameters: { // UpdateConnectionOAuthClientRequestParameters
 *         ClientID: "STRING_VALUE",
 *         ClientSecret: "STRING_VALUE",
 *       },
 *       AuthorizationEndpoint: "STRING_VALUE",
 *       HttpMethod: "GET" || "POST" || "PUT",
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
 *     ApiKeyAuthParameters: { // UpdateConnectionApiKeyAuthRequestParameters
 *       ApiKeyName: "STRING_VALUE",
 *       ApiKeyValue: "STRING_VALUE",
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
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateConnectionCommandInput - {@link UpdateConnectionCommandInput}
 * @returns {@link UpdateConnectionCommandOutput}
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class UpdateConnectionCommand extends $Command<
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
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
  constructor(readonly input: UpdateConnectionCommandInput) {
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
  ): Handler<UpdateConnectionCommandInput, UpdateConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "UpdateConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "UpdateConnection",
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
  private serialize(input: UpdateConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectionCommandOutput> {
    return de_UpdateConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
