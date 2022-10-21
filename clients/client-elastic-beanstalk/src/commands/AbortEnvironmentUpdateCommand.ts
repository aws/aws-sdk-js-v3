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
import { AbortEnvironmentUpdateMessage, AbortEnvironmentUpdateMessageFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryAbortEnvironmentUpdateCommand,
  serializeAws_queryAbortEnvironmentUpdateCommand,
} from "../protocols/Aws_query";

export interface AbortEnvironmentUpdateCommandInput extends AbortEnvironmentUpdateMessage {}
export interface AbortEnvironmentUpdateCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels in-progress environment configuration update or application version
 *       deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AbortEnvironmentUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortEnvironmentUpdateCommandInput} for command's `input` shape.
 * @see {@link AbortEnvironmentUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class AbortEnvironmentUpdateCommand extends $Command<
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
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

  constructor(readonly input: AbortEnvironmentUpdateCommandInput) {
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
  ): Handler<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AbortEnvironmentUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "AbortEnvironmentUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AbortEnvironmentUpdateMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortEnvironmentUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAbortEnvironmentUpdateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortEnvironmentUpdateCommandOutput> {
    return deserializeAws_queryAbortEnvironmentUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
