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
  ApplicationResourceLifecycleDescriptionMessage,
  ApplicationResourceLifecycleDescriptionMessageFilterSensitiveLog,
  UpdateApplicationResourceLifecycleMessage,
  UpdateApplicationResourceLifecycleMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateApplicationResourceLifecycleCommand,
  serializeAws_queryUpdateApplicationResourceLifecycleCommand,
} from "../protocols/Aws_query";

export interface UpdateApplicationResourceLifecycleCommandInput extends UpdateApplicationResourceLifecycleMessage {}
export interface UpdateApplicationResourceLifecycleCommandOutput
  extends ApplicationResourceLifecycleDescriptionMessage,
    __MetadataBearer {}

/**
 * <p>Modifies lifecycle settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationResourceLifecycleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationResourceLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationResourceLifecycleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class UpdateApplicationResourceLifecycleCommand extends $Command<
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
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

  constructor(readonly input: UpdateApplicationResourceLifecycleCommandInput) {
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
  ): Handler<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationResourceLifecycleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationResourceLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationResourceLifecycleMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ApplicationResourceLifecycleDescriptionMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApplicationResourceLifecycleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateApplicationResourceLifecycleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput> {
    return deserializeAws_queryUpdateApplicationResourceLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
