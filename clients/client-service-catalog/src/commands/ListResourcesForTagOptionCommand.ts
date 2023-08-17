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

import { ListResourcesForTagOptionInput, ListResourcesForTagOptionOutput } from "../models/models_0";
import { de_ListResourcesForTagOptionCommand, se_ListResourcesForTagOptionCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesForTagOptionCommand}.
 */
export interface ListResourcesForTagOptionCommandInput extends ListResourcesForTagOptionInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesForTagOptionCommand}.
 */
export interface ListResourcesForTagOptionCommandOutput extends ListResourcesForTagOptionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the resources associated with the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListResourcesForTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListResourcesForTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListResourcesForTagOptionInput
 *   TagOptionId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListResourcesForTagOptionCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesForTagOptionOutput
 * //   ResourceDetails: [ // ResourceDetails
 * //     { // ResourceDetail
 * //       Id: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   PageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesForTagOptionCommandInput - {@link ListResourcesForTagOptionCommandInput}
 * @returns {@link ListResourcesForTagOptionCommandOutput}
 * @see {@link ListResourcesForTagOptionCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class ListResourcesForTagOptionCommand extends $Command<
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput,
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
  constructor(readonly input: ListResourcesForTagOptionCommandInput) {
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
  ): Handler<ListResourcesForTagOptionCommandInput, ListResourcesForTagOptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourcesForTagOptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListResourcesForTagOptionCommand";
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
  private serialize(input: ListResourcesForTagOptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourcesForTagOptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourcesForTagOptionCommandOutput> {
    return de_ListResourcesForTagOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
