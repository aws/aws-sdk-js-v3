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
  GetTemplateSyncStatusInput,
  GetTemplateSyncStatusInputFilterSensitiveLog,
  GetTemplateSyncStatusOutput,
  GetTemplateSyncStatusOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetTemplateSyncStatusCommand,
  serializeAws_json1_0GetTemplateSyncStatusCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface GetTemplateSyncStatusCommandInput extends GetTemplateSyncStatusInput {}
export interface GetTemplateSyncStatusCommandOutput extends GetTemplateSyncStatusOutput, __MetadataBearer {}

/**
 * <p>Get the status of a template sync.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetTemplateSyncStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetTemplateSyncStatusCommand extends $Command<
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
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

  constructor(readonly input: GetTemplateSyncStatusCommandInput) {
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
  ): Handler<GetTemplateSyncStatusCommandInput, GetTemplateSyncStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemplateSyncStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetTemplateSyncStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTemplateSyncStatusInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateSyncStatusOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTemplateSyncStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetTemplateSyncStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateSyncStatusCommandOutput> {
    return deserializeAws_json1_0GetTemplateSyncStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
