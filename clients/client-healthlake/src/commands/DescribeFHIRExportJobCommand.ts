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

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse } from "../models/models_0";
import { de_DescribeFHIRExportJobCommand, se_DescribeFHIRExportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFHIRExportJobCommand}.
 */
export interface DescribeFHIRExportJobCommandInput extends DescribeFHIRExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFHIRExportJobCommand}.
 */
export interface DescribeFHIRExportJobCommandOutput extends DescribeFHIRExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeFHIRExportJobRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFHIRExportJobResponse
 * //   ExportJobProperties: { // ExportJobProperties
 * //     JobId: "STRING_VALUE", // required
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //     SubmitTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     DatastoreId: "STRING_VALUE", // required
 * //     OutputDataConfig: { // OutputDataConfig Union: only one key present
 * //       S3Configuration: { // S3Configuration
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFHIRExportJobCommandInput - {@link DescribeFHIRExportJobCommandInput}
 * @returns {@link DescribeFHIRExportJobCommandOutput}
 * @see {@link DescribeFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unknown error occurs in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 */
export class DescribeFHIRExportJobCommand extends $Command<
  DescribeFHIRExportJobCommandInput,
  DescribeFHIRExportJobCommandOutput,
  HealthLakeClientResolvedConfig
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
  constructor(readonly input: DescribeFHIRExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFHIRExportJobCommandInput, DescribeFHIRExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFHIRExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DescribeFHIRExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "HealthLake",
        operation: "DescribeFHIRExportJob",
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
  private serialize(input: DescribeFHIRExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFHIRExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFHIRExportJobCommandOutput> {
    return de_DescribeFHIRExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
