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

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { GetAgentAliasRequest, GetAgentAliasResponse } from "../models/models_0";
import { de_GetAgentAliasCommand, se_GetAgentAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAgentAliasCommand}.
 */
export interface GetAgentAliasCommandInput extends GetAgentAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentAliasCommand}.
 */
export interface GetAgentAliasCommandOutput extends GetAgentAliasResponse, __MetadataBearer {}

/**
 * @public
 * Describes an Alias for a Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetAgentAliasRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentAliasResponse
 * //   agentAlias: { // AgentAlias
 * //     agentId: "STRING_VALUE", // required
 * //     agentAliasId: "STRING_VALUE", // required
 * //     agentAliasName: "STRING_VALUE", // required
 * //     agentAliasArn: "STRING_VALUE", // required
 * //     clientToken: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     routingConfiguration: [ // AgentAliasRoutingConfiguration // required
 * //       { // AgentAliasRoutingConfigurationListItem
 * //         agentVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     agentAliasHistoryEvents: [ // AgentAliasHistoryEvents
 * //       { // AgentAliasHistoryEvent
 * //         routingConfiguration: [
 * //           {
 * //             agentVersion: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         endDate: new Date("TIMESTAMP"),
 * //         startDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentAliasCommandInput - {@link GetAgentAliasCommandInput}
 * @returns {@link GetAgentAliasCommandOutput}
 * @see {@link GetAgentAliasCommandInput} for command's `input` shape.
 * @see {@link GetAgentAliasCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class GetAgentAliasCommand extends $Command<
  GetAgentAliasCommandInput,
  GetAgentAliasCommandOutput,
  BedrockAgentClientResolvedConfig
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
  constructor(readonly input: GetAgentAliasCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAgentAliasCommandInput, GetAgentAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAgentAliasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "GetAgentAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "GetAgentAlias",
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
  private serialize(input: GetAgentAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAgentAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAgentAliasCommandOutput> {
    return de_GetAgentAliasCommand(output, context);
  }
}
