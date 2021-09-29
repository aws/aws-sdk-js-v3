import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutResourceConfigRequest } from "../models/models_1";
import {
  deserializeAws_json1_1PutResourceConfigCommand,
  serializeAws_json1_1PutResourceConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PutResourceConfigCommandInput extends PutResourceConfigRequest {}
export interface PutResourceConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Records the configuration state for the resource provided in the request.
 *
 * 			The configuration state of a resource is represented in Config as Configuration Items.
 * 			Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p>
 * 		       <note>
 *             <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p>
 * 			         <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource.
 * 				</p>
 * 		          <p>Write-only schema properites are not recorded as part of the published configuration item.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourceConfigCommandInput} for command's `input` shape.
 * @see {@link PutResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutResourceConfigCommand extends $Command<
  PutResourceConfigCommandInput,
  PutResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutResourceConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourceConfigCommandInput, PutResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutResourceConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutResourceConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourceConfigCommandOutput> {
    return deserializeAws_json1_1PutResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
