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
  StartImageScanRequest,
  StartImageScanRequestFilterSensitiveLog,
  StartImageScanResponse,
  StartImageScanResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartImageScanCommand,
  serializeAws_json1_1StartImageScanCommand,
} from "../protocols/Aws_json1_1";

export interface StartImageScanCommandInput extends StartImageScanRequest {}
export interface StartImageScanCommandOutput extends StartImageScanResponse, __MetadataBearer {}

/**
 * <p>Starts an image vulnerability scan. An image scan can only be started once per 24
 *             hours on an individual image. This limit includes if an image was scanned on initial
 *             push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartImageScanCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartImageScanCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new StartImageScanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImageScanCommandInput} for command's `input` shape.
 * @see {@link StartImageScanCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class StartImageScanCommand extends $Command<
  StartImageScanCommandInput,
  StartImageScanCommandOutput,
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

  constructor(readonly input: StartImageScanCommandInput) {
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
  ): Handler<StartImageScanCommandInput, StartImageScanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartImageScanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "StartImageScanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartImageScanRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartImageScanResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartImageScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartImageScanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImageScanCommandOutput> {
    return deserializeAws_json1_1StartImageScanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
