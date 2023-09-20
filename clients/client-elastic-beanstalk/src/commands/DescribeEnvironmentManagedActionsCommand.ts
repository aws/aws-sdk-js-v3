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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentManagedActionsRequest, DescribeEnvironmentManagedActionsResult } from "../models/models_0";
import {
  de_DescribeEnvironmentManagedActionsCommand,
  se_DescribeEnvironmentManagedActionsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentManagedActionsCommand}.
 */
export interface DescribeEnvironmentManagedActionsCommandInput extends DescribeEnvironmentManagedActionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentManagedActionsCommand}.
 */
export interface DescribeEnvironmentManagedActionsCommandOutput
  extends DescribeEnvironmentManagedActionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists an environment's upcoming and in-progress managed actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentManagedActionsRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   Status: "Scheduled" || "Pending" || "Running" || "Unknown",
 * };
 * const command = new DescribeEnvironmentManagedActionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentManagedActionsResult
 * //   ManagedActions: [ // ManagedActions
 * //     { // ManagedAction
 * //       ActionId: "STRING_VALUE",
 * //       ActionDescription: "STRING_VALUE",
 * //       ActionType: "InstanceRefresh" || "PlatformUpdate" || "Unknown",
 * //       Status: "Scheduled" || "Pending" || "Running" || "Unknown",
 * //       WindowStartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentManagedActionsCommandInput - {@link DescribeEnvironmentManagedActionsCommandInput}
 * @returns {@link DescribeEnvironmentManagedActionsCommandOutput}
 * @see {@link DescribeEnvironmentManagedActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 */
export class DescribeEnvironmentManagedActionsCommand extends $Command<
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: DescribeEnvironmentManagedActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentManagedActionsCommandInput, DescribeEnvironmentManagedActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEnvironmentManagedActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentManagedActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "DescribeEnvironmentManagedActions",
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
  private serialize(
    input: DescribeEnvironmentManagedActionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEnvironmentManagedActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentManagedActionsCommandOutput> {
    return de_DescribeEnvironmentManagedActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
