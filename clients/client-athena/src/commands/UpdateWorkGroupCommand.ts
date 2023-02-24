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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  UpdateWorkGroupInput,
  UpdateWorkGroupInputFilterSensitiveLog,
  UpdateWorkGroupOutput,
  UpdateWorkGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWorkGroupCommand,
  serializeAws_json1_1UpdateWorkGroupCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateWorkGroupCommandInput extends UpdateWorkGroupInput {}
export interface UpdateWorkGroupCommandOutput extends UpdateWorkGroupOutput, __MetadataBearer {}

/**
 * <p>Updates the workgroup with the specified name. The workgroup's name cannot be changed.
 *             Only one of <code>ConfigurationsUpdates</code> or <code>ConfigurationUpdates</code> can
 *             be specified; <code>ConfigurationsUpdates</code> for a workgroup with multi engine
 *             support (for example, an Apache Spark enabled workgroup) or
 *                 <code>ConfigurationUpdates</code> for an Athena SQL workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdateWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class UpdateWorkGroupCommand extends $Command<
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: UpdateWorkGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdateWorkGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWorkGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkGroupCommandOutput> {
    return deserializeAws_json1_1UpdateWorkGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
