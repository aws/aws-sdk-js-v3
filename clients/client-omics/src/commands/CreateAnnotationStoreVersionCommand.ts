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

import { CreateAnnotationStoreVersionRequest, CreateAnnotationStoreVersionResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_CreateAnnotationStoreVersionCommand,
  se_CreateAnnotationStoreVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAnnotationStoreVersionCommand}.
 */
export interface CreateAnnotationStoreVersionCommandInput extends CreateAnnotationStoreVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnnotationStoreVersionCommand}.
 */
export interface CreateAnnotationStoreVersionCommandOutput
  extends CreateAnnotationStoreVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 * Creates a new version of an annotation store.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateAnnotationStoreVersionRequest
 *   name: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   versionOptions: { // VersionOptions Union: only one key present
 *     tsvVersionOptions: { // TsvVersionOptions
 *       annotationType: "STRING_VALUE",
 *       formatToHeader: { // FormatToHeader
 *         "<keys>": "STRING_VALUE",
 *       },
 *       schema: [ // Schema
 *         { // SchemaItem
 *           "<keys>": "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAnnotationStoreVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnnotationStoreVersionResponse
 * //   id: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   storeId: "STRING_VALUE", // required
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
 * //   name: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAnnotationStoreVersionCommandInput - {@link CreateAnnotationStoreVersionCommandInput}
 * @returns {@link CreateAnnotationStoreVersionCommandOutput}
 * @see {@link CreateAnnotationStoreVersionCommandInput} for command's `input` shape.
 * @see {@link CreateAnnotationStoreVersionCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
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
export class CreateAnnotationStoreVersionCommand extends $Command<
  CreateAnnotationStoreVersionCommandInput,
  CreateAnnotationStoreVersionCommandOutput,
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
  constructor(readonly input: CreateAnnotationStoreVersionCommandInput) {
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
  ): Handler<CreateAnnotationStoreVersionCommandInput, CreateAnnotationStoreVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAnnotationStoreVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "CreateAnnotationStoreVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "CreateAnnotationStoreVersion",
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
  private serialize(input: CreateAnnotationStoreVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAnnotationStoreVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAnnotationStoreVersionCommandOutput> {
    return de_CreateAnnotationStoreVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
