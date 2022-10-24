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
  GetRelationalDatabaseSnapshotRequest,
  GetRelationalDatabaseSnapshotRequestFilterSensitiveLog,
  GetRelationalDatabaseSnapshotResult,
  GetRelationalDatabaseSnapshotResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand,
  serializeAws_json1_1GetRelationalDatabaseSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface GetRelationalDatabaseSnapshotCommandInput extends GetRelationalDatabaseSnapshotRequest {}
export interface GetRelationalDatabaseSnapshotCommandOutput
  extends GetRelationalDatabaseSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetRelationalDatabaseSnapshotCommand extends $Command<
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput,
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

  constructor(readonly input: GetRelationalDatabaseSnapshotCommandInput) {
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
  ): Handler<GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRelationalDatabaseSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRelationalDatabaseSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseSnapshotCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
