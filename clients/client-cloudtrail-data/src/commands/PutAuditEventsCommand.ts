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

import { CloudTrailDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailDataClient";
import {
  PutAuditEventsRequest,
  PutAuditEventsRequestFilterSensitiveLog,
  PutAuditEventsResponse,
  PutAuditEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutAuditEventsCommand,
  serializeAws_restJson1PutAuditEventsCommand,
} from "../protocols/Aws_restJson1";

export interface PutAuditEventsCommandInput extends PutAuditEventsRequest {}
export interface PutAuditEventsCommandOutput extends PutAuditEventsResponse, __MetadataBearer {}

/**
 * <p>Ingests your application events into CloudTrail Lake. A required parameter,
 *             <code>auditEvents</code>, accepts the JSON records (also called
 *             <i>payload</i>) of events that you want CloudTrail to ingest. You
 *          can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code>
 *          request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailDataClient, PutAuditEventsCommand } from "@aws-sdk/client-cloudtrail-data"; // ES Modules import
 * // const { CloudTrailDataClient, PutAuditEventsCommand } = require("@aws-sdk/client-cloudtrail-data"); // CommonJS import
 * const client = new CloudTrailDataClient(config);
 * const command = new PutAuditEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAuditEventsCommandInput} for command's `input` shape.
 * @see {@link PutAuditEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailDataClientResolvedConfig | config} for CloudTrailDataClient's `config` shape.
 *
 */
export class PutAuditEventsCommand extends $Command<
  PutAuditEventsCommandInput,
  PutAuditEventsCommandOutput,
  CloudTrailDataClientResolvedConfig
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

  constructor(readonly input: PutAuditEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAuditEventsCommandInput, PutAuditEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAuditEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailDataClient";
    const commandName = "PutAuditEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAuditEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAuditEventsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAuditEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAuditEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAuditEventsCommandOutput> {
    return deserializeAws_restJson1PutAuditEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
