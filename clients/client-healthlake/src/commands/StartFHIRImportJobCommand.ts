// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { StartFHIRImportJobRequest, StartFHIRImportJobResponse } from "../models/models_0";
import { de_StartFHIRImportJobCommand, se_StartFHIRImportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link StartFHIRImportJobCommand}.
 */
export interface StartFHIRImportJobCommandInput extends StartFHIRImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartFHIRImportJobCommand}.
 */
export interface StartFHIRImportJobCommandOutput extends StartFHIRImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Begins a FHIR Import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRImportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRImportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // StartFHIRImportJobRequest
 *   JobName: "STRING_VALUE",
 *   InputDataConfig: { // InputDataConfig Union: only one key present
 *     S3Uri: "STRING_VALUE",
 *   },
 *   JobOutputDataConfig: { // OutputDataConfig Union: only one key present
 *     S3Configuration: { // S3Configuration
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE", // required
 *     },
 *   },
 *   DatastoreId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new StartFHIRImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartFHIRImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   JobStatus: "STRING_VALUE", // required
 * //   DatastoreId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFHIRImportJobCommandInput - {@link StartFHIRImportJobCommandInput}
 * @returns {@link StartFHIRImportJobCommandOutput}
 * @see {@link StartFHIRImportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRImportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unknown error occurs in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The requested Data Store was not found.</p>
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
export class StartFHIRImportJobCommand extends $Command<
  StartFHIRImportJobCommandInput,
  StartFHIRImportJobCommandOutput,
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
  constructor(readonly input: StartFHIRImportJobCommandInput) {
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
  ): Handler<StartFHIRImportJobCommandInput, StartFHIRImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFHIRImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "StartFHIRImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartFHIRImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartFHIRImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFHIRImportJobCommandOutput> {
    return de_StartFHIRImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
