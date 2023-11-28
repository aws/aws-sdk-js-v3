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
import { UpdateAgentAliasRequest, UpdateAgentAliasResponse } from "../models/models_0";
import { de_UpdateAgentAliasCommand, se_UpdateAgentAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentAliasCommand}.
 */
export interface UpdateAgentAliasCommandInput extends UpdateAgentAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentAliasCommand}.
 */
export interface UpdateAgentAliasCommandOutput extends UpdateAgentAliasResponse, __MetadataBearer {}

/**
 * @public
 * Updates an existing Alias for an Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentAliasRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 *   agentAliasName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   routingConfiguration: [ // AgentAliasRoutingConfiguration
 *     { // AgentAliasRoutingConfigurationListItem
 *       agentVersion: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateAgentAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentAliasResponse
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
 * @param UpdateAgentAliasCommandInput - {@link UpdateAgentAliasCommandInput}
 * @returns {@link UpdateAgentAliasCommandOutput}
 * @see {@link UpdateAgentAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentAliasCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
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
export class UpdateAgentAliasCommand extends $Command<
  UpdateAgentAliasCommandInput,
  UpdateAgentAliasCommandOutput,
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
  constructor(readonly input: UpdateAgentAliasCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAgentAliasCommandInput, UpdateAgentAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAgentAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "UpdateAgentAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "UpdateAgentAlias",
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
  private serialize(input: UpdateAgentAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAgentAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAgentAliasCommandOutput> {
    return de_UpdateAgentAliasCommand(output, context);
  }
}
