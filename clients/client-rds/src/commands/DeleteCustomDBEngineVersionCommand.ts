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

import {
  DBEngineVersion,
  DBEngineVersionFilterSensitiveLog,
  DeleteCustomDBEngineVersionMessage,
  DeleteCustomDBEngineVersionMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteCustomDBEngineVersionCommand,
  serializeAws_queryDeleteCustomDBEngineVersionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DeleteCustomDBEngineVersionCommandInput extends DeleteCustomDBEngineVersionMessage {}
export interface DeleteCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p>
 *          <ul>
 *             <li>
 *                <p>The CEV must not be the default for RDS Custom. If it is, change the default
 *                 before running this command.</p>
 *             </li>
 *             <li>
 *                <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot,
 *                 or automated backup of your RDS Custom instance.</p>
 *             </li>
 *          </ul>
 *          <p>Typically, deletion takes a few minutes.</p>
 *          <note>
 *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
 *             Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
 *             <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
 *             API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
 *             the <code>DeleteCustomDbEngineVersion</code> event.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">
 *             Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DeleteCustomDBEngineVersionCommand extends $Command<
  DeleteCustomDBEngineVersionCommandInput,
  DeleteCustomDBEngineVersionCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: DeleteCustomDBEngineVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomDBEngineVersionCommandInput, DeleteCustomDBEngineVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomDBEngineVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteCustomDBEngineVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomDBEngineVersionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBEngineVersionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomDBEngineVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCustomDBEngineVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomDBEngineVersionCommandOutput> {
    return deserializeAws_queryDeleteCustomDBEngineVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
