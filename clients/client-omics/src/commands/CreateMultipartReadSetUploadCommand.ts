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

import { CreateMultipartReadSetUploadRequest, CreateMultipartReadSetUploadResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_CreateMultipartReadSetUploadCommand,
  se_CreateMultipartReadSetUploadCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMultipartReadSetUploadCommand}.
 */
export interface CreateMultipartReadSetUploadCommandInput extends CreateMultipartReadSetUploadRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultipartReadSetUploadCommand}.
 */
export interface CreateMultipartReadSetUploadCommandOutput
  extends CreateMultipartReadSetUploadResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Begins a multipart read set upload.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateMultipartReadSetUploadCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateMultipartReadSetUploadCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateMultipartReadSetUploadRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sourceFileType: "STRING_VALUE", // required
 *   subjectId: "STRING_VALUE", // required
 *   sampleId: "STRING_VALUE", // required
 *   generatedFrom: "STRING_VALUE",
 *   referenceArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMultipartReadSetUploadCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultipartReadSetUploadResponse
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   uploadId: "STRING_VALUE", // required
 * //   sourceFileType: "STRING_VALUE", // required
 * //   subjectId: "STRING_VALUE", // required
 * //   sampleId: "STRING_VALUE", // required
 * //   generatedFrom: "STRING_VALUE",
 * //   referenceArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateMultipartReadSetUploadCommandInput - {@link CreateMultipartReadSetUploadCommandInput}
 * @returns {@link CreateMultipartReadSetUploadCommandOutput}
 * @see {@link CreateMultipartReadSetUploadCommandInput} for command's `input` shape.
 * @see {@link CreateMultipartReadSetUploadCommandOutput} for command's `response` shape.
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
export class CreateMultipartReadSetUploadCommand extends $Command<
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
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
  constructor(readonly input: CreateMultipartReadSetUploadCommandInput) {
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
  ): Handler<CreateMultipartReadSetUploadCommandInput, CreateMultipartReadSetUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMultipartReadSetUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "CreateMultipartReadSetUploadCommand";
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
  private serialize(input: CreateMultipartReadSetUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMultipartReadSetUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMultipartReadSetUploadCommandOutput> {
    return de_CreateMultipartReadSetUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
