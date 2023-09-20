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
import { UpdateModelVersionStatusRequest, UpdateModelVersionStatusResult } from "../models/models_0";
import { de_UpdateModelVersionStatusCommand, se_UpdateModelVersionStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateModelVersionStatusCommand}.
 */
export interface UpdateModelVersionStatusCommandInput extends UpdateModelVersionStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateModelVersionStatusCommand}.
 */
export interface UpdateModelVersionStatusCommandOutput extends UpdateModelVersionStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the status of a model version.</p>
 *          <p>You can perform the following status updates:</p>
 *          <ol>
 *             <li>
 *                <p>Change the <code>TRAINING_IN_PROGRESS</code> status to <code>TRAINING_CANCELLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change <code>ACTIVE</code> to <code>INACTIVE</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateModelVersionStatusRequest
 *   modelId: "STRING_VALUE", // required
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *   modelVersionNumber: "STRING_VALUE", // required
 *   status: "ACTIVE" || "INACTIVE" || "TRAINING_CANCELLED", // required
 * };
 * const command = new UpdateModelVersionStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateModelVersionStatusCommandInput - {@link UpdateModelVersionStatusCommandInput}
 * @returns {@link UpdateModelVersionStatusCommandOutput}
 * @see {@link UpdateModelVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionStatusCommandOutput} for command's `response` shape.
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
export class UpdateModelVersionStatusCommand extends $Command<
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
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
  constructor(readonly input: UpdateModelVersionStatusCommandInput) {
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
  ): Handler<UpdateModelVersionStatusCommandInput, UpdateModelVersionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateModelVersionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateModelVersionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "UpdateModelVersionStatus",
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
  private serialize(input: UpdateModelVersionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateModelVersionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateModelVersionStatusCommandOutput> {
    return de_UpdateModelVersionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
