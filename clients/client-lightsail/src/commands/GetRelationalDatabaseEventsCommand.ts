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
  GetRelationalDatabaseEventsRequest,
  GetRelationalDatabaseEventsRequestFilterSensitiveLog,
  GetRelationalDatabaseEventsResult,
  GetRelationalDatabaseEventsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseEventsCommand,
  serializeAws_json1_1GetRelationalDatabaseEventsCommand,
} from "../protocols/Aws_json1_1";

export interface GetRelationalDatabaseEventsCommandInput extends GetRelationalDatabaseEventsRequest {}
export interface GetRelationalDatabaseEventsCommandOutput extends GetRelationalDatabaseEventsResult, __MetadataBearer {}

/**
 * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseEventsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseEventsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseEventsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseEventsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetRelationalDatabaseEventsCommand extends $Command<
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
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

  constructor(readonly input: GetRelationalDatabaseEventsCommandInput) {
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
  ): Handler<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRelationalDatabaseEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseEventsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRelationalDatabaseEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseEventsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseEventsCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
