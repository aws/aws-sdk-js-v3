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
import {
  GenerateCredentialReportResponse,
  GenerateCredentialReportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGenerateCredentialReportCommand,
  serializeAws_queryGenerateCredentialReportCommand,
} from "../protocols/Aws_query";

export interface GenerateCredentialReportCommandInput {}
export interface GenerateCredentialReportCommandOutput extends GenerateCredentialReportResponse, __MetadataBearer {}

/**
 * <p> Generates a credential report for the Amazon Web Services account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GenerateCredentialReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GenerateCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GenerateCredentialReportCommand extends $Command<
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
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

  constructor(readonly input: GenerateCredentialReportCommandInput) {
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
  ): Handler<GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateCredentialReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GenerateCredentialReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GenerateCredentialReportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateCredentialReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGenerateCredentialReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateCredentialReportCommandOutput> {
    return deserializeAws_queryGenerateCredentialReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
