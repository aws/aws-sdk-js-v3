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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DescribeDocumentClassificationJobRequest,
  DescribeDocumentClassificationJobResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDocumentClassificationJobCommand,
  serializeAws_json1_1DescribeDocumentClassificationJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeDocumentClassificationJobCommand}.
 */
export interface DescribeDocumentClassificationJobCommandInput extends DescribeDocumentClassificationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDocumentClassificationJobCommand}.
 */
export interface DescribeDocumentClassificationJobCommandOutput
  extends DescribeDocumentClassificationJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the properties associated with a document classification job. Use this operation to
 *       get the status of a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeDocumentClassificationJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeDocumentClassificationJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeDocumentClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDocumentClassificationJobCommandInput - {@link DescribeDocumentClassificationJobCommandInput}
 * @returns {@link DescribeDocumentClassificationJobCommandOutput}
 * @see {@link DescribeDocumentClassificationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The specified job was not found. Check the job ID and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 *
 */
export class DescribeDocumentClassificationJobCommand extends $Command<
  DescribeDocumentClassificationJobCommandInput,
  DescribeDocumentClassificationJobCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DescribeDocumentClassificationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDocumentClassificationJobCommandInput, DescribeDocumentClassificationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDocumentClassificationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeDocumentClassificationJobCommand";
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
  private serialize(
    input: DescribeDocumentClassificationJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDocumentClassificationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDocumentClassificationJobCommandOutput> {
    return deserializeAws_json1_1DescribeDocumentClassificationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
