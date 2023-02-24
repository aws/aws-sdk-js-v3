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
  ModifyBackupAttributesRequest,
  ModifyBackupAttributesRequestFilterSensitiveLog,
  ModifyBackupAttributesResponse,
  ModifyBackupAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ModifyBackupAttributesCommand,
  serializeAws_json1_1ModifyBackupAttributesCommand,
} from "../protocols/Aws_json1_1";

export interface ModifyBackupAttributesCommandInput extends ModifyBackupAttributesRequest {}
export interface ModifyBackupAttributesCommandOutput extends ModifyBackupAttributesResponse, __MetadataBearer {}

/**
 * <p>Modifies attributes for AWS CloudHSM backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ModifyBackupAttributesCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ModifyBackupAttributesCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new ModifyBackupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyBackupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyBackupAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 */
export class ModifyBackupAttributesCommand extends $Command<
  ModifyBackupAttributesCommandInput,
  ModifyBackupAttributesCommandOutput,
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

  constructor(readonly input: ModifyBackupAttributesCommandInput) {
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
  ): Handler<ModifyBackupAttributesCommandInput, ModifyBackupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyBackupAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "ModifyBackupAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyBackupAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyBackupAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyBackupAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyBackupAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyBackupAttributesCommandOutput> {
    return deserializeAws_json1_1ModifyBackupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
