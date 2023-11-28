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
import { ListAgentAliasesRequest, ListAgentAliasesResponse } from "../models/models_0";
import { de_ListAgentAliasesCommand, se_ListAgentAliasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAgentAliasesCommand}.
 */
export interface ListAgentAliasesCommandInput extends ListAgentAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentAliasesCommand}.
 */
export interface ListAgentAliasesCommandOutput extends ListAgentAliasesResponse, __MetadataBearer {}

/**
 * @public
 * Lists all the Aliases for an Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentAliasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentAliasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentAliasesRequest
 *   agentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentAliasesResponse
 * //   agentAliasSummaries: [ // AgentAliasSummaries // required
 * //     { // AgentAliasSummary
 * //       agentAliasId: "STRING_VALUE", // required
 * //       agentAliasName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       routingConfiguration: [ // AgentAliasRoutingConfiguration
 * //         { // AgentAliasRoutingConfigurationListItem
 * //           agentVersion: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentAliasesCommandInput - {@link ListAgentAliasesCommandInput}
 * @returns {@link ListAgentAliasesCommandOutput}
 * @see {@link ListAgentAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAgentAliasesCommandOutput} for command's `response` shape.
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
export class ListAgentAliasesCommand extends $Command<
  ListAgentAliasesCommandInput,
  ListAgentAliasesCommandOutput,
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
  constructor(readonly input: ListAgentAliasesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAgentAliasesCommandInput, ListAgentAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAgentAliasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "ListAgentAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "ListAgentAliases",
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
  private serialize(input: ListAgentAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAgentAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAgentAliasesCommandOutput> {
    return de_ListAgentAliasesCommand(output, context);
  }
}
