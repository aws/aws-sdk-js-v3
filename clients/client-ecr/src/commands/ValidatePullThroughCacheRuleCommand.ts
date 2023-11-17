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
import { ValidatePullThroughCacheRuleRequest, ValidatePullThroughCacheRuleResponse } from "../models/models_0";
import {
  de_ValidatePullThroughCacheRuleCommand,
  se_ValidatePullThroughCacheRuleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidatePullThroughCacheRuleCommand}.
 */
export interface ValidatePullThroughCacheRuleCommandInput extends ValidatePullThroughCacheRuleRequest {}
/**
 * @public
 *
 * The output of {@link ValidatePullThroughCacheRuleCommand}.
 */
export interface ValidatePullThroughCacheRuleCommandOutput
  extends ValidatePullThroughCacheRuleResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Validates an existing pull through cache rule for an upstream registry that requires
 *             authentication. This will retrieve the contents of the Amazon Web Services Secrets Manager secret, verify the
 *             syntax, and then validate that authentication to the upstream registry is
 *             successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ValidatePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ValidatePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // ValidatePullThroughCacheRuleRequest
 *   ecrRepositoryPrefix: "STRING_VALUE", // required
 *   registryId: "STRING_VALUE",
 * };
 * const command = new ValidatePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePullThroughCacheRuleResponse
 * //   ecrRepositoryPrefix: "STRING_VALUE",
 * //   registryId: "STRING_VALUE",
 * //   upstreamRegistryUrl: "STRING_VALUE",
 * //   credentialArn: "STRING_VALUE",
 * //   isValid: true || false,
 * //   failure: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ValidatePullThroughCacheRuleCommandInput - {@link ValidatePullThroughCacheRuleCommandInput}
 * @returns {@link ValidatePullThroughCacheRuleCommandOutput}
 * @see {@link ValidatePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link ValidatePullThroughCacheRuleCommandOutput} for command's `response` shape.
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
export class ValidatePullThroughCacheRuleCommand extends $Command<
  ValidatePullThroughCacheRuleCommandInput,
  ValidatePullThroughCacheRuleCommandOutput,
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
  constructor(readonly input: ValidatePullThroughCacheRuleCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidatePullThroughCacheRuleCommandInput, ValidatePullThroughCacheRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidatePullThroughCacheRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "ValidatePullThroughCacheRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "ValidatePullThroughCacheRule",
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
  private serialize(input: ValidatePullThroughCacheRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidatePullThroughCacheRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidatePullThroughCacheRuleCommandOutput> {
    return de_ValidatePullThroughCacheRuleCommand(output, context);
  }
}
