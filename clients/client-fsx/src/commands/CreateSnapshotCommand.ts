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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CreateSnapshotRequest,
  CreateSnapshotRequestFilterSensitiveLog,
  CreateSnapshotResponse,
  CreateSnapshotResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateSnapshotCommand,
  serializeAws_json1_1CreateSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
export interface CreateSnapshotCommandOutput extends CreateSnapshotResponse, __MetadataBearer {}

/**
 * <p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With
 *             snapshots, you can easily undo file changes and compare file versions by restoring the
 *             volume to a previous version.</p>
 *          <p>If a snapshot with the specified client request token exists, and the parameters
 *             match, this operation returns the description of the existing snapshot. If a snapshot
 *             with the specified client request token exists, and the parameters don't match, this
 *             operation returns <code>IncompatibleParameterError</code>. If a snapshot with the
 *             specified client request token doesn't exist, <code>CreateSnapshot</code> does the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle
 *                     state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the snapshot.</p>
 *             </li>
 *          </ul>
 *          <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code>
 *             operation without the risk of creating an extra snapshot. This approach can be useful
 *             when an initial call fails in a way that makes it unclear whether a snapshot was
 *             created. If you use the same client request token and the initial call created a
 *             snapshot, the operation returns a successful result because all the parameters are the
 *             same.</p>
 *          <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state
 *             is still <code>CREATING</code>. You can check the snapshot creation status by calling
 *             the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with
 *             other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateSnapshotCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateSnapshotCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class CreateSnapshotCommand extends $Command<
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: CreateSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
