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

import { SnapshotSchedule, SnapshotScheduleFilterSensitiveLog } from "../models/models_0";
import { ModifySnapshotScheduleMessage, ModifySnapshotScheduleMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryModifySnapshotScheduleCommand,
  serializeAws_queryModifySnapshotScheduleCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface ModifySnapshotScheduleCommandInput extends ModifySnapshotScheduleMessage {}
export interface ModifySnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {}

/**
 * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 *             asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifySnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class ModifySnapshotScheduleCommand extends $Command<
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
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

  constructor(readonly input: ModifySnapshotScheduleCommandInput) {
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
  ): Handler<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySnapshotScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifySnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySnapshotScheduleMessageFilterSensitiveLog,
      outputFilterSensitiveLog: SnapshotScheduleFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifySnapshotScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySnapshotScheduleCommandOutput> {
    return deserializeAws_queryModifySnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
