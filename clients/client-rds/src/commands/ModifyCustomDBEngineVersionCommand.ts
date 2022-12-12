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

import { DBEngineVersion, DBEngineVersionFilterSensitiveLog } from "../models/models_0";
import {
  ModifyCustomDBEngineVersionMessage,
  ModifyCustomDBEngineVersionMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyCustomDBEngineVersionCommand,
  serializeAws_queryModifyCustomDBEngineVersionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyCustomDBEngineVersionCommandInput extends ModifyCustomDBEngineVersionMessage {}
export interface ModifyCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling
 *             <code>DescribeDBEngineVersions</code>.</p>
 *          <note>
 *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
 *                 Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
 *                 <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
 *                 API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
 *                 the <code>ModifyCustomDbEngineVersion</code> event.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a>
 *             in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link ModifyCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyCustomDBEngineVersionCommand extends $Command<
  ModifyCustomDBEngineVersionCommandInput,
  ModifyCustomDBEngineVersionCommandOutput,
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

  constructor(readonly input: ModifyCustomDBEngineVersionCommandInput) {
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
  ): Handler<ModifyCustomDBEngineVersionCommandInput, ModifyCustomDBEngineVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCustomDBEngineVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyCustomDBEngineVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCustomDBEngineVersionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBEngineVersionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyCustomDBEngineVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyCustomDBEngineVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCustomDBEngineVersionCommandOutput> {
    return deserializeAws_queryModifyCustomDBEngineVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
