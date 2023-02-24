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
  CreateRelationalDatabaseFromSnapshotRequest,
  CreateRelationalDatabaseFromSnapshotRequestFilterSensitiveLog,
  CreateRelationalDatabaseFromSnapshotResult,
  CreateRelationalDatabaseFromSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand,
  serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface CreateRelationalDatabaseFromSnapshotCommandInput extends CreateRelationalDatabaseFromSnapshotRequest {}
export interface CreateRelationalDatabaseFromSnapshotCommandOutput
  extends CreateRelationalDatabaseFromSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
 *          <p>You can create a new database from a snapshot in if something goes wrong with your
 *       original database, or to change it to a different plan, such as a high availability or
 *       standard plan.</p>
 *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
 *       access control via request tags and resource tags applied to the resource identified by
 *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateRelationalDatabaseFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateRelationalDatabaseFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateRelationalDatabaseFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelationalDatabaseFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateRelationalDatabaseFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateRelationalDatabaseFromSnapshotCommand extends $Command<
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
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

  constructor(readonly input: CreateRelationalDatabaseFromSnapshotCommandInput) {
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
  ): Handler<CreateRelationalDatabaseFromSnapshotCommandInput, CreateRelationalDatabaseFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRelationalDatabaseFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateRelationalDatabaseFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRelationalDatabaseFromSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRelationalDatabaseFromSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateRelationalDatabaseFromSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
