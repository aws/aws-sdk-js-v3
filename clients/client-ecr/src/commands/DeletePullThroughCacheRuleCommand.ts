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
  DeletePullThroughCacheRuleRequest,
  DeletePullThroughCacheRuleRequestFilterSensitiveLog,
  DeletePullThroughCacheRuleResponse,
  DeletePullThroughCacheRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeletePullThroughCacheRuleCommand,
  serializeAws_json1_1DeletePullThroughCacheRuleCommand,
} from "../protocols/Aws_json1_1";

export interface DeletePullThroughCacheRuleCommandInput extends DeletePullThroughCacheRuleRequest {}
export interface DeletePullThroughCacheRuleCommandOutput extends DeletePullThroughCacheRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes a pull through cache rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeletePullThroughCacheRuleCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeletePullThroughCacheRuleCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeletePullThroughCacheRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePullThroughCacheRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePullThroughCacheRuleCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class DeletePullThroughCacheRuleCommand extends $Command<
  DeletePullThroughCacheRuleCommandInput,
  DeletePullThroughCacheRuleCommandOutput,
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

  constructor(readonly input: DeletePullThroughCacheRuleCommandInput) {
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
  ): Handler<DeletePullThroughCacheRuleCommandInput, DeletePullThroughCacheRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePullThroughCacheRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DeletePullThroughCacheRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePullThroughCacheRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeletePullThroughCacheRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePullThroughCacheRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePullThroughCacheRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePullThroughCacheRuleCommandOutput> {
    return deserializeAws_json1_1DeletePullThroughCacheRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
