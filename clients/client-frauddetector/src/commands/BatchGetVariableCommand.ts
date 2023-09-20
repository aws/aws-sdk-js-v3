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
import { BatchGetVariableRequest, BatchGetVariableResult } from "../models/models_0";
import { de_BatchGetVariableCommand, se_BatchGetVariableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetVariableCommand}.
 */
export interface BatchGetVariableCommandInput extends BatchGetVariableRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetVariableCommand}.
 */
export interface BatchGetVariableCommandOutput extends BatchGetVariableResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchGetVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchGetVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // BatchGetVariableRequest
 *   names: [ // NameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetVariableCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetVariableResult
 * //   variables: [ // VariableList
 * //     { // Variable
 * //       name: "STRING_VALUE",
 * //       dataType: "STRING" || "INTEGER" || "FLOAT" || "BOOLEAN" || "DATETIME",
 * //       dataSource: "EVENT" || "MODEL_SCORE" || "EXTERNAL_MODEL_SCORE",
 * //       defaultValue: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       variableType: "STRING_VALUE",
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetVariableErrorList
 * //     { // BatchGetVariableError
 * //       name: "STRING_VALUE",
 * //       code: Number("int"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetVariableCommandInput - {@link BatchGetVariableCommandInput}
 * @returns {@link BatchGetVariableCommandOutput}
 * @see {@link BatchGetVariableCommandInput} for command's `input` shape.
 * @see {@link BatchGetVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
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
export class BatchGetVariableCommand extends $Command<
  BatchGetVariableCommandInput,
  BatchGetVariableCommandOutput,
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
  constructor(readonly input: BatchGetVariableCommandInput) {
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
  ): Handler<BatchGetVariableCommandInput, BatchGetVariableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetVariableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "BatchGetVariableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "BatchGetVariable",
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
  private serialize(input: BatchGetVariableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetVariableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetVariableCommandOutput> {
    return de_BatchGetVariableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
