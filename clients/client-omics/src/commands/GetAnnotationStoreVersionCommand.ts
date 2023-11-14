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

import { GetAnnotationStoreVersionRequest, GetAnnotationStoreVersionResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetAnnotationStoreVersionCommand, se_GetAnnotationStoreVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAnnotationStoreVersionCommand}.
 */
export interface GetAnnotationStoreVersionCommandInput extends GetAnnotationStoreVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetAnnotationStoreVersionCommand}.
 */
export interface GetAnnotationStoreVersionCommandOutput extends GetAnnotationStoreVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Retrieves the metadata for an annotation store version.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetAnnotationStoreVersionRequest
 *   name: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 * };
 * const command = new GetAnnotationStoreVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetAnnotationStoreVersionResponse
 * //   storeId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   versionArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   versionOptions: { // VersionOptions Union: only one key present
 * //     tsvVersionOptions: { // TsvVersionOptions
 * //       annotationType: "STRING_VALUE",
 * //       formatToHeader: { // FormatToHeader
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       schema: [ // Schema
 * //         { // SchemaItem
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   statusMessage: "STRING_VALUE", // required
 * //   versionSizeBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetAnnotationStoreVersionCommandInput - {@link GetAnnotationStoreVersionCommandInput}
 * @returns {@link GetAnnotationStoreVersionCommandOutput}
 * @see {@link GetAnnotationStoreVersionCommandInput} for command's `input` shape.
 * @see {@link GetAnnotationStoreVersionCommandOutput} for command's `response` shape.
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
export class GetAnnotationStoreVersionCommand extends $Command<
  GetAnnotationStoreVersionCommandInput,
  GetAnnotationStoreVersionCommandOutput,
  OmicsClientResolvedConfig
> {
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
  constructor(readonly input: GetAnnotationStoreVersionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAnnotationStoreVersionCommandInput, GetAnnotationStoreVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAnnotationStoreVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetAnnotationStoreVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "GetAnnotationStoreVersion",
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
  private serialize(input: GetAnnotationStoreVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAnnotationStoreVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAnnotationStoreVersionCommandOutput> {
    return de_GetAnnotationStoreVersionCommand(output, context);
  }
}
