// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { DeleteReportDefinitionRequest, DeleteReportDefinitionResponse } from "../models/models_0";
import { de_DeleteReportDefinitionCommand, se_DeleteReportDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteReportDefinitionCommand}.
 */
export interface DeleteReportDefinitionCommandInput extends DeleteReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReportDefinitionCommand}.
 */
export interface DeleteReportDefinitionCommandOutput extends DeleteReportDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DeleteReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DeleteReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // DeleteReportDefinitionRequest
 *   ReportName: "STRING_VALUE",
 * };
 * const command = new DeleteReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReportDefinitionResponse
 * //   ResponseMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteReportDefinitionCommandInput - {@link DeleteReportDefinitionCommandInput}
 * @returns {@link DeleteReportDefinitionCommandOutput}
 * @see {@link DeleteReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for CostAndUsageReportServiceClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 * <p>Base exception class for all service exceptions from CostAndUsageReportService service.</p>
 *
 * @example To delete the AWS Cost and Usage report named ExampleReport.
 * ```javascript
 * // The following example deletes the AWS Cost and Usage report named ExampleReport.
 * const input = {
 *   "ReportName": "ExampleReport"
 * };
 * const command = new DeleteReportDefinitionCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-report
 * ```
 *
 */
export class DeleteReportDefinitionCommand extends $Command<
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput,
  CostAndUsageReportServiceClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DeleteReportDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostAndUsageReportServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteReportDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostAndUsageReportServiceClient";
    const commandName = "DeleteReportDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSOrigamiServiceGatewayService",
        operation: "DeleteReportDefinition",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteReportDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteReportDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReportDefinitionCommandOutput> {
    return de_DeleteReportDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
