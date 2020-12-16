import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteUserGroupMessage, UserGroup } from "../models/models_0";
import {
  deserializeAws_queryDeleteUserGroupCommand,
  serializeAws_queryDeleteUserGroupCommand,
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

export type DeleteUserGroupCommandInput = DeleteUserGroupMessage;
export type DeleteUserGroupCommandOutput = UserGroup & __MetadataBearer;

/**
 * <p>For Redis engine version 6.x onwards: Deletes a ser group. The user group must first be disassociated from the replcation group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
 */
export class DeleteUserGroupCommand extends $Command<
  DeleteUserGroupCommandInput,
  DeleteUserGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteUserGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UserGroup.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteUserGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserGroupCommandOutput> {
    return deserializeAws_queryDeleteUserGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
