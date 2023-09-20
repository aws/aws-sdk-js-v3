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

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/models_0";
import { de_RemoveTagsCommand, se_RemoveTagsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandInput extends RemoveTagsInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandOutput extends RemoveTagsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Removes one or more tags from the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, RemoveTagsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, RemoveTagsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // RemoveTagsInput
 *   LoadBalancerNames: [ // LoadBalancerNames // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagKeyList // required
 *     { // TagKeyOnly
 *       Key: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RemoveTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsCommandInput - {@link RemoveTagsCommandInput}
 * @returns {@link RemoveTagsCommandOutput}
 * @see {@link RemoveTagsCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To remove tags from a load balancer
 * ```javascript
 * // This example removes the specified tag from the specified load balancer.
 * const input = {
 *   "LoadBalancerNames": [
 *     "my-load-balancer"
 *   ],
 *   "Tags": [
 *     {
 *       "Key": "project"
 *     }
 *   ]
 * };
 * const command = new RemoveTagsCommand(input);
 * await client.send(command);
 * // example id: elb-remove-tags-1
 * ```
 *
 */
export class RemoveTagsCommand extends $Command<
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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
  constructor(readonly input: RemoveTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTagsCommandInput, RemoveTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RemoveTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "RemoveTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v7",
        operation: "RemoveTags",
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
  private serialize(input: RemoveTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveTagsCommandOutput> {
    return de_RemoveTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
