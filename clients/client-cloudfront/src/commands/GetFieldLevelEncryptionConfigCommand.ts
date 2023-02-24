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
  GetFieldLevelEncryptionConfigRequest,
  GetFieldLevelEncryptionConfigRequestFilterSensitiveLog,
  GetFieldLevelEncryptionConfigResult,
  GetFieldLevelEncryptionConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlGetFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";

export interface GetFieldLevelEncryptionConfigCommandInput extends GetFieldLevelEncryptionConfigRequest {}
export interface GetFieldLevelEncryptionConfigCommandOutput
  extends GetFieldLevelEncryptionConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the field-level encryption configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetFieldLevelEncryptionConfigCommand extends $Command<
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
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

  constructor(readonly input: GetFieldLevelEncryptionConfigCommandInput) {
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
  ): Handler<GetFieldLevelEncryptionConfigCommandInput, GetFieldLevelEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFieldLevelEncryptionConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFieldLevelEncryptionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFieldLevelEncryptionConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetFieldLevelEncryptionConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput> {
    return deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
