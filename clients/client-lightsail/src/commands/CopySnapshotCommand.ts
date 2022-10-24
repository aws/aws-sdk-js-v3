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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CopySnapshotRequest,
  CopySnapshotRequestFilterSensitiveLog,
  CopySnapshotResult,
  CopySnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CopySnapshotCommand,
  serializeAws_json1_1CopySnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface CopySnapshotCommandInput extends CopySnapshotRequest {}
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {}

/**
 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an
 *       automatic snapshot of an instance or disk as a manual snapshot. This operation can also be
 *       used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p>
 *          <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source
 *         region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code>
 *       parameters.</p>
 *          <p>When copying an <i>automatic snapshot</i>, be sure to define the
 *         <code>source region</code>, <code>source resource name</code>, <code>target snapshot
 *         name</code>, and either the <code>restore date</code> or the <code>use latest restorable
 *         auto snapshot</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CopySnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CopySnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CopySnapshotCommand extends $Command<
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: CopySnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopySnapshotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CopySnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopySnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopySnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopySnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopySnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopySnapshotCommandOutput> {
    return deserializeAws_json1_1CopySnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
