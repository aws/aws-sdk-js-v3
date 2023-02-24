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
  DeleteLicenseManagerReportGeneratorRequest,
  DeleteLicenseManagerReportGeneratorRequestFilterSensitiveLog,
  DeleteLicenseManagerReportGeneratorResponse,
  DeleteLicenseManagerReportGeneratorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand,
  serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteLicenseManagerReportGeneratorCommandInput extends DeleteLicenseManagerReportGeneratorRequest {}
export interface DeleteLicenseManagerReportGeneratorCommandOutput
  extends DeleteLicenseManagerReportGeneratorResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified report generator.</p>
 *          <p>This action deletes the report generator, which stops it from generating future reports.
 *          The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class DeleteLicenseManagerReportGeneratorCommand extends $Command<
  DeleteLicenseManagerReportGeneratorCommandInput,
  DeleteLicenseManagerReportGeneratorCommandOutput,
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

  constructor(readonly input: DeleteLicenseManagerReportGeneratorCommandInput) {
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
  ): Handler<DeleteLicenseManagerReportGeneratorCommandInput, DeleteLicenseManagerReportGeneratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLicenseManagerReportGeneratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "DeleteLicenseManagerReportGeneratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLicenseManagerReportGeneratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLicenseManagerReportGeneratorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteLicenseManagerReportGeneratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLicenseManagerReportGeneratorCommandOutput> {
    return deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
