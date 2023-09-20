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
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";

import {
  UploadReadSetPartRequest,
  UploadReadSetPartRequestFilterSensitiveLog,
  UploadReadSetPartResponse,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_UploadReadSetPartCommand, se_UploadReadSetPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadReadSetPartCommand}.
 */
export interface UploadReadSetPartCommandInput extends Omit<UploadReadSetPartRequest, "payload"> {
  payload: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadReadSetPartCommand}.
 */
export interface UploadReadSetPartCommandOutput extends UploadReadSetPartResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       This operation uploads a specific part of a read set. If you upload a new part using a previously used part number, the previously uploaded part will be overwritten.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UploadReadSetPartCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UploadReadSetPartCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // UploadReadSetPartRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   partSource: "STRING_VALUE", // required
 *   partNumber: Number("int"), // required
 *   payload: "STREAMING_BLOB_VALUE", // required
 * };
 * const command = new UploadReadSetPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadReadSetPartResponse
 * //   checksum: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UploadReadSetPartCommandInput - {@link UploadReadSetPartCommandInput}
 * @returns {@link UploadReadSetPartCommandOutput}
 * @see {@link UploadReadSetPartCommandInput} for command's `input` shape.
 * @see {@link UploadReadSetPartCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p>
 *       The operation is not supported by Amazon Omics, or the API does not exist.
 *     </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class UploadReadSetPartCommand extends $Command<
  UploadReadSetPartCommandInput,
  UploadReadSetPartCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: UploadReadSetPartCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadReadSetPartCommandInput, UploadReadSetPartCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadReadSetPartCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "UploadReadSetPartCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadReadSetPartRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "UploadReadSetPart",
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
  private serialize(input: UploadReadSetPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadReadSetPartCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadReadSetPartCommandOutput> {
    return de_UploadReadSetPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
