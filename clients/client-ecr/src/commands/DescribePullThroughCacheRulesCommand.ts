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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribePullThroughCacheRulesRequest, DescribePullThroughCacheRulesResponse } from "../models/models_0";
import {
  de_DescribePullThroughCacheRulesCommand,
  se_DescribePullThroughCacheRulesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePullThroughCacheRulesCommand}.
 */
export interface DescribePullThroughCacheRulesCommandInput extends DescribePullThroughCacheRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribePullThroughCacheRulesCommand}.
 */
export interface DescribePullThroughCacheRulesCommandOutput
  extends DescribePullThroughCacheRulesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the pull through cache rules for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribePullThroughCacheRulesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribePullThroughCacheRulesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // DescribePullThroughCacheRulesRequest
 *   registryId: "STRING_VALUE",
 *   ecrRepositoryPrefixes: [ // PullThroughCacheRuleRepositoryPrefixList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribePullThroughCacheRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePullThroughCacheRulesResponse
 * //   pullThroughCacheRules: [ // PullThroughCacheRuleList
 * //     { // PullThroughCacheRule
 * //       ecrRepositoryPrefix: "STRING_VALUE",
 * //       upstreamRegistryUrl: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       registryId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePullThroughCacheRulesCommandInput - {@link DescribePullThroughCacheRulesCommandInput}
 * @returns {@link DescribePullThroughCacheRulesCommandOutput}
 * @see {@link DescribePullThroughCacheRulesCommandInput} for command's `input` shape.
 * @see {@link DescribePullThroughCacheRulesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link PullThroughCacheRuleNotFoundException} (client fault)
 *  <p>The pull through cache rule was not found. Specify a valid pull through cache rule and
 *             try again.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class DescribePullThroughCacheRulesCommand extends $Command<
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: DescribePullThroughCacheRulesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePullThroughCacheRulesCommandInput, DescribePullThroughCacheRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePullThroughCacheRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribePullThroughCacheRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "DescribePullThroughCacheRules",
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
  private serialize(input: DescribePullThroughCacheRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePullThroughCacheRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePullThroughCacheRulesCommandOutput> {
    return de_DescribePullThroughCacheRulesCommand(output, context);
  }
}
