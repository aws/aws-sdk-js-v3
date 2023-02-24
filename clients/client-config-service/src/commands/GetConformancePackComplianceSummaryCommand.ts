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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetConformancePackComplianceSummaryRequest,
  GetConformancePackComplianceSummaryRequestFilterSensitiveLog,
  GetConformancePackComplianceSummaryResponse,
  GetConformancePackComplianceSummaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetConformancePackComplianceSummaryCommand,
  serializeAws_json1_1GetConformancePackComplianceSummaryCommand,
} from "../protocols/Aws_json1_1";

export interface GetConformancePackComplianceSummaryCommandInput extends GetConformancePackComplianceSummaryRequest {}
export interface GetConformancePackComplianceSummaryCommandOutput
  extends GetConformancePackComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetConformancePackComplianceSummaryCommand extends $Command<
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: GetConformancePackComplianceSummaryCommandInput) {
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
  ): Handler<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConformancePackComplianceSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetConformancePackComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConformancePackComplianceSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetConformancePackComplianceSummaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConformancePackComplianceSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetConformancePackComplianceSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConformancePackComplianceSummaryCommandOutput> {
    return deserializeAws_json1_1GetConformancePackComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
