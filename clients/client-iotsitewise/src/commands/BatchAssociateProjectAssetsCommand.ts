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
  BatchAssociateProjectAssetsRequest,
  BatchAssociateProjectAssetsRequestFilterSensitiveLog,
  BatchAssociateProjectAssetsResponse,
  BatchAssociateProjectAssetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateProjectAssetsCommand,
  serializeAws_restJson1BatchAssociateProjectAssetsCommand,
} from "../protocols/Aws_restJson1";

export interface BatchAssociateProjectAssetsCommandInput extends BatchAssociateProjectAssetsRequest {}
export interface BatchAssociateProjectAssetsCommandOutput
  extends BatchAssociateProjectAssetsResponse,
    __MetadataBearer {}

/**
 * <p>Associates a group (batch) of assets with an IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchAssociateProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchAssociateProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchAssociateProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class BatchAssociateProjectAssetsCommand extends $Command<
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
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

  constructor(readonly input: BatchAssociateProjectAssetsCommandInput) {
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
  ): Handler<BatchAssociateProjectAssetsCommandInput, BatchAssociateProjectAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAssociateProjectAssetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "BatchAssociateProjectAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateProjectAssetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateProjectAssetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAssociateProjectAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAssociateProjectAssetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateProjectAssetsCommandOutput> {
    return deserializeAws_restJson1BatchAssociateProjectAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
