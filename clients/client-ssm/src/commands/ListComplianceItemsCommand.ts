import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/models_1";
import {
  deserializeAws_json1_1ListComplianceItemsCommand,
  serializeAws_json1_1ListComplianceItemsCommand,
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

export interface ListComplianceItemsCommandInput extends ListComplianceItemsRequest {}
export interface ListComplianceItemsCommandOutput extends ListComplianceItemsResult, __MetadataBearer {}

/**
 * <p>For a specified resource ID, this API operation returns a list of compliance statuses for
 *    different resource types. Currently, you can only specify one resource ID per call. List results
 *    depend on the criteria specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListComplianceItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link ListComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListComplianceItemsCommand extends $Command<
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListComplianceItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListComplianceItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComplianceItemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListComplianceItemsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComplianceItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListComplianceItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComplianceItemsCommandOutput> {
    return deserializeAws_json1_1ListComplianceItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
