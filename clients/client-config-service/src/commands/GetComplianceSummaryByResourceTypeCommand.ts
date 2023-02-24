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
  GetComplianceSummaryByResourceTypeRequest,
  GetComplianceSummaryByResourceTypeRequestFilterSensitiveLog,
  GetComplianceSummaryByResourceTypeResponse,
  GetComplianceSummaryByResourceTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand,
  serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand,
} from "../protocols/Aws_json1_1";

export interface GetComplianceSummaryByResourceTypeCommandInput extends GetComplianceSummaryByResourceTypeRequest {}
export interface GetComplianceSummaryByResourceTypeCommandOutput
  extends GetComplianceSummaryByResourceTypeResponse,
    __MetadataBearer {}

/**
 * <p>Returns the number of resources that are compliant and the
 * 			number that are noncompliant. You can specify one or more resource
 * 			types to get these numbers for each resource type. The maximum
 * 			number returned is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceSummaryByResourceTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceSummaryByResourceTypeCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByResourceTypeCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetComplianceSummaryByResourceTypeCommand extends $Command<
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
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

  constructor(readonly input: GetComplianceSummaryByResourceTypeCommandInput) {
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
  ): Handler<GetComplianceSummaryByResourceTypeCommandInput, GetComplianceSummaryByResourceTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComplianceSummaryByResourceTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceSummaryByResourceTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceSummaryByResourceTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceSummaryByResourceTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetComplianceSummaryByResourceTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceSummaryByResourceTypeCommandOutput> {
    return deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
