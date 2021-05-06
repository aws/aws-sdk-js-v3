import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountSummaryResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccountSummaryCommand,
  serializeAws_queryGetAccountSummaryCommand,
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

export interface GetAccountSummaryCommandInput {}
export interface GetAccountSummaryCommandOutput extends GetAccountSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS
 *             account.</p>
 *         <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountSummaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountSummaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccountSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAccountSummaryCommand extends $Command<
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountSummaryCommandInput) {
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
  ): Handler<GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetAccountSummaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountSummaryCommandOutput> {
    return deserializeAws_queryGetAccountSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
