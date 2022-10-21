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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceRequestFilterSensitiveLog,
  UpdateLicenseSpecificationsForResourceResponse,
  UpdateLicenseSpecificationsForResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand,
  serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateLicenseSpecificationsForResourceCommandInput
  extends UpdateLicenseSpecificationsForResourceRequest {}
export interface UpdateLicenseSpecificationsForResourceCommandOutput
  extends UpdateLicenseSpecificationsForResourceResponse,
    __MetadataBearer {}

/**
 * <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p>
 *          <p>You can update the license specifications of AMIs, instances, and hosts.
 *          You cannot update the license specifications for launch templates and CloudFormation templates,
 *          as they send license configurations to the operation that creates the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class UpdateLicenseSpecificationsForResourceCommand extends $Command<
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
  LicenseManagerClientResolvedConfig
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

  constructor(readonly input: UpdateLicenseSpecificationsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLicenseSpecificationsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "UpdateLicenseSpecificationsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLicenseSpecificationsForResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLicenseSpecificationsForResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateLicenseSpecificationsForResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> {
    return deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
