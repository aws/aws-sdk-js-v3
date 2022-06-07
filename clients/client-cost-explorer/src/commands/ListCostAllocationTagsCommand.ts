// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ListCostAllocationTagsRequest, ListCostAllocationTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCostAllocationTagsCommand,
  serializeAws_json1_1ListCostAllocationTagsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCostAllocationTagsCommandInput extends ListCostAllocationTagsRequest {}
export interface ListCostAllocationTagsCommandOutput extends ListCostAllocationTagsResponse, __MetadataBearer {}

/**
 * <p>Get a list of cost allocation tags. All inputs in the API are optional and serve as
 *       filters. By default, all cost allocation tags are returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostAllocationTagsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostAllocationTagsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new ListCostAllocationTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCostAllocationTagsCommandInput} for command's `input` shape.
 * @see {@link ListCostAllocationTagsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class ListCostAllocationTagsCommand extends $Command<
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCostAllocationTagsCommandInput) {
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
  ): Handler<ListCostAllocationTagsCommandInput, ListCostAllocationTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ListCostAllocationTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCostAllocationTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCostAllocationTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCostAllocationTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCostAllocationTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCostAllocationTagsCommandOutput> {
    return deserializeAws_json1_1ListCostAllocationTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
