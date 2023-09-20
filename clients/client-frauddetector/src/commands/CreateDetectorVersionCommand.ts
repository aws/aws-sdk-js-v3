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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateDetectorVersionRequest, CreateDetectorVersionResult } from "../models/models_0";
import { de_CreateDetectorVersionCommand, se_CreateDetectorVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDetectorVersionCommand}.
 */
export interface CreateDetectorVersionCommandInput extends CreateDetectorVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDetectorVersionCommand}.
 */
export interface CreateDetectorVersionCommandOutput extends CreateDetectorVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateDetectorVersionRequest
 *   detectorId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   externalModelEndpoints: [ // ListOfStrings
 *     "STRING_VALUE",
 *   ],
 *   rules: [ // RuleList // required
 *     { // Rule
 *       detectorId: "STRING_VALUE", // required
 *       ruleId: "STRING_VALUE", // required
 *       ruleVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   modelVersions: [ // ListOfModelVersions
 *     { // ModelVersion
 *       modelId: "STRING_VALUE", // required
 *       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *       modelVersionNumber: "STRING_VALUE", // required
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDetectorVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDetectorVersionResult
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionId: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param CreateDetectorVersionCommandInput - {@link CreateDetectorVersionCommandInput}
 * @returns {@link CreateDetectorVersionCommandOutput}
 * @see {@link CreateDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorVersionCommandOutput} for command's `response` shape.
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
export class CreateDetectorVersionCommand extends $Command<
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
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
  constructor(readonly input: CreateDetectorVersionCommandInput) {
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
  ): Handler<CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDetectorVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "CreateDetectorVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "CreateDetectorVersion",
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
  private serialize(input: CreateDetectorVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDetectorVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorVersionCommandOutput> {
    return de_CreateDetectorVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
