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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  CreatePullThroughCacheRuleRequest,
  CreatePullThroughCacheRuleRequestFilterSensitiveLog,
  CreatePullThroughCacheRuleResponse,
  CreatePullThroughCacheRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreatePullThroughCacheRuleCommand,
  serializeAws_json1_1CreatePullThroughCacheRuleCommand,
} from "../protocols/Aws_json1_1";

export interface CreatePullThroughCacheRuleCommandInput extends CreatePullThroughCacheRuleRequest {}
export interface CreatePullThroughCacheRuleCommandOutput extends CreatePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a pull through cache rule. A pull through cache rule provides a way to cache
 *             images from an external public registry in your Amazon ECR private registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreatePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreatePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new CreatePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePullThroughCacheRuleCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class CreatePullThroughCacheRuleCommand extends $Command<
  CreatePullThroughCacheRuleCommandInput,
  CreatePullThroughCacheRuleCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: CreatePullThroughCacheRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePullThroughCacheRuleCommandInput, CreatePullThroughCacheRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePullThroughCacheRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "CreatePullThroughCacheRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePullThroughCacheRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePullThroughCacheRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePullThroughCacheRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePullThroughCacheRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePullThroughCacheRuleCommandOutput> {
    return deserializeAws_json1_1CreatePullThroughCacheRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
