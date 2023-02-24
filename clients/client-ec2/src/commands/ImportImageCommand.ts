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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ImportImageRequest,
  ImportImageRequestFilterSensitiveLog,
  ImportImageResult,
  ImportImageResultFilterSensitiveLog,
} from "../models/models_5";
import { deserializeAws_ec2ImportImageCommand, serializeAws_ec2ImportImageCommand } from "../protocols/Aws_ec2";

export interface ImportImageCommandInput extends ImportImageRequest {}
export interface ImportImageCommandOutput extends ImportImageResult, __MetadataBearer {}

/**
 * <p>Import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI).</p>
 *          <important>
 *             <p>Amazon Web Services VM Import/Export strongly recommends specifying a value for either the
 *      <code>--license-type</code> or <code>--usage-operation</code> parameter when you create a new
 *     VM Import task. This ensures your operating system is licensed appropriately and your billing is
 *     optimized.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html">Importing a
 *    VM as an image using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportImageCommandInput} for command's `input` shape.
 * @see {@link ImportImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ImportImageCommand extends $Command<
  ImportImageCommandInput,
  ImportImageCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ImportImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportImageCommandInput, ImportImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ImportImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportImageCommandOutput> {
    return deserializeAws_ec2ImportImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
