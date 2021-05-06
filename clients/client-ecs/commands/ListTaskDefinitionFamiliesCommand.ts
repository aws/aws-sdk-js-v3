import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTaskDefinitionFamiliesRequest, ListTaskDefinitionFamiliesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTaskDefinitionFamiliesCommand,
  serializeAws_json1_1ListTaskDefinitionFamiliesCommand,
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

export interface ListTaskDefinitionFamiliesCommandInput extends ListTaskDefinitionFamiliesRequest {}
export interface ListTaskDefinitionFamiliesCommandOutput extends ListTaskDefinitionFamiliesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of task definition families that are registered to your account (which
 * 			may include task definition families that no longer have any <code>ACTIVE</code> task
 * 			definition revisions).</p>
 * 		       <p>You can filter out task definition families that do not contain any
 * 				<code>ACTIVE</code> task definition revisions by setting the <code>status</code>
 * 			parameter to <code>ACTIVE</code>. You can also filter the results with the
 * 				<code>familyPrefix</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionFamiliesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionFamiliesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskDefinitionFamiliesCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionFamiliesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTaskDefinitionFamiliesCommand extends $Command<
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTaskDefinitionFamiliesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListTaskDefinitionFamiliesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTaskDefinitionFamiliesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTaskDefinitionFamiliesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTaskDefinitionFamiliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTaskDefinitionFamiliesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTaskDefinitionFamiliesCommandOutput> {
    return deserializeAws_json1_1ListTaskDefinitionFamiliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
