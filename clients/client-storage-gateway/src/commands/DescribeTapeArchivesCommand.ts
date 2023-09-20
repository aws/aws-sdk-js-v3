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

import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/models_0";
import { de_DescribeTapeArchivesCommand, se_DescribeTapeArchivesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTapeArchivesCommand}.
 */
export interface DescribeTapeArchivesCommandInput extends DescribeTapeArchivesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTapeArchivesCommand}.
 */
export interface DescribeTapeArchivesCommandOutput extends DescribeTapeArchivesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 *          operation is only supported in the tape gateway type.</p>
 *          <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a
 *          description of all virtual tapes found in the VTS associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeArchivesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeArchivesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeTapeArchivesInput
 *   TapeARNs: [ // TapeARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTapeArchivesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTapeArchivesOutput
 * //   TapeArchives: [ // TapeArchives
 * //     { // TapeArchive
 * //       TapeARN: "STRING_VALUE",
 * //       TapeBarcode: "STRING_VALUE",
 * //       TapeCreatedDate: new Date("TIMESTAMP"),
 * //       TapeSizeInBytes: Number("long"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       RetrievedTo: "STRING_VALUE",
 * //       TapeStatus: "STRING_VALUE",
 * //       TapeUsedInBytes: Number("long"),
 * //       KMSKey: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       Worm: true || false,
 * //       RetentionStartDate: new Date("TIMESTAMP"),
 * //       PoolEntryDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTapeArchivesCommandInput - {@link DescribeTapeArchivesCommandInput}
 * @returns {@link DescribeTapeArchivesCommandOutput}
 * @see {@link DescribeTapeArchivesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeArchivesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To describe virtual tapes in the VTS
 * ```javascript
 * // Returns a description of specified virtual tapes in the virtual tape shelf (VTS).
 * const input = {
 *   "Limit": 123,
 *   "Marker": "1",
 *   "TapeARNs": [
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/AM08A1AD",
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 *   ]
 * };
 * const command = new DescribeTapeArchivesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "1",
 *   "TapeArchives": [
 *     {
 *       "CompletionTime": "2016-12-16T13:50Z",
 *       "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AM08A1AD",
 *       "TapeBarcode": "AM08A1AD",
 *       "TapeSizeInBytes": 107374182400,
 *       "TapeStatus": "ARCHIVED"
 *     },
 *     {
 *       "CompletionTime": "2016-12-16T13:59Z",
 *       "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
 *       "TapeBarcode": "AMZN01A2A4",
 *       "TapeSizeInBytes": 429496729600,
 *       "TapeStatus": "ARCHIVED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-virtual-tapes-in-the-vts-1471473188198
 * ```
 *
 */
export class DescribeTapeArchivesCommand extends $Command<
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: DescribeTapeArchivesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTapeArchivesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeTapeArchivesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeTapeArchives",
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
  private serialize(input: DescribeTapeArchivesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTapeArchivesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTapeArchivesCommandOutput> {
    return de_DescribeTapeArchivesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
