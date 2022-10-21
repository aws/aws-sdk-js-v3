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

import { PauseClusterMessage, PauseClusterMessageFilterSensitiveLog } from "../models/models_0";
import { PauseClusterResult, PauseClusterResultFilterSensitiveLog } from "../models/models_1";
import { deserializeAws_queryPauseClusterCommand, serializeAws_queryPauseClusterCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface PauseClusterCommandInput extends PauseClusterMessage {}
export interface PauseClusterCommandOutput extends PauseClusterResult, __MetadataBearer {}

/**
 * <p>Pauses a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PauseClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PauseClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new PauseClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PauseClusterCommandInput} for command's `input` shape.
 * @see {@link PauseClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class PauseClusterCommand extends $Command<
  PauseClusterCommandInput,
  PauseClusterCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: PauseClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PauseClusterCommandInput, PauseClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PauseClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "PauseClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PauseClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: PauseClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PauseClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPauseClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PauseClusterCommandOutput> {
    return deserializeAws_queryPauseClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
