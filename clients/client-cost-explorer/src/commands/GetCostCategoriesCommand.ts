import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostCategoriesRequest, GetCostCategoriesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCostCategoriesCommand,
  serializeAws_json1_1GetCostCategoriesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetCostCategoriesCommandInput extends GetCostCategoriesRequest {}
export interface GetCostCategoriesCommandOutput extends GetCostCategoriesResponse, __MetadataBearer {}

/**
 * <p>Retrieves an array of Cost Category names and values incurred cost.</p>
 *          <note>
 *             <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostCategoriesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostCategoriesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostCategoriesCommandInput} for command's `input` shape.
 * @see {@link GetCostCategoriesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCostCategoriesCommand extends $Command<
  GetCostCategoriesCommandInput,
  GetCostCategoriesCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCostCategoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetCostCategoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCostCategoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCostCategoriesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCostCategoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostCategoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostCategoriesCommandOutput> {
    return deserializeAws_json1_1GetCostCategoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
