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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  ListFieldLevelEncryptionConfigsRequest,
  ListFieldLevelEncryptionConfigsRequestFilterSensitiveLog,
  ListFieldLevelEncryptionConfigsResult,
  ListFieldLevelEncryptionConfigsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand,
  serializeAws_restXmlListFieldLevelEncryptionConfigsCommand,
} from "../protocols/Aws_restXml";

export interface ListFieldLevelEncryptionConfigsCommandInput extends ListFieldLevelEncryptionConfigsRequest {}
export interface ListFieldLevelEncryptionConfigsCommandOutput
  extends ListFieldLevelEncryptionConfigsResult,
    __MetadataBearer {}

/**
 * <p>List all field-level encryption configurations that have been created in CloudFront for this
 * 			account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListFieldLevelEncryptionConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFieldLevelEncryptionConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class ListFieldLevelEncryptionConfigsCommand extends $Command<
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: ListFieldLevelEncryptionConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFieldLevelEncryptionConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListFieldLevelEncryptionConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFieldLevelEncryptionConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFieldLevelEncryptionConfigsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFieldLevelEncryptionConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListFieldLevelEncryptionConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput> {
    return deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
