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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  GetAssessmentReportRequest,
  GetAssessmentReportRequestFilterSensitiveLog,
  GetAssessmentReportResponse,
  GetAssessmentReportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAssessmentReportCommand,
  serializeAws_json1_1GetAssessmentReportCommand,
} from "../protocols/Aws_json1_1";

export interface GetAssessmentReportCommandInput extends GetAssessmentReportRequest {}
export interface GetAssessmentReportCommandOutput extends GetAssessmentReportResponse, __MetadataBearer {}

/**
 * <p>Produces an assessment report that includes detailed and comprehensive results of a
 *          specified assessment run. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetAssessmentReportCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetAssessmentReportCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class GetAssessmentReportCommand extends $Command<
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: GetAssessmentReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssessmentReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "GetAssessmentReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssessmentReportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAssessmentReportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssessmentReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAssessmentReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssessmentReportCommandOutput> {
    return deserializeAws_json1_1GetAssessmentReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
