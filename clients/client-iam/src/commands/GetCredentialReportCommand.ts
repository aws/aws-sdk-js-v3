// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetCredentialReportResponse, GetCredentialReportResponseFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryGetCredentialReportCommand,
  serializeAws_queryGetCredentialReportCommand,
} from "../protocols/Aws_query";

export interface GetCredentialReportCommandInput {}
export interface GetCredentialReportCommandOutput extends GetCredentialReportResponse, __MetadataBearer {}

/**
 * <p> Retrieves a credential report for the Amazon Web Services account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetCredentialReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GetCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GetCredentialReportCommand extends $Command<
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: GetCredentialReportCommandInput) {
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
  ): Handler<GetCredentialReportCommandInput, GetCredentialReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCredentialReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetCredentialReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetCredentialReportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCredentialReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetCredentialReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCredentialReportCommandOutput> {
    return deserializeAws_queryGetCredentialReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
