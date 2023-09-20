// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudTrailDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailDataClient";
import { PutAuditEventsRequest, PutAuditEventsResponse } from "../models/models_0";
import { de_PutAuditEventsCommand, se_PutAuditEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAuditEventsCommand}.
 */
export interface PutAuditEventsCommandInput extends PutAuditEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutAuditEventsCommand}.
 */
export interface PutAuditEventsCommandOutput extends PutAuditEventsResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // PutAuditEventsRequest
 *   auditEvents: [ // AuditEvents // required
 *     { // AuditEvent
 *       id: "STRING_VALUE", // required
 *       eventData: "STRING_VALUE", // required
 *       eventDataChecksum: "STRING_VALUE",
 *     },
 *   ],
 *   channelArn: "STRING_VALUE", // required
 *   externalId: "STRING_VALUE",
 * };
 * const command = new PutAuditEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutAuditEventsResponse
 * //   successful: [ // AuditEventResultEntries // required
 * //     { // AuditEventResultEntry
 * //       id: "STRING_VALUE", // required
 * //       eventID: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failed: [ // ResultErrorEntries // required
 * //     { // ResultErrorEntry
 * //       id: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutAuditEventsCommandInput - {@link PutAuditEventsCommandInput}
 * @returns {@link PutAuditEventsCommandOutput}
 * @see {@link PutAuditEventsCommandInput} for command's `input` shape.
 * @see {@link PutAuditEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailDataClientResolvedConfig | config} for CloudTrailDataClient's `config` shape.
 *
 * @throws {@link ChannelInsufficientPermission} (client fault)
 *  <p>The caller's account ID must be the same as the channel owner's account ID.</p>
 *
 * @throws {@link ChannelNotFound} (client fault)
 *  <p>The channel could not be found.</p>
 *
 * @throws {@link ChannelUnsupportedSchema} (client fault)
 *  <p>The schema type of the event is not supported.</p>
 *
 * @throws {@link DuplicatedAuditEventId} (client fault)
 *  <p>Two or more entries in the request have the same event ID.</p>
 *
 * @throws {@link InvalidChannelARN} (client fault)
 *  <p>The specified channel ARN is not a valid
 *          channel ARN.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation requested is not supported in this region or account.</p>
 *
 * @throws {@link CloudTrailDataServiceException}
 * <p>Base exception class for all service exceptions from CloudTrailData service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrailDataService",
        operation: "PutAuditEvents",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutAuditEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAuditEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAuditEventsCommandOutput> {
    return de_PutAuditEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
