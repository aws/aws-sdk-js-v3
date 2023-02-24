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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  PutImageScanningConfigurationRequest,
  PutImageScanningConfigurationRequestFilterSensitiveLog,
  PutImageScanningConfigurationResponse,
  PutImageScanningConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutImageScanningConfigurationCommand,
  serializeAws_json1_1PutImageScanningConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface PutImageScanningConfigurationCommandInput extends PutImageScanningConfigurationRequest {}
export interface PutImageScanningConfigurationCommandOutput
  extends PutImageScanningConfigurationResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor
 *                 of specifying the image scanning configuration at the registry level. For more
 *                 information, see <a>PutRegistryScanningConfiguration</a>.</p>
 *         </important>
 *         <p>Updates the image scanning configuration for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutImageScanningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class PutImageScanningConfigurationCommand extends $Command<
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: PutImageScanningConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutImageScanningConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutImageScanningConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutImageScanningConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutImageScanningConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageScanningConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageScanningConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutImageScanningConfigurationCommandOutput> {
    return deserializeAws_json1_1PutImageScanningConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
