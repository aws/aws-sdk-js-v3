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
} from "@smithy/types";

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutExternalModelRequest, PutExternalModelResult } from "../models/models_0";
import { de_PutExternalModelCommand, se_PutExternalModelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutExternalModelCommand}.
 */
export interface PutExternalModelCommandInput extends PutExternalModelRequest {}
/**
 * @public
 *
 * The output of {@link PutExternalModelCommand}.
 */
export interface PutExternalModelCommandOutput extends PutExternalModelResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutExternalModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutExternalModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // PutExternalModelRequest
 *   modelEndpoint: "STRING_VALUE", // required
 *   modelSource: "SAGEMAKER", // required
 *   invokeModelEndpointRoleArn: "STRING_VALUE", // required
 *   inputConfiguration: { // ModelInputConfiguration
 *     eventTypeName: "STRING_VALUE",
 *     format: "TEXT_CSV" || "APPLICATION_JSON",
 *     useEventVariables: true || false, // required
 *     jsonInputTemplate: "STRING_VALUE",
 *     csvInputTemplate: "STRING_VALUE",
 *   },
 *   outputConfiguration: { // ModelOutputConfiguration
 *     format: "TEXT_CSV" || "APPLICATION_JSONLINES", // required
 *     jsonKeyToVariableMap: { // JsonKeyToVariableMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     csvIndexToVariableMap: { // CsvIndexToVariableMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   modelEndpointStatus: "ASSOCIATED" || "DISSOCIATED", // required
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutExternalModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutExternalModelCommandInput - {@link PutExternalModelCommandInput}
 * @returns {@link PutExternalModelCommandOutput}
 * @see {@link PutExternalModelCommandInput} for command's `input` shape.
 * @see {@link PutExternalModelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 */
export class PutExternalModelCommand extends $Command<
  PutExternalModelCommandInput,
  PutExternalModelCommandOutput,
  FraudDetectorClientResolvedConfig
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
  constructor(readonly input: PutExternalModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutExternalModelCommandInput, PutExternalModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutExternalModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "PutExternalModelCommand";
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
  private serialize(input: PutExternalModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutExternalModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutExternalModelCommandOutput> {
    return de_PutExternalModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
