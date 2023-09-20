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
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { UpdateReportDefinitionRequest, UpdateReportDefinitionResult } from "../models/models_0";
import { de_UpdateReportDefinitionCommand, se_UpdateReportDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateReportDefinitionCommand}.
 */
export interface UpdateReportDefinitionCommandInput extends UpdateReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReportDefinitionCommand}.
 */
export interface UpdateReportDefinitionCommandOutput extends UpdateReportDefinitionResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates existing report in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, UpdateReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, UpdateReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // UpdateReportDefinitionRequest
 *   reportId: "STRING_VALUE", // required
 *   reportDescription: "STRING_VALUE", // required
 *   reportFrequency: "MONTHLY" || "DAILY" || "ALL", // required
 *   format: "CSV" || "PARQUET", // required
 *   destinationS3Location: { // S3Location
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReportDefinitionResult
 * //   reportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateReportDefinitionCommandInput - {@link UpdateReportDefinitionCommandInput}
 * @returns {@link UpdateReportDefinitionCommandOutput}
 * @see {@link UpdateReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints for the API.</p>
 *
 * @throws {@link ApplicationCostProfilerServiceException}
 * <p>Base exception class for all service exceptions from ApplicationCostProfiler service.</p>
 *
 */
export class UpdateReportDefinitionCommand extends $Command<
  UpdateReportDefinitionCommandInput,
  UpdateReportDefinitionCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
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
  constructor(readonly input: UpdateReportDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReportDefinitionCommandInput, UpdateReportDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateReportDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "UpdateReportDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSApplicationCostProfiler",
        operation: "UpdateReportDefinition",
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
  private serialize(input: UpdateReportDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateReportDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReportDefinitionCommandOutput> {
    return de_UpdateReportDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
