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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateArchiveRuleRequest, CreateArchiveRuleRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1CreateArchiveRuleCommand,
  serializeAws_restJson1CreateArchiveRuleCommand,
} from "../protocols/Aws_restJson1";

export interface CreateArchiveRuleCommandInput extends CreateArchiveRuleRequest {}
export interface CreateArchiveRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates an archive rule for the specified analyzer. Archive rules automatically archive
 *          new findings that meet the criteria you define when you create the rule.</p>
 *          <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new CreateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 */
export class CreateArchiveRuleCommand extends $Command<
  CreateArchiveRuleCommandInput,
  CreateArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
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

  constructor(readonly input: CreateArchiveRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateArchiveRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CreateArchiveRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateArchiveRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateArchiveRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateArchiveRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateArchiveRuleCommandOutput> {
    return deserializeAws_restJson1CreateArchiveRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
