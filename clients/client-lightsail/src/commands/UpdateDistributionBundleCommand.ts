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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  UpdateDistributionBundleRequest,
  UpdateDistributionBundleRequestFilterSensitiveLog,
  UpdateDistributionBundleResult,
  UpdateDistributionBundleResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateDistributionBundleCommand,
  serializeAws_json1_1UpdateDistributionBundleCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateDistributionBundleCommandInput extends UpdateDistributionBundleRequest {}
export interface UpdateDistributionBundleCommandOutput extends UpdateDistributionBundleResult, __MetadataBearer {}

/**
 * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your distribution.</p>
 *          <p>Update your distribution's bundle if your distribution is going over its monthly network
 *       transfer quota and is incurring an overage fee.</p>
 *          <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the
 *         <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the
 *       result will indicate whether you can currently update your distribution's bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionBundleCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionBundleCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDistributionBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionBundleCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class UpdateDistributionBundleCommand extends $Command<
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: UpdateDistributionBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDistributionBundleCommandInput, UpdateDistributionBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDistributionBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateDistributionBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionBundleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionBundleResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDistributionBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDistributionBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDistributionBundleCommandOutput> {
    return deserializeAws_json1_1UpdateDistributionBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
