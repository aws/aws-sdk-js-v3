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
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesRequestFilterSensitiveLog,
  DescribeReplicationConfigurationTemplatesResponse,
  DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand,
  serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeReplicationConfigurationTemplatesCommandInput
  extends DescribeReplicationConfigurationTemplatesRequest {}
export interface DescribeReplicationConfigurationTemplatesCommandOutput
  extends DescribeReplicationConfigurationTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeReplicationConfigurationTemplatesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeReplicationConfigurationTemplatesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new DescribeReplicationConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class DescribeReplicationConfigurationTemplatesCommand extends $Command<
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
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

  constructor(readonly input: DescribeReplicationConfigurationTemplatesCommandInput) {
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
  ): Handler<
    DescribeReplicationConfigurationTemplatesCommandInput,
    DescribeReplicationConfigurationTemplatesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeReplicationConfigurationTemplatesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DescribeReplicationConfigurationTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationConfigurationTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> {
    return deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
