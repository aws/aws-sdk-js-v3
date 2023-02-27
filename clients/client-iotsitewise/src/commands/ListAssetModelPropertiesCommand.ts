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
  ListAssetModelPropertiesRequest,
  ListAssetModelPropertiesRequestFilterSensitiveLog,
  ListAssetModelPropertiesResponse,
  ListAssetModelPropertiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAssetModelPropertiesCommand,
  serializeAws_restJson1ListAssetModelPropertiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListAssetModelPropertiesCommand}.
 */
export interface ListAssetModelPropertiesCommandInput extends ListAssetModelPropertiesRequest {}
/**
 * The output of {@link ListAssetModelPropertiesCommand}.
 */
export interface ListAssetModelPropertiesCommandOutput extends ListAssetModelPropertiesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of properties associated with an asset model.
 *       If you update properties associated with the model before you finish listing all the properties,
 *         you need to start all over again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetModelPropertiesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetModelPropertiesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetModelPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetModelPropertiesCommandInput} for command's `input` shape.
 * @see {@link ListAssetModelPropertiesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class ListAssetModelPropertiesCommand extends $Command<
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput,
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

  constructor(readonly input: ListAssetModelPropertiesCommandInput) {
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
  ): Handler<ListAssetModelPropertiesCommandInput, ListAssetModelPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssetModelPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListAssetModelPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssetModelPropertiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssetModelPropertiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssetModelPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssetModelPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssetModelPropertiesCommandOutput> {
    return deserializeAws_restJson1ListAssetModelPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
