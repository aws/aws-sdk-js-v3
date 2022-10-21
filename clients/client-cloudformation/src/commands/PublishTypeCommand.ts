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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  PublishTypeInput,
  PublishTypeInputFilterSensitiveLog,
  PublishTypeOutput,
  PublishTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryPublishTypeCommand, serializeAws_queryPublishTypeCommand } from "../protocols/Aws_query";

export interface PublishTypeCommandInput extends PublishTypeInput {}
export interface PublishTypeCommandOutput extends PublishTypeOutput, __MetadataBearer {}

/**
 * <p>Publishes the specified extension to the CloudFormation registry as a public
 *          extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the
 *                <i>CloudFormation CLI User Guide</i>.</p>
 *          <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, PublishTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, PublishTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new PublishTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishTypeCommandInput} for command's `input` shape.
 * @see {@link PublishTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class PublishTypeCommand extends $Command<
  PublishTypeCommandInput,
  PublishTypeCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: PublishTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishTypeCommandInput, PublishTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PublishTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "PublishTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: PublishTypeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPublishTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishTypeCommandOutput> {
    return deserializeAws_queryPublishTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
