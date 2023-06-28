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
import { GetExternalModelsRequest, GetExternalModelsResult } from "../models/models_0";
import { de_GetExternalModelsCommand, se_GetExternalModelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetExternalModelsCommand}.
 */
export interface GetExternalModelsCommandInput extends GetExternalModelsRequest {}
/**
 * @public
 *
 * The output of {@link GetExternalModelsCommand}.
 */
export interface GetExternalModelsCommandOutput extends GetExternalModelsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
 *          service. This is a paginated API. If you provide a null <code>maxResults</code>, this
 *          actions retrieves a maximum of 10 records per page. If you provide a
 *             <code>maxResults</code>, the value must be between 5 and 10. To get the next page
 *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
 *          of your request. A null pagination token fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetExternalModelsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetExternalModelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetExternalModelsRequest
 *   modelEndpoint: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetExternalModelsCommand(input);
 * const response = await client.send(command);
 * // { // GetExternalModelsResult
 * //   externalModels: [ // ExternalModelList
 * //     { // ExternalModel
 * //       modelEndpoint: "STRING_VALUE",
 * //       modelSource: "SAGEMAKER",
 * //       invokeModelEndpointRoleArn: "STRING_VALUE",
 * //       inputConfiguration: { // ModelInputConfiguration
 * //         eventTypeName: "STRING_VALUE",
 * //         format: "TEXT_CSV" || "APPLICATION_JSON",
 * //         useEventVariables: true || false, // required
 * //         jsonInputTemplate: "STRING_VALUE",
 * //         csvInputTemplate: "STRING_VALUE",
 * //       },
 * //       outputConfiguration: { // ModelOutputConfiguration
 * //         format: "TEXT_CSV" || "APPLICATION_JSONLINES", // required
 * //         jsonKeyToVariableMap: { // JsonKeyToVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         csvIndexToVariableMap: { // CsvIndexToVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       modelEndpointStatus: "ASSOCIATED" || "DISSOCIATED",
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExternalModelsCommandInput - {@link GetExternalModelsCommandInput}
 * @returns {@link GetExternalModelsCommandOutput}
 * @see {@link GetExternalModelsCommandInput} for command's `input` shape.
 * @see {@link GetExternalModelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
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
export class GetExternalModelsCommand extends $Command<
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput,
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
  constructor(readonly input: GetExternalModelsCommandInput) {
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
  ): Handler<GetExternalModelsCommandInput, GetExternalModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExternalModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetExternalModelsCommand";
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
  private serialize(input: GetExternalModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetExternalModelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExternalModelsCommandOutput> {
    return de_GetExternalModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
