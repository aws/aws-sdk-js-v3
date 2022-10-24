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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DownloadDefaultKeyPairRequest,
  DownloadDefaultKeyPairRequestFilterSensitiveLog,
  DownloadDefaultKeyPairResult,
  DownloadDefaultKeyPairResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DownloadDefaultKeyPairCommand,
  serializeAws_json1_1DownloadDefaultKeyPairCommand,
} from "../protocols/Aws_json1_1";

export interface DownloadDefaultKeyPairCommandInput extends DownloadDefaultKeyPairRequest {}
export interface DownloadDefaultKeyPairCommandOutput extends DownloadDefaultKeyPairResult, __MetadataBearer {}

/**
 * <p>Downloads the regional Amazon Lightsail default key pair.</p>
 *          <p>This action also creates a Lightsail default key pair if a default key pair
 *       does not currently exist in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DownloadDefaultKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DownloadDefaultKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DownloadDefaultKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDefaultKeyPairCommandInput} for command's `input` shape.
 * @see {@link DownloadDefaultKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DownloadDefaultKeyPairCommand extends $Command<
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: DownloadDefaultKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DownloadDefaultKeyPairCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DownloadDefaultKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DownloadDefaultKeyPairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DownloadDefaultKeyPairResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DownloadDefaultKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DownloadDefaultKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DownloadDefaultKeyPairCommandOutput> {
    return deserializeAws_json1_1DownloadDefaultKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
