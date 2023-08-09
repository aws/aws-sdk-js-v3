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

import { StartAnnotationImportRequest, StartAnnotationImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_StartAnnotationImportJobCommand, se_StartAnnotationImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAnnotationImportJobCommand}.
 */
export interface StartAnnotationImportJobCommandInput extends StartAnnotationImportRequest {}
/**
 * @public
 *
 * The output of {@link StartAnnotationImportJobCommand}.
 */
export interface StartAnnotationImportJobCommandOutput extends StartAnnotationImportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an annotation import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartAnnotationImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartAnnotationImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // StartAnnotationImportRequest
 *   destinationName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   items: [ // AnnotationImportItemSources // required
 *     { // AnnotationImportItemSource
 *       source: "STRING_VALUE", // required
 *     },
 *   ],
 *   formatOptions: { // FormatOptions Union: only one key present
 *     tsvOptions: { // TsvOptions
 *       readOptions: { // ReadOptions
 *         sep: "STRING_VALUE",
 *         encoding: "STRING_VALUE",
 *         quote: "STRING_VALUE",
 *         quoteAll: true || false,
 *         escape: "STRING_VALUE",
 *         escapeQuotes: true || false,
 *         comment: "STRING_VALUE",
 *         header: true || false,
 *         lineSep: "STRING_VALUE",
 *       },
 *     },
 *     vcfOptions: { // VcfOptions
 *       ignoreQualField: true || false,
 *       ignoreFilterField: true || false,
 *     },
 *   },
 *   runLeftNormalization: true || false,
 *   annotationFields: { // AnnotationFieldMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAnnotationImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAnnotationImportResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAnnotationImportJobCommandInput - {@link StartAnnotationImportJobCommandInput}
 * @returns {@link StartAnnotationImportJobCommandOutput}
 * @see {@link StartAnnotationImportJobCommandInput} for command's `input` shape.
 * @see {@link StartAnnotationImportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
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
export class StartAnnotationImportJobCommand extends $Command<
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
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
  constructor(readonly input: StartAnnotationImportJobCommandInput) {
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
  ): Handler<StartAnnotationImportJobCommandInput, StartAnnotationImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAnnotationImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "StartAnnotationImportJobCommand";
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
  private serialize(input: StartAnnotationImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartAnnotationImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAnnotationImportJobCommandOutput> {
    return de_StartAnnotationImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
