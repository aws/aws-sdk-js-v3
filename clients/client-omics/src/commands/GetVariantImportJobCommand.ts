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

import { GetVariantImportRequest, GetVariantImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetVariantImportJobCommand, se_GetVariantImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVariantImportJobCommand}.
 */
export interface GetVariantImportJobCommandInput extends GetVariantImportRequest {}
/**
 * @public
 *
 * The output of {@link GetVariantImportJobCommand}.
 */
export interface GetVariantImportJobCommandOutput extends GetVariantImportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a variant import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetVariantImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetVariantImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetVariantImportRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetVariantImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetVariantImportResponse
 * //   id: "STRING_VALUE", // required
 * //   destinationName: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"),
 * //   items: [ // VariantImportItemDetails // required
 * //     { // VariantImportItemDetail
 * //       source: "STRING_VALUE", // required
 * //       jobStatus: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   runLeftNormalization: true || false, // required
 * //   annotationFields: { // AnnotationFieldMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVariantImportJobCommandInput - {@link GetVariantImportJobCommandInput}
 * @returns {@link GetVariantImportJobCommandOutput}
 * @see {@link GetVariantImportJobCommandInput} for command's `input` shape.
 * @see {@link GetVariantImportJobCommandOutput} for command's `response` shape.
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
export class GetVariantImportJobCommand extends $Command<
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
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
  constructor(readonly input: GetVariantImportJobCommandInput) {
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
  ): Handler<GetVariantImportJobCommandInput, GetVariantImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVariantImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetVariantImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "GetVariantImportJob",
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
  private serialize(input: GetVariantImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVariantImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVariantImportJobCommandOutput> {
    return de_GetVariantImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
