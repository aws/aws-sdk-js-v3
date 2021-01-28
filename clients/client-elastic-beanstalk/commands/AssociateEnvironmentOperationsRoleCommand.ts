import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { AssociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import {
  deserializeAws_queryAssociateEnvironmentOperationsRoleCommand,
  serializeAws_queryAssociateEnvironmentOperationsRoleCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type AssociateEnvironmentOperationsRoleCommandInput = AssociateEnvironmentOperationsRoleMessage;
export type AssociateEnvironmentOperationsRoleCommandOutput = __MetadataBearer;

/**
 * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 *       uses the associated operations role for permissions to downstream services during subsequent
 *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 */
export class AssociateEnvironmentOperationsRoleCommand extends $Command<
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "AssociateEnvironmentOperationsRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEnvironmentOperationsRoleMessage.filterSensitiveLog,
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
