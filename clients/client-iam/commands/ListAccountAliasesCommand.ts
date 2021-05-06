import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccountAliasesRequest, ListAccountAliasesResponse } from "../models/models_0";
import {
  deserializeAws_queryListAccountAliasesCommand,
  serializeAws_queryListAccountAliasesCommand,
} from "../protocols/Aws_query";
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

export interface ListAccountAliasesCommandInput extends ListAccountAliasesRequest {}
export interface ListAccountAliasesCommandOutput extends ListAccountAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the account alias associated with the AWS account (Note: you can have only
 *             one). For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your
 *                 AWS account ID</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccountAliasesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccountAliasesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAccountAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAccountAliasesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAccountAliasesCommand extends $Command<
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAccountAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAliasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAliasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListAccountAliasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAliasesCommandOutput> {
    return deserializeAws_queryListAccountAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
