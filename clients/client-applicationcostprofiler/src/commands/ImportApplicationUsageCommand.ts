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
import { ImportApplicationUsageRequest, ImportApplicationUsageResult } from "../models/models_0";
import { de_ImportApplicationUsageCommand, se_ImportApplicationUsageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportApplicationUsageCommand}.
 */
export interface ImportApplicationUsageCommandInput extends ImportApplicationUsageRequest {}
/**
 * @public
 *
 * The output of {@link ImportApplicationUsageCommand}.
 */
export interface ImportApplicationUsageCommandOutput extends ImportApplicationUsageResult, __MetadataBearer {}

/**
 * @public
 * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
 *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
 *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
 *       asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ImportApplicationUsageCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ImportApplicationUsageCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // ImportApplicationUsageRequest
 *   sourceS3Location: { // SourceS3Location
 *     bucket: "STRING_VALUE", // required
 *     key: "STRING_VALUE", // required
 *     region: "ap-east-1" || "me-south-1" || "eu-south-1" || "af-south-1",
 *   },
 * };
 * const command = new ImportApplicationUsageCommand(input);
 * const response = await client.send(command);
 * // { // ImportApplicationUsageResult
 * //   importId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportApplicationUsageCommandInput - {@link ImportApplicationUsageCommandInput}
 * @returns {@link ImportApplicationUsageCommandOutput}
 * @see {@link ImportApplicationUsageCommandInput} for command's `input` shape.
 * @see {@link ImportApplicationUsageCommandOutput} for command's `response` shape.
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
export class ImportApplicationUsageCommand extends $Command<
  ImportApplicationUsageCommandInput,
  ImportApplicationUsageCommandOutput,
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
  constructor(readonly input: ImportApplicationUsageCommandInput) {
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
  ): Handler<ImportApplicationUsageCommandInput, ImportApplicationUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportApplicationUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "ImportApplicationUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSApplicationCostProfiler",
        operation: "ImportApplicationUsage",
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
  private serialize(input: ImportApplicationUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportApplicationUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportApplicationUsageCommandOutput> {
    return de_ImportApplicationUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
