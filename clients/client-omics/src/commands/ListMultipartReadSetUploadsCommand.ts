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

import { ListMultipartReadSetUploadsRequest, ListMultipartReadSetUploadsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_ListMultipartReadSetUploadsCommand,
  se_ListMultipartReadSetUploadsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMultipartReadSetUploadsCommand}.
 */
export interface ListMultipartReadSetUploadsCommandInput extends ListMultipartReadSetUploadsRequest {}
/**
 * @public
 *
 * The output of {@link ListMultipartReadSetUploadsCommand}.
 */
export interface ListMultipartReadSetUploadsCommandOutput
  extends ListMultipartReadSetUploadsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Lists all multipart read set uploads and their statuses.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListMultipartReadSetUploadsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListMultipartReadSetUploadsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListMultipartReadSetUploadsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMultipartReadSetUploadsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultipartReadSetUploadsResponse
 * //   nextToken: "STRING_VALUE",
 * //   uploads: [ // MultipartReadSetUploadList
 * //     { // MultipartReadSetUploadListItem
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       uploadId: "STRING_VALUE", // required
 * //       sourceFileType: "STRING_VALUE", // required
 * //       subjectId: "STRING_VALUE", // required
 * //       sampleId: "STRING_VALUE", // required
 * //       generatedFrom: "STRING_VALUE", // required
 * //       referenceArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMultipartReadSetUploadsCommandInput - {@link ListMultipartReadSetUploadsCommandInput}
 * @returns {@link ListMultipartReadSetUploadsCommandOutput}
 * @see {@link ListMultipartReadSetUploadsCommandInput} for command's `input` shape.
 * @see {@link ListMultipartReadSetUploadsCommandOutput} for command's `response` shape.
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
export class ListMultipartReadSetUploadsCommand extends $Command<
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
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
  constructor(readonly input: ListMultipartReadSetUploadsCommandInput) {
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
  ): Handler<ListMultipartReadSetUploadsCommandInput, ListMultipartReadSetUploadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMultipartReadSetUploadsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "ListMultipartReadSetUploadsCommand";
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
  private serialize(input: ListMultipartReadSetUploadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMultipartReadSetUploadsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMultipartReadSetUploadsCommandOutput> {
    return de_ListMultipartReadSetUploadsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
