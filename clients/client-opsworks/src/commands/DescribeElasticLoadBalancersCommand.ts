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

import { DescribeElasticLoadBalancersRequest, DescribeElasticLoadBalancersResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeElasticLoadBalancersCommand,
  se_DescribeElasticLoadBalancersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeElasticLoadBalancersCommand}.
 */
export interface DescribeElasticLoadBalancersCommandInput extends DescribeElasticLoadBalancersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeElasticLoadBalancersCommand}.
 */
export interface DescribeElasticLoadBalancersCommandOutput
  extends DescribeElasticLoadBalancersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes a stack's Elastic Load Balancing instances.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeElasticLoadBalancersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeElasticLoadBalancersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeElasticLoadBalancersRequest
 *   StackId: "STRING_VALUE",
 *   LayerIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeElasticLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeElasticLoadBalancersResult
 * //   ElasticLoadBalancers: [ // ElasticLoadBalancers
 * //     { // ElasticLoadBalancer
 * //       ElasticLoadBalancerName: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       LayerId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       AvailabilityZones: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Ec2InstanceIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeElasticLoadBalancersCommandInput - {@link DescribeElasticLoadBalancersCommandInput}
 * @returns {@link DescribeElasticLoadBalancersCommandOutput}
 * @see {@link DescribeElasticLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class DescribeElasticLoadBalancersCommand extends $Command<
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: DescribeElasticLoadBalancersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeElasticLoadBalancersCommandInput, DescribeElasticLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeElasticLoadBalancersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeElasticLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "DescribeElasticLoadBalancers",
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
  private serialize(input: DescribeElasticLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeElasticLoadBalancersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeElasticLoadBalancersCommandOutput> {
    return de_DescribeElasticLoadBalancersCommand(output, context);
  }
}
