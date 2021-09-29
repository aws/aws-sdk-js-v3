import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSecurityPoliciesCommand,
  serializeAws_json1_1ListSecurityPoliciesCommand,
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

export interface ListSecurityPoliciesCommandInput extends ListSecurityPoliciesRequest {}
export interface ListSecurityPoliciesCommandOutput extends ListSecurityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the security policies that are attached to your file transfer protocol-enabled
 *       servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListSecurityPoliciesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListSecurityPoliciesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListSecurityPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSecurityPoliciesCommand extends $Command<
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecurityPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListSecurityPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecurityPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecurityPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecurityPoliciesCommandOutput> {
    return deserializeAws_json1_1ListSecurityPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
