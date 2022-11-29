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
  UpdatePublicSharingSettingsRequest,
  UpdatePublicSharingSettingsRequestFilterSensitiveLog,
  UpdatePublicSharingSettingsResponse,
  UpdatePublicSharingSettingsResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_restJson1UpdatePublicSharingSettingsCommand,
  serializeAws_restJson1UpdatePublicSharingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface UpdatePublicSharingSettingsCommandInput extends UpdatePublicSharingSettingsRequest {}
export interface UpdatePublicSharingSettingsCommandOutput
  extends UpdatePublicSharingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Use the <code>UpdatePublicSharingSettings</code> operation to turn on or turn off the
 *             public sharing settings of an Amazon QuickSight dashboard.</p>
 *          <p>To use this operation, turn on session capacity pricing for your Amazon QuickSight
 *             account.</p>
 *          <p>Before you can turn on public sharing on your account, make sure to give public sharing
 *             permissions to an administrative user in the Identity and Access Management (IAM)
 *             console. For more information on using IAM with Amazon QuickSight, see
 *                 <a href="https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html">Using Amazon QuickSight with IAM</a> in the <i>Amazon QuickSight
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdatePublicSharingSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdatePublicSharingSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdatePublicSharingSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublicSharingSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicSharingSettingsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class UpdatePublicSharingSettingsCommand extends $Command<
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
  QuickSightClientResolvedConfig
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

  constructor(readonly input: UpdatePublicSharingSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePublicSharingSettingsCommandInput, UpdatePublicSharingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePublicSharingSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdatePublicSharingSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePublicSharingSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePublicSharingSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePublicSharingSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePublicSharingSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePublicSharingSettingsCommandOutput> {
    return deserializeAws_restJson1UpdatePublicSharingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
