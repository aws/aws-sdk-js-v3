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

import { ListAnnotationStoreVersionsRequest, ListAnnotationStoreVersionsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_ListAnnotationStoreVersionsCommand,
  se_ListAnnotationStoreVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnnotationStoreVersionsCommand}.
 */
export interface ListAnnotationStoreVersionsCommandInput extends ListAnnotationStoreVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnnotationStoreVersionsCommand}.
 */
export interface ListAnnotationStoreVersionsCommandOutput
  extends ListAnnotationStoreVersionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 * Lists the versions of an annotation store.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListAnnotationStoreVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListAnnotationStoreVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListAnnotationStoreVersionsRequest
 *   name: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ListAnnotationStoreVersionsFilter
 *     status: "STRING_VALUE",
 *   },
 * };
 * const command = new ListAnnotationStoreVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnnotationStoreVersionsResponse
 * //   annotationStoreVersions: [ // AnnotationStoreVersionItems
 * //     { // AnnotationStoreVersionItem
 * //       storeId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       versionArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       versionName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       statusMessage: "STRING_VALUE", // required
 * //       versionSizeBytes: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnnotationStoreVersionsCommandInput - {@link ListAnnotationStoreVersionsCommandInput}
 * @returns {@link ListAnnotationStoreVersionsCommandOutput}
 * @see {@link ListAnnotationStoreVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAnnotationStoreVersionsCommandOutput} for command's `response` shape.
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
export class ListAnnotationStoreVersionsCommand extends $Command<
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
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
  constructor(readonly input: ListAnnotationStoreVersionsCommandInput) {
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
  ): Handler<ListAnnotationStoreVersionsCommandInput, ListAnnotationStoreVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnnotationStoreVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "ListAnnotationStoreVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "ListAnnotationStoreVersions",
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
  private serialize(input: ListAnnotationStoreVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnnotationStoreVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnnotationStoreVersionsCommandOutput> {
    return de_ListAnnotationStoreVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
