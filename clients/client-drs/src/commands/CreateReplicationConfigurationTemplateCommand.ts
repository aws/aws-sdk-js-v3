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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  CreateReplicationConfigurationTemplateRequest,
  CreateReplicationConfigurationTemplateRequestFilterSensitiveLog,
  ReplicationConfigurationTemplate,
  ReplicationConfigurationTemplateFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand,
  serializeAws_restJson1CreateReplicationConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface CreateReplicationConfigurationTemplateCommandInput
  extends CreateReplicationConfigurationTemplateRequest {}
export interface CreateReplicationConfigurationTemplateCommandOutput
  extends ReplicationConfigurationTemplate,
    __MetadataBearer {}

/**
 * <p>Creates a new ReplicationConfigurationTemplate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new CreateReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class CreateReplicationConfigurationTemplateCommand extends $Command<
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: CreateReplicationConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationConfigurationTemplateCommandInput, CreateReplicationConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "CreateReplicationConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationConfigurationTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReplicationConfigurationTemplateFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateReplicationConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateReplicationConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput> {
    return deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
