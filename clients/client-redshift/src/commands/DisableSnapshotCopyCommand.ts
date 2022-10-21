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

import {
  DisableSnapshotCopyMessage,
  DisableSnapshotCopyMessageFilterSensitiveLog,
  DisableSnapshotCopyResult,
  DisableSnapshotCopyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDisableSnapshotCopyCommand,
  serializeAws_queryDisableSnapshotCopyCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DisableSnapshotCopyCommandInput extends DisableSnapshotCopyMessage {}
export interface DisableSnapshotCopyCommandOutput extends DisableSnapshotCopyResult, __MetadataBearer {}

/**
 * <p>Disables the automatic copying of snapshots from one region to another region for a
 *             specified cluster.</p>
 *         <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key
 *             from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that
 *             grants Amazon Redshift permission to the key in the destination region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableSnapshotCopyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableSnapshotCopyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisableSnapshotCopyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSnapshotCopyCommandInput} for command's `input` shape.
 * @see {@link DisableSnapshotCopyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DisableSnapshotCopyCommand extends $Command<
  DisableSnapshotCopyCommandInput,
  DisableSnapshotCopyCommandOutput,
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

  constructor(readonly input: DisableSnapshotCopyCommandInput) {
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
  ): Handler<DisableSnapshotCopyCommandInput, DisableSnapshotCopyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableSnapshotCopyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DisableSnapshotCopyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableSnapshotCopyMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DisableSnapshotCopyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableSnapshotCopyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableSnapshotCopyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableSnapshotCopyCommandOutput> {
    return deserializeAws_queryDisableSnapshotCopyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
