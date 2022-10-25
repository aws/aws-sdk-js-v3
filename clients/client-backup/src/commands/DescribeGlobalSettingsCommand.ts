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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import {
  DescribeGlobalSettingsInput,
  DescribeGlobalSettingsInputFilterSensitiveLog,
  DescribeGlobalSettingsOutput,
  DescribeGlobalSettingsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeGlobalSettingsCommand,
  serializeAws_restJson1DescribeGlobalSettingsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeGlobalSettingsCommandInput extends DescribeGlobalSettingsInput {}
export interface DescribeGlobalSettingsCommandOutput extends DescribeGlobalSettingsOutput, __MetadataBearer {}

/**
 * <p>Describes whether the Amazon Web Services account is opted in to cross-account backup.
 *          Returns an error if the account is not a member of an Organizations organization.
 *          Example: <code>describe-global-settings --region us-west-2</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeGlobalSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeGlobalSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class DescribeGlobalSettingsCommand extends $Command<
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
  BackupClientResolvedConfig
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

  constructor(readonly input: DescribeGlobalSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGlobalSettingsCommandInput, DescribeGlobalSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeGlobalSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalSettingsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalSettingsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGlobalSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeGlobalSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalSettingsCommandOutput> {
    return deserializeAws_restJson1DescribeGlobalSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
