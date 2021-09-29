import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetConformancePackComplianceDetailsRequest,
  GetConformancePackComplianceDetailsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetConformancePackComplianceDetailsCommand,
  serializeAws_json1_1GetConformancePackComplianceDetailsCommand,
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

export interface GetConformancePackComplianceDetailsCommandInput extends GetConformancePackComplianceDetailsRequest {}
export interface GetConformancePackComplianceDetailsCommandOutput
  extends GetConformancePackComplianceDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetConformancePackComplianceDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConformancePackComplianceDetailsCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceDetailsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetConformancePackComplianceDetailsCommand extends $Command<
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConformancePackComplianceDetailsCommandInput) {
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
  ): Handler<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetConformancePackComplianceDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConformancePackComplianceDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConformancePackComplianceDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConformancePackComplianceDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetConformancePackComplianceDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConformancePackComplianceDetailsCommandOutput> {
    return deserializeAws_json1_1GetConformancePackComplianceDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
