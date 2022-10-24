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
  GetRelationalDatabaseSnapshotsRequest,
  GetRelationalDatabaseSnapshotsRequestFilterSensitiveLog,
  GetRelationalDatabaseSnapshotsResult,
  GetRelationalDatabaseSnapshotsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand,
  serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand,
} from "../protocols/Aws_json1_1";

export interface GetRelationalDatabaseSnapshotsCommandInput extends GetRelationalDatabaseSnapshotsRequest {}
export interface GetRelationalDatabaseSnapshotsCommandOutput
  extends GetRelationalDatabaseSnapshotsResult,
    __MetadataBearer {}

/**
 * <p>Returns information about all of your database snapshots in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetRelationalDatabaseSnapshotsCommand extends $Command<
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput,
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

  constructor(readonly input: GetRelationalDatabaseSnapshotsCommandInput) {
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
  ): Handler<GetRelationalDatabaseSnapshotsCommandInput, GetRelationalDatabaseSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRelationalDatabaseSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseSnapshotsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseSnapshotsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRelationalDatabaseSnapshotsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseSnapshotsCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
