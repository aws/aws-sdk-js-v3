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
  CreatePlatformVersionRequest,
  CreatePlatformVersionRequestFilterSensitiveLog,
  CreatePlatformVersionResult,
  CreatePlatformVersionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreatePlatformVersionCommand,
  serializeAws_queryCreatePlatformVersionCommand,
} from "../protocols/Aws_query";

export interface CreatePlatformVersionCommandInput extends CreatePlatformVersionRequest {}
export interface CreatePlatformVersionCommandOutput extends CreatePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Create a new version of your custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreatePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreatePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreatePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class CreatePlatformVersionCommand extends $Command<
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
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

  constructor(readonly input: CreatePlatformVersionCommandInput) {
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
  ): Handler<CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePlatformVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreatePlatformVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlatformVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePlatformVersionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlatformVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePlatformVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlatformVersionCommandOutput> {
    return deserializeAws_queryCreatePlatformVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
