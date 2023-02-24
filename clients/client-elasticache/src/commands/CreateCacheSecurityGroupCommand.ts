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
import {
  CreateCacheSecurityGroupMessage,
  CreateCacheSecurityGroupMessageFilterSensitiveLog,
  CreateCacheSecurityGroupResult,
  CreateCacheSecurityGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateCacheSecurityGroupCommand,
  serializeAws_queryCreateCacheSecurityGroupCommand,
} from "../protocols/Aws_query";

export interface CreateCacheSecurityGroupCommandInput extends CreateCacheSecurityGroupMessage {}
export interface CreateCacheSecurityGroupCommandOutput extends CreateCacheSecurityGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new cache security group. Use a
 *             cache security group to control access to one or more clusters.</p>
 *          <p>Cache security groups are only used when you are creating a cluster outside of an Amazon
 *             Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache
 *             subnet group instead. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class CreateCacheSecurityGroupCommand extends $Command<
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput,
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

  constructor(readonly input: CreateCacheSecurityGroupCommandInput) {
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
  ): Handler<CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCacheSecurityGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCacheSecurityGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCacheSecurityGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCacheSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCacheSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheSecurityGroupCommandOutput> {
    return deserializeAws_queryCreateCacheSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
