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
  ConvertRecoveryPointToSnapshotRequest,
  ConvertRecoveryPointToSnapshotRequestFilterSensitiveLog,
  ConvertRecoveryPointToSnapshotResponse,
  ConvertRecoveryPointToSnapshotResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommand,
  serializeAws_json1_1ConvertRecoveryPointToSnapshotCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface ConvertRecoveryPointToSnapshotCommandInput extends ConvertRecoveryPointToSnapshotRequest {}
export interface ConvertRecoveryPointToSnapshotCommandOutput
  extends ConvertRecoveryPointToSnapshotResponse,
    __MetadataBearer {}

/**
 * <p>Converts a recovery point to a snapshot. For more information about recovery points and snapshots,
 *          see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ConvertRecoveryPointToSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ConvertRecoveryPointToSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new ConvertRecoveryPointToSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConvertRecoveryPointToSnapshotCommandInput} for command's `input` shape.
 * @see {@link ConvertRecoveryPointToSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class ConvertRecoveryPointToSnapshotCommand extends $Command<
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
  RedshiftServerlessClientResolvedConfig
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

  constructor(readonly input: ConvertRecoveryPointToSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConvertRecoveryPointToSnapshotCommandInput, ConvertRecoveryPointToSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConvertRecoveryPointToSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "ConvertRecoveryPointToSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConvertRecoveryPointToSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConvertRecoveryPointToSnapshotResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConvertRecoveryPointToSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ConvertRecoveryPointToSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConvertRecoveryPointToSnapshotCommandOutput> {
    return deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
