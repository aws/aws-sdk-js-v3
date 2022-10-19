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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  StartImportRequest,
  StartImportRequestFilterSensitiveLog,
  StartImportResponse,
  StartImportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartImportCommand,
  serializeAws_json1_1StartImportCommand,
} from "../protocols/Aws_json1_1";

export interface StartImportCommandInput extends StartImportRequest {}
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * <p>
 *          Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the
 *          prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix
 *          in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>.
 *       </p>
 *          <p>
 *          When you start a new import, the <code>Destinations</code> and
 *          <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket.
 *          For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>.
 *       </p>
 *          <p>
 *          When you retry an import, the <code>ImportID</code> parameter is required.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartImportCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartImportCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class StartImportCommand extends $Command<
  StartImportCommandInput,
  StartImportCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: StartImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartImportCommandInput, StartImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartImportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "StartImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartImportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartImportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartImportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImportCommandOutput> {
    return deserializeAws_json1_1StartImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
