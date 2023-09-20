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
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { StartSNOMEDCTInferenceJobRequest, StartSNOMEDCTInferenceJobResponse } from "../models/models_0";
import { de_StartSNOMEDCTInferenceJobCommand, se_StartSNOMEDCTInferenceJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSNOMEDCTInferenceJobCommand}.
 */
export interface StartSNOMEDCTInferenceJobCommandInput extends StartSNOMEDCTInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link StartSNOMEDCTInferenceJobCommand}.
 */
export interface StartSNOMEDCTInferenceJobCommandOutput extends StartSNOMEDCTInferenceJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartSNOMEDCTInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartSNOMEDCTInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // StartSNOMEDCTInferenceJobRequest
 *   InputDataConfig: { // InputDataConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   KMSKey: "STRING_VALUE",
 *   LanguageCode: "en", // required
 * };
 * const command = new StartSNOMEDCTInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSNOMEDCTInferenceJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSNOMEDCTInferenceJobCommandInput - {@link StartSNOMEDCTInferenceJobCommandInput}
 * @returns {@link StartSNOMEDCTInferenceJobCommandOutput}
 * @see {@link StartSNOMEDCTInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartSNOMEDCTInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal server error occurred. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check
 *       the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 */
export class StartSNOMEDCTInferenceJobCommand extends $Command<
  StartSNOMEDCTInferenceJobCommandInput,
  StartSNOMEDCTInferenceJobCommandOutput,
  ComprehendMedicalClientResolvedConfig
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
  constructor(readonly input: StartSNOMEDCTInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSNOMEDCTInferenceJobCommandInput, StartSNOMEDCTInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSNOMEDCTInferenceJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StartSNOMEDCTInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComprehendMedical_20181030",
        operation: "StartSNOMEDCTInferenceJob",
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
  private serialize(input: StartSNOMEDCTInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSNOMEDCTInferenceJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSNOMEDCTInferenceJobCommandOutput> {
    return de_StartSNOMEDCTInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
