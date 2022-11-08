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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  BatchDisassociateResourceRequest,
  BatchDisassociateResourceRequestFilterSensitiveLog,
  BatchDisassociateResourceResponse,
  BatchDisassociateResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDisassociateResourceCommand,
  serializeAws_json1_1BatchDisassociateResourceCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDisassociateResourceCommandInput extends BatchDisassociateResourceRequest {}
export interface BatchDisassociateResourceCommandOutput extends BatchDisassociateResourceResponse, __MetadataBearer {}

/**
 * <p>Disassociates resources from a Firewall Manager resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, BatchDisassociateResourceCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, BatchDisassociateResourceCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new BatchDisassociateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateResourceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateResourceCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class BatchDisassociateResourceCommand extends $Command<
  BatchDisassociateResourceCommandInput,
  BatchDisassociateResourceCommandOutput,
  FMSClientResolvedConfig
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

  constructor(readonly input: BatchDisassociateResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateResourceCommandInput, BatchDisassociateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDisassociateResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "BatchDisassociateResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDisassociateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDisassociateResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateResourceCommandOutput> {
    return deserializeAws_json1_1BatchDisassociateResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
