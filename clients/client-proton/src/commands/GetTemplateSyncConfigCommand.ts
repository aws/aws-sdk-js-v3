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
  GetTemplateSyncConfigInput,
  GetTemplateSyncConfigInputFilterSensitiveLog,
  GetTemplateSyncConfigOutput,
  GetTemplateSyncConfigOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetTemplateSyncConfigCommand,
  serializeAws_json1_0GetTemplateSyncConfigCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface GetTemplateSyncConfigCommandInput extends GetTemplateSyncConfigInput {}
export interface GetTemplateSyncConfigCommandOutput extends GetTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Get detail data for a template sync configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetTemplateSyncConfigCommand extends $Command<
  GetTemplateSyncConfigCommandInput,
  GetTemplateSyncConfigCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: GetTemplateSyncConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateSyncConfigCommandInput, GetTemplateSyncConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemplateSyncConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetTemplateSyncConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTemplateSyncConfigInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateSyncConfigOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTemplateSyncConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetTemplateSyncConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateSyncConfigCommandOutput> {
    return deserializeAws_json1_0GetTemplateSyncConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
