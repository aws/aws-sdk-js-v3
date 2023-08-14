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

import { CreateAnnotationStoreRequest, CreateAnnotationStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateAnnotationStoreCommand, se_CreateAnnotationStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAnnotationStoreCommand}.
 */
export interface CreateAnnotationStoreCommandInput extends CreateAnnotationStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnnotationStoreCommand}.
 */
export interface CreateAnnotationStoreCommandOutput extends CreateAnnotationStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an annotation store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateAnnotationStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateAnnotationStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateAnnotationStoreRequest
 *   reference: { // ReferenceItem Union: only one key present
 *     referenceArn: "STRING_VALUE",
 *   },
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   versionName: "STRING_VALUE",
 *   sseConfig: { // SseConfig
 *     type: "STRING_VALUE", // required
 *     keyArn: "STRING_VALUE",
 *   },
 *   storeFormat: "STRING_VALUE", // required
 *   storeOptions: { // StoreOptions Union: only one key present
 *     tsvStoreOptions: { // TsvStoreOptions
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
 * };
 * const command = new CreateAnnotationStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnnotationStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   storeFormat: "STRING_VALUE",
 * //   storeOptions: { // StoreOptions Union: only one key present
 * //     tsvStoreOptions: { // TsvStoreOptions
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
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAnnotationStoreCommandInput - {@link CreateAnnotationStoreCommandInput}
 * @returns {@link CreateAnnotationStoreCommandOutput}
 * @see {@link CreateAnnotationStoreCommandInput} for command's `input` shape.
 * @see {@link CreateAnnotationStoreCommandOutput} for command's `response` shape.
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
export class CreateAnnotationStoreCommand extends $Command<
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
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
  constructor(readonly input: CreateAnnotationStoreCommandInput) {
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
  ): Handler<CreateAnnotationStoreCommandInput, CreateAnnotationStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAnnotationStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "CreateAnnotationStoreCommand";
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
  private serialize(input: CreateAnnotationStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAnnotationStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAnnotationStoreCommandOutput> {
    return de_CreateAnnotationStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
