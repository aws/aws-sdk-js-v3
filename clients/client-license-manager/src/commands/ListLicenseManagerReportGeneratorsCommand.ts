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
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseManagerReportGeneratorsRequestFilterSensitiveLog,
  ListLicenseManagerReportGeneratorsResponse,
  ListLicenseManagerReportGeneratorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand,
  serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand,
} from "../protocols/Aws_json1_1";

export interface ListLicenseManagerReportGeneratorsCommandInput extends ListLicenseManagerReportGeneratorsRequest {}
export interface ListLicenseManagerReportGeneratorsCommandOutput
  extends ListLicenseManagerReportGeneratorsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the report generators for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseManagerReportGeneratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseManagerReportGeneratorsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseManagerReportGeneratorsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class ListLicenseManagerReportGeneratorsCommand extends $Command<
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
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

  constructor(readonly input: ListLicenseManagerReportGeneratorsCommandInput) {
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
  ): Handler<ListLicenseManagerReportGeneratorsCommandInput, ListLicenseManagerReportGeneratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLicenseManagerReportGeneratorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListLicenseManagerReportGeneratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLicenseManagerReportGeneratorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLicenseManagerReportGeneratorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListLicenseManagerReportGeneratorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLicenseManagerReportGeneratorsCommandOutput> {
    return deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
