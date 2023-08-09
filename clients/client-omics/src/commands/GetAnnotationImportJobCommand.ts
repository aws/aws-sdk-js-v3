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

import { GetAnnotationImportRequest, GetAnnotationImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetAnnotationImportJobCommand, se_GetAnnotationImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAnnotationImportJobCommand}.
 */
export interface GetAnnotationImportJobCommandInput extends GetAnnotationImportRequest {}
/**
 * @public
 *
 * The output of {@link GetAnnotationImportJobCommand}.
 */
export interface GetAnnotationImportJobCommandOutput extends GetAnnotationImportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an annotation import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetAnnotationImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetAnnotationImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetAnnotationImportRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetAnnotationImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetAnnotationImportResponse
 * //   id: "STRING_VALUE", // required
 * //   destinationName: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"), // required
 * //   items: [ // AnnotationImportItemDetails // required
 * //     { // AnnotationImportItemDetail
 * //       source: "STRING_VALUE", // required
 * //       jobStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   runLeftNormalization: true || false, // required
 * //   formatOptions: { // FormatOptions Union: only one key present
 * //     tsvOptions: { // TsvOptions
 * //       readOptions: { // ReadOptions
 * //         sep: "STRING_VALUE",
 * //         encoding: "STRING_VALUE",
 * //         quote: "STRING_VALUE",
 * //         quoteAll: true || false,
 * //         escape: "STRING_VALUE",
 * //         escapeQuotes: true || false,
 * //         comment: "STRING_VALUE",
 * //         header: true || false,
 * //         lineSep: "STRING_VALUE",
 * //       },
 * //     },
 * //     vcfOptions: { // VcfOptions
 * //       ignoreQualField: true || false,
 * //       ignoreFilterField: true || false,
 * //     },
 * //   },
 * //   annotationFields: { // AnnotationFieldMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnnotationImportJobCommandInput - {@link GetAnnotationImportJobCommandInput}
 * @returns {@link GetAnnotationImportJobCommandOutput}
 * @see {@link GetAnnotationImportJobCommandInput} for command's `input` shape.
 * @see {@link GetAnnotationImportJobCommandOutput} for command's `response` shape.
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
export class GetAnnotationImportJobCommand extends $Command<
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
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
  constructor(readonly input: GetAnnotationImportJobCommandInput) {
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
  ): Handler<GetAnnotationImportJobCommandInput, GetAnnotationImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAnnotationImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetAnnotationImportJobCommand";
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
  private serialize(input: GetAnnotationImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAnnotationImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnnotationImportJobCommandOutput> {
    return de_GetAnnotationImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
