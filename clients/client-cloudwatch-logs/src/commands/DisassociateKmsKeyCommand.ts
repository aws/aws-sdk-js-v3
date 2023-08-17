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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DisassociateKmsKeyRequest } from "../models/models_0";
import { de_DisassociateKmsKeyCommand, se_DisassociateKmsKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateKmsKeyCommand}.
 */
export interface DisassociateKmsKeyCommandInput extends DisassociateKmsKeyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateKmsKeyCommand}.
 */
export interface DisassociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the specified KMS key from the specified log
 *       group or from all CloudWatch Logs Insights query results in the account.</p>
 *          <p>When you use <code>DisassociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter
 *       or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p>
 *          <ul>
 *             <li>
 *                <p>Specify the <code>logGroupName</code> parameter to stop using the KMS key
 *           to encrypt future log events ingested and stored in the log group. Instead, they will be
 *           encrypted with the default CloudWatch Logs method. The log events that were ingested
 *           while the key was associated with the log group are still encrypted with that key.
 *           Therefore, CloudWatch Logs will need permissions for the key whenever that data is
 *           accessed.</p>
 *             </li>
 *             <li>
 *                <p>Specify the <code>resourceIdentifier</code> parameter with the <code>query-result</code>
 *           resource to stop using the KMS key to encrypt the results of all
 *           future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>
 *           operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with
 *           the account are still encrypted with that key. Therefore, CloudWatch Logs will need
 *           permissions for the key whenever that data is accessed.</p>
 *             </li>
 *          </ul>
 *          <p>It can take up to 5 minutes for this operation to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DisassociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DisassociateKmsKeyRequest
 *   logGroupName: "STRING_VALUE",
 *   resourceIdentifier: "STRING_VALUE",
 * };
 * const command = new DisassociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateKmsKeyCommandInput - {@link DisassociateKmsKeyCommandInput}
 * @returns {@link DisassociateKmsKeyCommandOutput}
 * @see {@link DisassociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DisassociateKmsKeyCommand extends $Command<
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: DisassociateKmsKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateKmsKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DisassociateKmsKeyCommand";
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
  private serialize(input: DisassociateKmsKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateKmsKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateKmsKeyCommandOutput> {
    return de_DisassociateKmsKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
