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
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { CreateLoadBalancerPolicyInput, CreateLoadBalancerPolicyOutput } from "../models/models_0";
import { de_CreateLoadBalancerPolicyCommand, se_CreateLoadBalancerPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLoadBalancerPolicyCommand}.
 */
export interface CreateLoadBalancerPolicyCommandInput extends CreateLoadBalancerPolicyInput {}
/**
 * @public
 *
 * The output of {@link CreateLoadBalancerPolicyCommand}.
 */
export interface CreateLoadBalancerPolicyCommandOutput extends CreateLoadBalancerPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a policy with the specified attributes for the specified load balancer.</p>
 *          <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateLoadBalancerPolicyInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyTypeName: "STRING_VALUE", // required
 *   PolicyAttributes: [ // PolicyAttributes
 *     { // PolicyAttribute
 *       AttributeName: "STRING_VALUE",
 *       AttributeValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLoadBalancerPolicyCommandInput - {@link CreateLoadBalancerPolicyCommandInput}
 * @returns {@link CreateLoadBalancerPolicyCommandOutput}
 * @see {@link CreateLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link DuplicatePolicyNameException} (client fault)
 *  <p>A policy with the specified name already exists for this load balancer.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link PolicyTypeNotFoundException} (client fault)
 *  <p>One or more of the specified policy types do not exist.</p>
 *
 * @throws {@link TooManyPoliciesException} (client fault)
 *  <p>The quota for the number of policies for this load balancer has been reached.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To create a policy that enables Proxy Protocol on a load balancer
 * ```javascript
 * // This example creates a policy that enables Proxy Protocol on the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyAttributes": [
 *     {
 *       "AttributeName": "ProxyProtocol",
 *       "AttributeValue": "true"
 *     }
 *   ],
 *   "PolicyName": "my-ProxyProtocol-policy",
 *   "PolicyTypeName": "ProxyProtocolPolicyType"
 * };
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * await client.send(command);
 * // example id: elb-create-load-balancer-policy-1
 * ```
 *
 * @example To create a public key policy
 * ```javascript
 * // This example creates a public key policy.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyAttributes": [
 *     {
 *       "AttributeName": "PublicKey",
 *       "AttributeValue": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwAYUjnfyEyXr1pxjhFWBpMlggUcqoi3kl+dS74kj//c6x7ROtusUaeQCTgIUkayttRDWchuqo1pHC1u+n5xxXnBBe2ejbb2WRsKIQ5rXEeixsjFpFsojpSQKkzhVGI6mJVZBJDVKSHmswnwLBdofLhzvllpovBPTHe+o4haAWvDBALJU0pkSI1FecPHcs2hwxf14zHoXy1e2k36A64nXW43wtfx5qcVSIxtCEOjnYRg7RPvybaGfQ+v6Iaxb/+7J5kEvZhTFQId+bSiJImF1FSUT1W1xwzBZPUbcUkkXDj45vC2s3Z8E+Lk7a3uZhvsQHLZnrfuWjBWGWvZ/MhZYgEXAMPLE"
 *     }
 *   ],
 *   "PolicyName": "my-PublicKey-policy",
 *   "PolicyTypeName": "PublicKeyPolicyType"
 * };
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * await client.send(command);
 * // example id: elb-create-load-balancer-policy-2
 * ```
 *
 * @example To create a backend server authentication policy
 * ```javascript
 * // This example creates a backend server authentication policy that enables authentication on your backend instance using a public key policy.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyAttributes": [
 *     {
 *       "AttributeName": "PublicKeyPolicyName",
 *       "AttributeValue": "my-PublicKey-policy"
 *     }
 *   ],
 *   "PolicyName": "my-authentication-policy",
 *   "PolicyTypeName": "BackendServerAuthenticationPolicyType"
 * };
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * await client.send(command);
 * // example id: elb-create-load-balancer-policy-3
 * ```
 *
 */
export class CreateLoadBalancerPolicyCommand extends $Command<
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput,
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
  constructor(readonly input: CreateLoadBalancerPolicyCommandInput) {
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
  ): Handler<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoadBalancerPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLoadBalancerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateLoadBalancerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLoadBalancerPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLoadBalancerPolicyCommandOutput> {
    return de_CreateLoadBalancerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
