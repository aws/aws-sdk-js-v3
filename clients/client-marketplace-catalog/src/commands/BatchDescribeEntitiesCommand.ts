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

import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { BatchDescribeEntitiesRequest, BatchDescribeEntitiesResponse } from "../models/models_0";
import { de_BatchDescribeEntitiesCommand, se_BatchDescribeEntitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeEntitiesCommand}.
 */
export interface BatchDescribeEntitiesCommandInput extends BatchDescribeEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDescribeEntitiesCommand}.
 */
export interface BatchDescribeEntitiesCommandOutput extends BatchDescribeEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata and content for multiple entities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, BatchDescribeEntitiesCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, BatchDescribeEntitiesCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // BatchDescribeEntitiesRequest
 *   EntityRequestList: [ // EntityRequestList // required
 *     { // EntityRequest
 *       Catalog: "STRING_VALUE", // required
 *       EntityId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDescribeEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeEntitiesResponse
 * //   EntityDetails: { // EntityDetails
 * //     "<keys>": { // EntityDetail
 * //       EntityType: "STRING_VALUE",
 * //       EntityArn: "STRING_VALUE",
 * //       EntityIdentifier: "STRING_VALUE",
 * //       LastModifiedDate: "STRING_VALUE",
 * //       DetailsDocument: "DOCUMENT_VALUE",
 * //     },
 * //   },
 * //   Errors: { // Errors
 * //     "<keys>": { // BatchDescribeErrorDetail
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param BatchDescribeEntitiesCommandInput - {@link BatchDescribeEntitiesCommandInput}
 * @returns {@link BatchDescribeEntitiesCommandOutput}
 * @see {@link BatchDescribeEntitiesCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeEntitiesCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 */
export class BatchDescribeEntitiesCommand extends $Command<
  BatchDescribeEntitiesCommandInput,
  BatchDescribeEntitiesCommandOutput,
  MarketplaceCatalogClientResolvedConfig
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
  constructor(readonly input: BatchDescribeEntitiesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDescribeEntitiesCommandInput, BatchDescribeEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDescribeEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "BatchDescribeEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPSeymour",
        operation: "BatchDescribeEntities",
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
  private serialize(input: BatchDescribeEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDescribeEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDescribeEntitiesCommandOutput> {
    return de_BatchDescribeEntitiesCommand(output, context);
  }
}
