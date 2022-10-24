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
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusRequestFilterSensitiveLog,
  DescribePermissionSetProvisioningStatusResponse,
  DescribePermissionSetProvisioningStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand,
  serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface DescribePermissionSetProvisioningStatusCommandInput
  extends DescribePermissionSetProvisioningStatusRequest {}
export interface DescribePermissionSetProvisioningStatusCommandOutput
  extends DescribePermissionSetProvisioningStatusResponse,
    __MetadataBearer {}

/**
 * <p>Describes the status for the given permission set provisioning request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribePermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class DescribePermissionSetProvisioningStatusCommand extends $Command<
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
  SSOAdminClientResolvedConfig
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

  constructor(readonly input: DescribePermissionSetProvisioningStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribePermissionSetProvisioningStatusCommandInput,
    DescribePermissionSetProvisioningStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribePermissionSetProvisioningStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribePermissionSetProvisioningStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePermissionSetProvisioningStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePermissionSetProvisioningStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePermissionSetProvisioningStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePermissionSetProvisioningStatusCommandOutput> {
    return deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
