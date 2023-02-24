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
  ListAssociatedAssetsRequest,
  ListAssociatedAssetsRequestFilterSensitiveLog,
  ListAssociatedAssetsResponse,
  ListAssociatedAssetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAssociatedAssetsCommand,
  serializeAws_restJson1ListAssociatedAssetsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAssociatedAssetsCommandInput extends ListAssociatedAssetsRequest {}
export interface ListAssociatedAssetsCommandOutput extends ListAssociatedAssetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of associated assets.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
 *             </li>
 *             <li>
 *                <p>List an asset's parent asset.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssociatedAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssociatedAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssociatedAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class ListAssociatedAssetsCommand extends $Command<
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
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

  constructor(readonly input: ListAssociatedAssetsCommandInput) {
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
  ): Handler<ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssociatedAssetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListAssociatedAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedAssetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedAssetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssociatedAssetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedAssetsCommandOutput> {
    return deserializeAws_restJson1ListAssociatedAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
