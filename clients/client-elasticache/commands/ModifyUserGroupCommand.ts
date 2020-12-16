import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyUserGroupMessage, UserGroup } from "../models/models_0";
import {
  deserializeAws_queryModifyUserGroupCommand,
  serializeAws_queryModifyUserGroupCommand,
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

export type ModifyUserGroupCommandInput = ModifyUserGroupMessage;
export type ModifyUserGroupCommandOutput = UserGroup & __MetadataBearer;

/**
 * <p>Changes the list of users that belong to the user group.</p>
 */
export class ModifyUserGroupCommand extends $Command<
  ModifyUserGroupCommandInput,
  ModifyUserGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyUserGroupCommandInput) {
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
  ): Handler<ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyUserGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyUserGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UserGroup.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyUserGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyUserGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyUserGroupCommandOutput> {
    return deserializeAws_queryModifyUserGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
