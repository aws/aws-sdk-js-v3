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

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import {
  CopyBackupToRegionRequest,
  CopyBackupToRegionRequestFilterSensitiveLog,
  CopyBackupToRegionResponse,
  CopyBackupToRegionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CopyBackupToRegionCommand,
  serializeAws_json1_1CopyBackupToRegionCommand,
} from "../protocols/Aws_json1_1";

export interface CopyBackupToRegionCommandInput extends CopyBackupToRegionRequest {}
export interface CopyBackupToRegionCommandOutput extends CopyBackupToRegionResponse, __MetadataBearer {}

/**
 * <p>Copy an AWS CloudHSM cluster backup to a different region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CopyBackupToRegionCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CopyBackupToRegionCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new CopyBackupToRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupToRegionCommandInput} for command's `input` shape.
 * @see {@link CopyBackupToRegionCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 */
export class CopyBackupToRegionCommand extends $Command<
  CopyBackupToRegionCommandInput,
  CopyBackupToRegionCommandOutput,
  CloudHSMV2ClientResolvedConfig
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

  constructor(readonly input: CopyBackupToRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyBackupToRegionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "CopyBackupToRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyBackupToRegionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyBackupToRegionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyBackupToRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyBackupToRegionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyBackupToRegionCommandOutput> {
    return deserializeAws_json1_1CopyBackupToRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
