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
import { UpdatePullThroughCacheRuleRequest, UpdatePullThroughCacheRuleResponse } from "../models/models_0";
import { de_UpdatePullThroughCacheRuleCommand, se_UpdatePullThroughCacheRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePullThroughCacheRuleCommand}.
 */
export interface UpdatePullThroughCacheRuleCommandInput extends UpdatePullThroughCacheRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePullThroughCacheRuleCommand}.
 */
export interface UpdatePullThroughCacheRuleCommandOutput extends UpdatePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing pull through cache rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UpdatePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UpdatePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // UpdatePullThroughCacheRuleRequest
 *   registryId: "STRING_VALUE",
 *   ecrRepositoryPrefix: "STRING_VALUE", // required
 *   credentialArn: "STRING_VALUE", // required
 * };
 * const command = new UpdatePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePullThroughCacheRuleResponse
 * //   ecrRepositoryPrefix: "STRING_VALUE",
 * //   registryId: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   credentialArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePullThroughCacheRuleCommandInput - {@link UpdatePullThroughCacheRuleCommandInput}
 * @returns {@link UpdatePullThroughCacheRuleCommandOutput}
 * @see {@link UpdatePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link UpdatePullThroughCacheRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link SecretNotFoundException} (client fault)
 *  <p>The ARN of the secret specified in the pull through cache rule was not found. Update
 *             the pull through cache rule with a valid secret ARN and try again.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnableToAccessSecretException} (client fault)
 *  <p>The secret is unable to be accessed. Verify the resource permissions for the secret
 *             and try again.</p>
 *
 * @throws {@link UnableToDecryptSecretValueException} (client fault)
 *  <p>The secret is accessible but is unable to be decrypted. Verify the resource
 *             permisisons and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class UpdatePullThroughCacheRuleCommand extends $Command<
  UpdatePullThroughCacheRuleCommandInput,
  UpdatePullThroughCacheRuleCommandOutput,
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
  constructor(readonly input: UpdatePullThroughCacheRuleCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePullThroughCacheRuleCommandInput, UpdatePullThroughCacheRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePullThroughCacheRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "UpdatePullThroughCacheRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "UpdatePullThroughCacheRule",
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
  private serialize(input: UpdatePullThroughCacheRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePullThroughCacheRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePullThroughCacheRuleCommandOutput> {
    return de_UpdatePullThroughCacheRuleCommand(output, context);
  }
}
