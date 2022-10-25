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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  BatchDisassociateProjectAssetsRequest,
  BatchDisassociateProjectAssetsRequestFilterSensitiveLog,
  BatchDisassociateProjectAssetsResponse,
  BatchDisassociateProjectAssetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDisassociateProjectAssetsCommand,
  serializeAws_restJson1BatchDisassociateProjectAssetsCommand,
} from "../protocols/Aws_restJson1";

export interface BatchDisassociateProjectAssetsCommandInput extends BatchDisassociateProjectAssetsRequest {}
export interface BatchDisassociateProjectAssetsCommandOutput
  extends BatchDisassociateProjectAssetsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchDisassociateProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchDisassociateProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchDisassociateProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class BatchDisassociateProjectAssetsCommand extends $Command<
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
  IoTSiteWiseClientResolvedConfig
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

  constructor(readonly input: BatchDisassociateProjectAssetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateProjectAssetsCommandInput, BatchDisassociateProjectAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDisassociateProjectAssetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "BatchDisassociateProjectAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateProjectAssetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateProjectAssetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateProjectAssetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisassociateProjectAssetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateProjectAssetsCommandOutput> {
    return deserializeAws_restJson1BatchDisassociateProjectAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
