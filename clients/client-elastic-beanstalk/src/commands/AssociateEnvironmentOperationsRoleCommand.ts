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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  AssociateEnvironmentOperationsRoleMessage,
  AssociateEnvironmentOperationsRoleMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAssociateEnvironmentOperationsRoleCommand,
  serializeAws_queryAssociateEnvironmentOperationsRoleCommand,
} from "../protocols/Aws_query";

export interface AssociateEnvironmentOperationsRoleCommandInput extends AssociateEnvironmentOperationsRoleMessage {}
export interface AssociateEnvironmentOperationsRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 *       uses the associated operations role for permissions to downstream services during subsequent
 *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AssociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class AssociateEnvironmentOperationsRoleCommand extends $Command<
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
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

  constructor(readonly input: AssociateEnvironmentOperationsRoleCommandInput) {
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
  ): Handler<AssociateEnvironmentOperationsRoleCommandInput, AssociateEnvironmentOperationsRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateEnvironmentOperationsRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "AssociateEnvironmentOperationsRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEnvironmentOperationsRoleMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateEnvironmentOperationsRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAssociateEnvironmentOperationsRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateEnvironmentOperationsRoleCommandOutput> {
    return deserializeAws_queryAssociateEnvironmentOperationsRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
