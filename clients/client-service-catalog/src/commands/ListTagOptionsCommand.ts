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

import { ListTagOptionsInput, ListTagOptionsOutput } from "../models/models_0";
import { de_ListTagOptionsCommand, se_ListTagOptionsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTagOptionsCommand}.
 */
export interface ListTagOptionsCommandInput extends ListTagOptionsInput {}
/**
 * @public
 *
 * The output of {@link ListTagOptionsCommand}.
 */
export interface ListTagOptionsCommandOutput extends ListTagOptionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the specified TagOptions or all TagOptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListTagOptionsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListTagOptionsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListTagOptionsInput
 *   Filters: { // ListTagOptionsFilters
 *     Key: "STRING_VALUE",
 *     Value: "STRING_VALUE",
 *     Active: true || false,
 *   },
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListTagOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTagOptionsOutput
 * //   TagOptionDetails: [ // TagOptionDetails
 * //     { // TagOptionDetail
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Active: true || false,
 * //       Id: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTagOptionsCommandInput - {@link ListTagOptionsCommandInput}
 * @returns {@link ListTagOptionsCommandOutput}
 * @see {@link ListTagOptionsCommandInput} for command's `input` shape.
 * @see {@link ListTagOptionsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class ListTagOptionsCommand extends $Command<
  ListTagOptionsCommandInput,
  ListTagOptionsCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: ListTagOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagOptionsCommandInput, ListTagOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListTagOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "ListTagOptions",
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
  private serialize(input: ListTagOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTagOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagOptionsCommandOutput> {
    return de_ListTagOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
