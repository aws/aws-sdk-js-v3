import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByResourceRequest, GetComplianceDetailsByResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceDetailsByResourceCommand,
  serializeAws_json1_1GetComplianceDetailsByResourceCommand,
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

export interface GetComplianceDetailsByResourceCommandInput extends GetComplianceDetailsByResourceRequest {}
export interface GetComplianceDetailsByResourceCommandOutput
  extends GetComplianceDetailsByResourceResponse,
    __MetadataBearer {}

/**
 * <p>Returns the evaluation results for the specified Amazon Web Services resource.
 * 			The results indicate which Config rules were used to evaluate
 * 			the resource, when each rule was last used, and whether the resource
 * 			complies with each rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByResourceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByResourceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceDetailsByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceDetailsByResourceCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByResourceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetComplianceDetailsByResourceCommand extends $Command<
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComplianceDetailsByResourceCommandInput) {
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
  ): Handler<GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceDetailsByResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceDetailsByResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceDetailsByResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetComplianceDetailsByResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceDetailsByResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceDetailsByResourceCommandOutput> {
    return deserializeAws_json1_1GetComplianceDetailsByResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
