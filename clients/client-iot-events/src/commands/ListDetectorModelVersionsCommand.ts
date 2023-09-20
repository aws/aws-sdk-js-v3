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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListDetectorModelVersionsRequest, ListDetectorModelVersionsResponse } from "../models/models_0";
import { de_ListDetectorModelVersionsCommand, se_ListDetectorModelVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDetectorModelVersionsCommand}.
 */
export interface ListDetectorModelVersionsCommandInput extends ListDetectorModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectorModelVersionsCommand}.
 */
export interface ListDetectorModelVersionsCommandOutput extends ListDetectorModelVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the versions of a detector model. Only the metadata associated with each
 *       detector model version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // ListDetectorModelVersionsRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDetectorModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectorModelVersionsResponse
 * //   detectorModelVersionSummaries: [ // DetectorModelVersionSummaries
 * //     { // DetectorModelVersionSummary
 * //       detectorModelName: "STRING_VALUE",
 * //       detectorModelVersion: "STRING_VALUE",
 * //       detectorModelArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       status: "ACTIVE" || "ACTIVATING" || "INACTIVE" || "DEPRECATED" || "DRAFT" || "PAUSED" || "FAILED",
 * //       evaluationMethod: "BATCH" || "SERIAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectorModelVersionsCommandInput - {@link ListDetectorModelVersionsCommandInput}
 * @returns {@link ListDetectorModelVersionsCommandOutput}
 * @see {@link ListDetectorModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 */
export class ListDetectorModelVersionsCommand extends $Command<
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput,
  IoTEventsClientResolvedConfig
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
  constructor(readonly input: ListDetectorModelVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDetectorModelVersionsCommandInput, ListDetectorModelVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDetectorModelVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "ListDetectorModelVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotColumboService",
        operation: "ListDetectorModelVersions",
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
  private serialize(input: ListDetectorModelVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDetectorModelVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDetectorModelVersionsCommandOutput> {
    return de_ListDetectorModelVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
