import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateClusterCommand,
  serializeAws_json1_1CreateClusterCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateClusterCommandInput = CreateClusterRequest;
export type CreateClusterCommandOutput = CreateClusterResponse & __MetadataBearer;

/**
 * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code>
 * 			cluster when you launch your first container instance. However, you can create your own
 * 			cluster with a unique name with the <code>CreateCluster</code> action.</p>
 * 		       <note>
 * 			         <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to
 * 				create the Amazon ECS service-linked role for your account so that required resources in
 * 				other AWS services can be managed on your behalf. However, if the IAM user that
 * 				makes the call does not have permissions to create the service-linked role, it is
 * 				not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
 * 					Service-Linked Roles for Amazon ECS</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateClusterCommandInput) {
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
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return deserializeAws_json1_1CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
