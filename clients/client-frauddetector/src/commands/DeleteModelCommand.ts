// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteModelRequest, DeleteModelResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteModelCommand,
  serializeAws_json1_1DeleteModelCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteModelCommand}.
 */
export interface DeleteModelCommandInput extends DeleteModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelCommand}.
 */
export interface DeleteModelCommandOutput extends DeleteModelResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a model.</p>
 *          <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
 *          <p> When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteModelCommandInput - {@link DeleteModelCommandInput}
 * @returns {@link DeleteModelCommandOutput}
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
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
 *
 */
export class DeleteModelCommand extends $Command<
  DeleteModelCommandInput,
  DeleteModelCommandOutput,
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
  constructor(readonly input: DeleteModelCommandInput) {
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
  ): Handler<DeleteModelCommandInput, DeleteModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteModelCommand";
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
  private serialize(input: DeleteModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteModelCommandOutput> {
    return deserializeAws_json1_1DeleteModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
