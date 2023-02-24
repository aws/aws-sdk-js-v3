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
  DeletePlatformVersionRequest,
  DeletePlatformVersionRequestFilterSensitiveLog,
  DeletePlatformVersionResult,
  DeletePlatformVersionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeletePlatformVersionCommand,
  serializeAws_queryDeletePlatformVersionCommand,
} from "../protocols/Aws_query";

export interface DeletePlatformVersionCommandInput extends DeletePlatformVersionRequest {}
export interface DeletePlatformVersionCommandOutput extends DeletePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Deletes the specified version of a custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeletePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeletePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeletePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class DeletePlatformVersionCommand extends $Command<
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
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

  constructor(readonly input: DeletePlatformVersionCommandInput) {
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
  ): Handler<DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePlatformVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DeletePlatformVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlatformVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeletePlatformVersionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlatformVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePlatformVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePlatformVersionCommandOutput> {
    return deserializeAws_queryDeletePlatformVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
