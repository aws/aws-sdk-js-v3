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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  GetExternalDataViewAccessDetailsRequest,
  GetExternalDataViewAccessDetailsRequestFilterSensitiveLog,
  GetExternalDataViewAccessDetailsResponse,
  GetExternalDataViewAccessDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetExternalDataViewAccessDetailsCommand,
  serializeAws_restJson1GetExternalDataViewAccessDetailsCommand,
} from "../protocols/Aws_restJson1";

export interface GetExternalDataViewAccessDetailsCommandInput extends GetExternalDataViewAccessDetailsRequest {}
export interface GetExternalDataViewAccessDetailsCommandOutput
  extends GetExternalDataViewAccessDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p>
 *          <ul>
 *             <li>
 *                <p>You must retrieve the programmatic credentials.</p>
 *             </li>
 *             <li>
 *                <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetExternalDataViewAccessDetailsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetExternalDataViewAccessDetailsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetExternalDataViewAccessDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExternalDataViewAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetExternalDataViewAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class GetExternalDataViewAccessDetailsCommand extends $Command<
  GetExternalDataViewAccessDetailsCommandInput,
  GetExternalDataViewAccessDetailsCommandOutput,
  FinspaceDataClientResolvedConfig
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

  constructor(readonly input: GetExternalDataViewAccessDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExternalDataViewAccessDetailsCommandInput, GetExternalDataViewAccessDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExternalDataViewAccessDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetExternalDataViewAccessDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExternalDataViewAccessDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetExternalDataViewAccessDetailsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetExternalDataViewAccessDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExternalDataViewAccessDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetExternalDataViewAccessDetailsCommandOutput> {
    return deserializeAws_restJson1GetExternalDataViewAccessDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
