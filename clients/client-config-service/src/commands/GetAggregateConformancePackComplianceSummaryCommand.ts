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
  GetAggregateConformancePackComplianceSummaryRequest,
  GetAggregateConformancePackComplianceSummaryRequestFilterSensitiveLog,
  GetAggregateConformancePackComplianceSummaryResponse,
  GetAggregateConformancePackComplianceSummaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand,
  serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand,
} from "../protocols/Aws_json1_1";

export interface GetAggregateConformancePackComplianceSummaryCommandInput
  extends GetAggregateConformancePackComplianceSummaryRequest {}
export interface GetAggregateConformancePackComplianceSummaryCommandOutput
  extends GetAggregateConformancePackComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p>
 * 		       <note>
 *             <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetAggregateConformancePackComplianceSummaryCommand extends $Command<
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput,
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

  constructor(readonly input: GetAggregateConformancePackComplianceSummaryCommandInput) {
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
  ): Handler<
    GetAggregateConformancePackComplianceSummaryCommandInput,
    GetAggregateConformancePackComplianceSummaryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetAggregateConformancePackComplianceSummaryCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetAggregateConformancePackComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAggregateConformancePackComplianceSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAggregateConformancePackComplianceSummaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAggregateConformancePackComplianceSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput> {
    return deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
