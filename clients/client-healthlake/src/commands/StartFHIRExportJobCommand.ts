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
import { StartFHIRExportJobRequest, StartFHIRExportJobResponse } from "../models/models_0";
import { de_StartFHIRExportJobCommand, se_StartFHIRExportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartFHIRExportJobCommand}.
 */
export interface StartFHIRExportJobCommandInput extends StartFHIRExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartFHIRExportJobCommand}.
 */
export interface StartFHIRExportJobCommandOutput extends StartFHIRExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Begins a FHIR export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // StartFHIRExportJobRequest
 *   JobName: "STRING_VALUE",
 *   OutputDataConfig: { // OutputDataConfig Union: only one key present
 *     S3Configuration: { // S3Configuration
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE", // required
 *     },
 *   },
 *   DatastoreId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new StartFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartFHIRExportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //   DatastoreId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFHIRExportJobCommandInput - {@link StartFHIRExportJobCommandInput}
 * @returns {@link StartFHIRExportJobCommandOutput}
 * @see {@link StartFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
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
export class StartFHIRExportJobCommand extends $Command<
  StartFHIRExportJobCommandInput,
  StartFHIRExportJobCommandOutput,
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
  constructor(readonly input: StartFHIRExportJobCommandInput) {
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
  ): Handler<StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFHIRExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "StartFHIRExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "HealthLake",
        operation: "StartFHIRExportJob",
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
  private serialize(input: StartFHIRExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartFHIRExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFHIRExportJobCommandOutput> {
    return de_StartFHIRExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
