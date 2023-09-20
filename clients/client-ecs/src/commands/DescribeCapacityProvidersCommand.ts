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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeCapacityProvidersRequest, DescribeCapacityProvidersResponse } from "../models/models_0";
import { de_DescribeCapacityProvidersCommand, se_DescribeCapacityProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityProvidersCommand}.
 */
export interface DescribeCapacityProvidersCommandInput extends DescribeCapacityProvidersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityProvidersCommand}.
 */
export interface DescribeCapacityProvidersCommandOutput extends DescribeCapacityProvidersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your capacity providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeCapacityProvidersRequest
 *   capacityProviders: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   include: [ // CapacityProviderFieldList
 *     "TAGS",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityProvidersResponse
 * //   capacityProviders: [ // CapacityProviders
 * //     { // CapacityProvider
 * //       capacityProviderArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE",
 * //       autoScalingGroupProvider: { // AutoScalingGroupProvider
 * //         autoScalingGroupArn: "STRING_VALUE", // required
 * //         managedScaling: { // ManagedScaling
 * //           status: "ENABLED" || "DISABLED",
 * //           targetCapacity: Number("int"),
 * //           minimumScalingStepSize: Number("int"),
 * //           maximumScalingStepSize: Number("int"),
 * //           instanceWarmupPeriod: Number("int"),
 * //         },
 * //         managedTerminationProtection: "ENABLED" || "DISABLED",
 * //       },
 * //       updateStatus: "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //       updateStatusReason: "STRING_VALUE",
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityProvidersCommandInput - {@link DescribeCapacityProvidersCommandInput}
 * @returns {@link DescribeCapacityProvidersCommandOutput}
 * @see {@link DescribeCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class DescribeCapacityProvidersCommand extends $Command<
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: DescribeCapacityProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCapacityProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeCapacityProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "DescribeCapacityProviders",
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
  private serialize(input: DescribeCapacityProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCapacityProvidersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCapacityProvidersCommandOutput> {
    return de_DescribeCapacityProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
