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
import { UpdateAgentKnowledgeBaseRequest, UpdateAgentKnowledgeBaseResponse } from "../models/models_0";
import { de_UpdateAgentKnowledgeBaseCommand, se_UpdateAgentKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentKnowledgeBaseCommand}.
 */
export interface UpdateAgentKnowledgeBaseCommandInput extends UpdateAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentKnowledgeBaseCommand}.
 */
export interface UpdateAgentKnowledgeBaseCommandOutput extends UpdateAgentKnowledgeBaseResponse, __MetadataBearer {}

/**
 * @public
 * Updates an existing Knowledge Base associated to an Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   knowledgeBaseState: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentKnowledgeBaseResponse
 * //   agentKnowledgeBase: { // AgentKnowledgeBase
 * //     agentId: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     knowledgeBaseState: "ENABLED" || "DISABLED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAgentKnowledgeBaseCommandInput - {@link UpdateAgentKnowledgeBaseCommandInput}
 * @returns {@link UpdateAgentKnowledgeBaseCommandOutput}
 * @see {@link UpdateAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentKnowledgeBaseCommandOutput} for command's `response` shape.
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
export class UpdateAgentKnowledgeBaseCommand extends $Command<
  UpdateAgentKnowledgeBaseCommandInput,
  UpdateAgentKnowledgeBaseCommandOutput,
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
  constructor(readonly input: UpdateAgentKnowledgeBaseCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAgentKnowledgeBaseCommandInput, UpdateAgentKnowledgeBaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAgentKnowledgeBaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "UpdateAgentKnowledgeBaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "UpdateAgentKnowledgeBase",
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
  private serialize(input: UpdateAgentKnowledgeBaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAgentKnowledgeBaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAgentKnowledgeBaseCommandOutput> {
    return de_UpdateAgentKnowledgeBaseCommand(output, context);
  }
}
