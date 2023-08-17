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
import { GetDetectorVersionRequest, GetDetectorVersionResult } from "../models/models_0";
import { de_GetDetectorVersionCommand, se_GetDetectorVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDetectorVersionCommand}.
 */
export interface GetDetectorVersionCommandInput extends GetDetectorVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetDetectorVersionCommand}.
 */
export interface GetDetectorVersionCommandOutput extends GetDetectorVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a particular detector version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetDetectorVersionRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetDetectorVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetDetectorVersionResult
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   externalModelEndpoints: [ // ListOfStrings
 * //     "STRING_VALUE",
 * //   ],
 * //   modelVersions: [ // ListOfModelVersions
 * //     { // ModelVersion
 * //       modelId: "STRING_VALUE", // required
 * //       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 * //       modelVersionNumber: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   rules: [ // RuleList
 * //     { // Rule
 * //       detectorId: "STRING_VALUE", // required
 * //       ruleId: "STRING_VALUE", // required
 * //       ruleVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   status: "DRAFT" || "ACTIVE" || "INACTIVE",
 * //   lastUpdatedTime: "STRING_VALUE",
 * //   createdTime: "STRING_VALUE",
 * //   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDetectorVersionCommandInput - {@link GetDetectorVersionCommandInput}
 * @returns {@link GetDetectorVersionCommandOutput}
 * @see {@link GetDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link GetDetectorVersionCommandOutput} for command's `response` shape.
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
export class GetDetectorVersionCommand extends $Command<
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput,
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
  constructor(readonly input: GetDetectorVersionCommandInput) {
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
  ): Handler<GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDetectorVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetDetectorVersionCommand";
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
  private serialize(input: GetDetectorVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDetectorVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDetectorVersionCommandOutput> {
    return de_GetDetectorVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
