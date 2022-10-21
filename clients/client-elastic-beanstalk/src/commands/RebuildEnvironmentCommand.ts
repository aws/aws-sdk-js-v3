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
import { RebuildEnvironmentMessage, RebuildEnvironmentMessageFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryRebuildEnvironmentCommand,
  serializeAws_queryRebuildEnvironmentCommand,
} from "../protocols/Aws_query";

export interface RebuildEnvironmentCommandInput extends RebuildEnvironmentMessage {}
export interface RebuildEnvironmentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
 *       load balancer, etc.) for a specified environment and forces a restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RebuildEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RebuildEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RebuildEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebuildEnvironmentCommandInput} for command's `input` shape.
 * @see {@link RebuildEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class RebuildEnvironmentCommand extends $Command<
  RebuildEnvironmentCommandInput,
  RebuildEnvironmentCommandOutput,
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

  constructor(readonly input: RebuildEnvironmentCommandInput) {
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
  ): Handler<RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebuildEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "RebuildEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebuildEnvironmentMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebuildEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebuildEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebuildEnvironmentCommandOutput> {
    return deserializeAws_queryRebuildEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
