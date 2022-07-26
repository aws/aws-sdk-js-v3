// smithy-typescript generated code
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
  CreateCustomDBEngineVersionMessage,
  CreateCustomDBEngineVersionMessageFilterSensitiveLog,
  DBEngineVersion,
  DBEngineVersionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateCustomDBEngineVersionCommand,
  serializeAws_queryCreateCustomDBEngineVersionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateCustomDBEngineVersionCommandInput extends CreateCustomDBEngineVersionMessage {}
export interface CreateCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Creates a custom DB engine version (CEV). A CEV is a binary volume snapshot of a database engine and specific
 *             AMI. The supported engines are the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Oracle Database 12.1 Enterprise Edition with the January 2021 or later RU/RUR</p>
 *             </li>
 *             <li>
 *                 <p>Oracle Database 19c Enterprise Edition with the January 2021 or later RU/RUR</p>
 *             </li>
 *          </ul>
 *         <p>Amazon RDS, which is a fully managed service, supplies the Amazon Machine Image (AMI) and database software.
 *             The Amazon RDS database software is preinstalled, so you need only select a DB engine and version, and create
 *             your database. With Amazon RDS Custom for Oracle, you upload your database installation files in Amazon S3.</p>
 *         <p>When you create a custom engine version, you specify the files in a JSON document called a CEV manifest.
 *             This document describes installation .zip files stored in Amazon S3. RDS Custom creates your CEV from
 *             the installation files that you provided. This service model is called Bring Your Own Media (BYOM).</p>
 *         <p>Creation takes approximately two hours. If creation fails, RDS Custom issues <code>RDS-EVENT-0196</code> with
 *             the message <code>Creation failed for custom engine version</code>, and includes details about the failure.
 *             For example, the event prints missing files.</p>
 *         <p>After you create the CEV, it is available for use. You can create multiple CEVs, and create multiple
 *             RDS Custom instances from any CEV. You can also change the status of a CEV to make it available or
 *             inactive.</p>
 *         <note>
 *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
 *             Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
 *             <code>CreateCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
 *             API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
 *             the <code>CreateCustomDbEngineVersion</code> event.</p>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.create">
 *                 Creating a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateCustomDBEngineVersionCommand extends $Command<
  CreateCustomDBEngineVersionCommandInput,
  CreateCustomDBEngineVersionCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomDBEngineVersionCommandInput) {
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
  ): Handler<CreateCustomDBEngineVersionCommandInput, CreateCustomDBEngineVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateCustomDBEngineVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomDBEngineVersionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBEngineVersionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomDBEngineVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCustomDBEngineVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomDBEngineVersionCommandOutput> {
    return deserializeAws_queryCreateCustomDBEngineVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
