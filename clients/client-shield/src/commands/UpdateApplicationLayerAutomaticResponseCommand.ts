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

import {
  UpdateApplicationLayerAutomaticResponseRequest,
  UpdateApplicationLayerAutomaticResponseRequestFilterSensitiveLog,
  UpdateApplicationLayerAutomaticResponseResponse,
  UpdateApplicationLayerAutomaticResponseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommand,
  serializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface UpdateApplicationLayerAutomaticResponseCommandInput
  extends UpdateApplicationLayerAutomaticResponseRequest {}
export interface UpdateApplicationLayerAutomaticResponseCommandOutput
  extends UpdateApplicationLayerAutomaticResponseResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateApplicationLayerAutomaticResponseCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateApplicationLayerAutomaticResponseCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new UpdateApplicationLayerAutomaticResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationLayerAutomaticResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationLayerAutomaticResponseCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class UpdateApplicationLayerAutomaticResponseCommand extends $Command<
  UpdateApplicationLayerAutomaticResponseCommandInput,
  UpdateApplicationLayerAutomaticResponseCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: UpdateApplicationLayerAutomaticResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateApplicationLayerAutomaticResponseCommandInput,
    UpdateApplicationLayerAutomaticResponseCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateApplicationLayerAutomaticResponseCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "UpdateApplicationLayerAutomaticResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationLayerAutomaticResponseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateApplicationLayerAutomaticResponseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApplicationLayerAutomaticResponseCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationLayerAutomaticResponseCommandOutput> {
    return deserializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
