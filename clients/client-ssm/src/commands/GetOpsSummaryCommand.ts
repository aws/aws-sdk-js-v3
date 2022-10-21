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

import { GetOpsSummaryResult, GetOpsSummaryResultFilterSensitiveLog } from "../models/models_1";
import { GetOpsSummaryRequest, GetOpsSummaryRequestFilterSensitiveLog } from "../models/models_2";
import {
  deserializeAws_json1_1GetOpsSummaryCommand,
  serializeAws_json1_1GetOpsSummaryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetOpsSummaryCommandInput extends GetOpsSummaryRequest {}
export interface GetOpsSummaryCommandOutput extends GetOpsSummaryResult, __MetadataBearer {}

/**
 * <p>View a summary of operations metadata (OpsData) based on specified filters and aggregators.
 *    OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as
 *    well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager
 *    Explorer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsSummaryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetOpsSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetOpsSummaryCommand extends $Command<
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: GetOpsSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetOpsSummaryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetOpsSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOpsSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetOpsSummaryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOpsSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOpsSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOpsSummaryCommandOutput> {
    return deserializeAws_json1_1GetOpsSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
