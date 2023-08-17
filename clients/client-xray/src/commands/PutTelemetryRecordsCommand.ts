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
} from "@smithy/types";

import { PutTelemetryRecordsRequest, PutTelemetryRecordsResult } from "../models/models_0";
import { de_PutTelemetryRecordsCommand, se_PutTelemetryRecordsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutTelemetryRecordsCommand}.
 */
export interface PutTelemetryRecordsCommandInput extends PutTelemetryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link PutTelemetryRecordsCommand}.
 */
export interface PutTelemetryRecordsCommandOutput extends PutTelemetryRecordsResult, __MetadataBearer {}

/**
 * @public
 * <p>Used by the Amazon Web Services X-Ray daemon to upload telemetry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTelemetryRecordsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTelemetryRecordsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // PutTelemetryRecordsRequest
 *   TelemetryRecords: [ // TelemetryRecordList // required
 *     { // TelemetryRecord
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       SegmentsReceivedCount: Number("int"),
 *       SegmentsSentCount: Number("int"),
 *       SegmentsSpilloverCount: Number("int"),
 *       SegmentsRejectedCount: Number("int"),
 *       BackendConnectionErrors: { // BackendConnectionErrors
 *         TimeoutCount: Number("int"),
 *         ConnectionRefusedCount: Number("int"),
 *         HTTPCode4XXCount: Number("int"),
 *         HTTPCode5XXCount: Number("int"),
 *         UnknownHostCount: Number("int"),
 *         OtherCount: Number("int"),
 *       },
 *     },
 *   ],
 *   EC2InstanceId: "STRING_VALUE",
 *   Hostname: "STRING_VALUE",
 *   ResourceARN: "STRING_VALUE",
 * };
 * const command = new PutTelemetryRecordsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTelemetryRecordsCommandInput - {@link PutTelemetryRecordsCommandInput}
 * @returns {@link PutTelemetryRecordsCommandOutput}
 * @see {@link PutTelemetryRecordsCommandInput} for command's `input` shape.
 * @see {@link PutTelemetryRecordsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 */
export class PutTelemetryRecordsCommand extends $Command<
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
  XRayClientResolvedConfig
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
  constructor(readonly input: PutTelemetryRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutTelemetryRecordsCommandInput, PutTelemetryRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutTelemetryRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "PutTelemetryRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutTelemetryRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutTelemetryRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutTelemetryRecordsCommandOutput> {
    return de_PutTelemetryRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
