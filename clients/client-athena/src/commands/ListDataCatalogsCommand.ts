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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListDataCatalogsInput, ListDataCatalogsOutput } from "../models/models_0";
import { de_ListDataCatalogsCommand, se_ListDataCatalogsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataCatalogsCommand}.
 */
export interface ListDataCatalogsCommandInput extends ListDataCatalogsInput {}
/**
 * @public
 *
 * The output of {@link ListDataCatalogsCommand}.
 */
export interface ListDataCatalogsCommandOutput extends ListDataCatalogsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the data catalogs in the current Amazon Web Services account.</p>
 *          <note>
 *             <p>In the Athena console, data catalogs are listed as "data sources" on
 *                 the <b>Data sources</b> page under the <b>Data source name</b> column.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListDataCatalogsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListDataCatalogsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListDataCatalogsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataCatalogsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataCatalogsOutput
 * //   DataCatalogsSummary: [ // DataCatalogSummaryList
 * //     { // DataCatalogSummary
 * //       CatalogName: "STRING_VALUE",
 * //       Type: "LAMBDA" || "GLUE" || "HIVE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataCatalogsCommandInput - {@link ListDataCatalogsCommandInput}
 * @returns {@link ListDataCatalogsCommandOutput}
 * @see {@link ListDataCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListDataCatalogsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class ListDataCatalogsCommand extends $Command<
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: ListDataCatalogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataCatalogsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListDataCatalogsCommand";
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
  private serialize(input: ListDataCatalogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataCatalogsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataCatalogsCommandOutput> {
    return de_ListDataCatalogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
