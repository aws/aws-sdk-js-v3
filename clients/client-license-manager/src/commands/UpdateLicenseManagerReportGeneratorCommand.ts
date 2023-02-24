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
  UpdateLicenseManagerReportGeneratorRequest,
  UpdateLicenseManagerReportGeneratorRequestFilterSensitiveLog,
  UpdateLicenseManagerReportGeneratorResponse,
  UpdateLicenseManagerReportGeneratorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand,
  serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateLicenseManagerReportGeneratorCommandInput extends UpdateLicenseManagerReportGeneratorRequest {}
export interface UpdateLicenseManagerReportGeneratorCommandOutput
  extends UpdateLicenseManagerReportGeneratorResponse,
    __MetadataBearer {}

/**
 * <p>Updates a report generator.</p>
 *          <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class UpdateLicenseManagerReportGeneratorCommand extends $Command<
  UpdateLicenseManagerReportGeneratorCommandInput,
  UpdateLicenseManagerReportGeneratorCommandOutput,
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

  constructor(readonly input: UpdateLicenseManagerReportGeneratorCommandInput) {
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
  ): Handler<UpdateLicenseManagerReportGeneratorCommandInput, UpdateLicenseManagerReportGeneratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLicenseManagerReportGeneratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "UpdateLicenseManagerReportGeneratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLicenseManagerReportGeneratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLicenseManagerReportGeneratorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateLicenseManagerReportGeneratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLicenseManagerReportGeneratorCommandOutput> {
    return deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
