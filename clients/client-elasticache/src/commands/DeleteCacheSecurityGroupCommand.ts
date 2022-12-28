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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheSecurityGroupMessage, DeleteCacheSecurityGroupMessageFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDeleteCacheSecurityGroupCommand,
  serializeAws_queryDeleteCacheSecurityGroupCommand,
} from "../protocols/Aws_query";

export interface DeleteCacheSecurityGroupCommandInput extends DeleteCacheSecurityGroupMessage {}
export interface DeleteCacheSecurityGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a cache security group.</p>
 *          <note>
 *             <p>You cannot delete a cache security group if it is associated with any clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DeleteCacheSecurityGroupCommand extends $Command<
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput,
  ElastiCacheClientResolvedConfig
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

  constructor(readonly input: DeleteCacheSecurityGroupCommandInput) {
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
  ): Handler<DeleteCacheSecurityGroupCommandInput, DeleteCacheSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCacheSecurityGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteCacheSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCacheSecurityGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCacheSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCacheSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCacheSecurityGroupCommandOutput> {
    return deserializeAws_queryDeleteCacheSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
