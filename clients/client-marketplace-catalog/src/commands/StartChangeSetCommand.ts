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
import { StartChangeSetRequest, StartChangeSetResponse } from "../models/models_0";
import { de_StartChangeSetCommand, se_StartChangeSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartChangeSetCommand}.
 */
export interface StartChangeSetCommandInput extends StartChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link StartChangeSetCommand}.
 */
export interface StartChangeSetCommandOutput extends StartChangeSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Allows you to request changes for your entities. Within a single
 *                 <code>ChangeSet</code>, you can't start the same change type against the same entity
 *             multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities
 *             targeted by the different changes are locked until the change set has completed (either
 *             succeeded, cancelled, or failed). If you try to start a change set containing a change
 *             against an entity that is already locked, you will receive a
 *                 <code>ResourceInUseException</code> error.</p>
 *          <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same
 *             change type (<code>AddRevisions</code>) against the same entity
 *                 (<code>entity-id@1</code>).</p>
 *          <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information about change types for
 *             single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information about change
 *             types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // StartChangeSetRequest
 *   Catalog: "STRING_VALUE", // required
 *   ChangeSet: [ // RequestedChangeList // required
 *     { // Change
 *       ChangeType: "STRING_VALUE", // required
 *       Entity: { // Entity
 *         Type: "STRING_VALUE", // required
 *         Identifier: "STRING_VALUE",
 *       },
 *       EntityTags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Details: "STRING_VALUE",
 *       DetailsDocument: "DOCUMENT_VALUE",
 *       ChangeName: "STRING_VALUE",
 *     },
 *   ],
 *   ChangeSetName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   ChangeSetTags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // StartChangeSetResponse
 * //   ChangeSetId: "STRING_VALUE",
 * //   ChangeSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartChangeSetCommandInput - {@link StartChangeSetCommandInput}
 * @returns {@link StartChangeSetCommandOutput}
 * @see {@link StartChangeSetCommandInput} for command's `input` shape.
 * @see {@link StartChangeSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is currently in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The maximum number of open requests per account has been exceeded.</p>
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
export class StartChangeSetCommand extends $Command<
  StartChangeSetCommandInput,
  StartChangeSetCommandOutput,
  MarketplaceCatalogClientResolvedConfig
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
  constructor(readonly input: StartChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartChangeSetCommandInput, StartChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "StartChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPSeymour",
        operation: "StartChangeSet",
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
  private serialize(input: StartChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartChangeSetCommandOutput> {
    return de_StartChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
