import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateUserGroupMessage, UserGroup } from "../models/models_0";
import {
  deserializeAws_queryCreateUserGroupCommand,
  serializeAws_queryCreateUserGroupCommand,
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

export interface CreateUserGroupCommandInput extends CreateUserGroupMessage {}
export interface CreateUserGroupCommandOutput extends UserGroup, __MetadataBearer {}

/**
 * <p>For Redis engine version 6.x onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateUserGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateUserGroupCommand extends $Command<
  CreateUserGroupCommandInput,
  CreateUserGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserGroupCommandInput) {
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
  ): Handler<CreateUserGroupCommandInput, CreateUserGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateUserGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UserGroup.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateUserGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserGroupCommandOutput> {
    return deserializeAws_queryCreateUserGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
