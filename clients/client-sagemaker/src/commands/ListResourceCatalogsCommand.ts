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

import { ListResourceCatalogsRequest, ListResourceCatalogsResponse } from "../models/models_3";
import { de_ListResourceCatalogsCommand, se_ListResourceCatalogsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourceCatalogsCommand}.
 */
export interface ListResourceCatalogsCommandInput extends ListResourceCatalogsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceCatalogsCommand}.
 */
export interface ListResourceCatalogsCommandOutput extends ListResourceCatalogsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists Amazon SageMaker Catalogs based on given filters and orders. The maximum number of
 *                 <code>ResourceCatalog</code>s viewable is 1000. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListResourceCatalogsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListResourceCatalogsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListResourceCatalogsRequest
 *   NameContains: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceCatalogsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceCatalogsResponse
 * //   ResourceCatalogs: [ // ResourceCatalogList
 * //     { // ResourceCatalog
 * //       ResourceCatalogArn: "STRING_VALUE", // required
 * //       ResourceCatalogName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceCatalogsCommandInput - {@link ListResourceCatalogsCommandInput}
 * @returns {@link ListResourceCatalogsCommandOutput}
 * @see {@link ListResourceCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListResourceCatalogsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListResourceCatalogsCommand extends $Command<
  ListResourceCatalogsCommandInput,
  ListResourceCatalogsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListResourceCatalogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceCatalogsCommandInput, ListResourceCatalogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceCatalogsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListResourceCatalogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListResourceCatalogs",
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
  private serialize(input: ListResourceCatalogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourceCatalogsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceCatalogsCommandOutput> {
    return de_ListResourceCatalogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
