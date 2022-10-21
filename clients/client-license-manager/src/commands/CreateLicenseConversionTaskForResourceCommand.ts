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
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseConversionTaskForResourceRequestFilterSensitiveLog,
  CreateLicenseConversionTaskForResourceResponse,
  CreateLicenseConversionTaskForResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommand,
  serializeAws_json1_1CreateLicenseConversionTaskForResourceCommand,
} from "../protocols/Aws_json1_1";

export interface CreateLicenseConversionTaskForResourceCommandInput
  extends CreateLicenseConversionTaskForResourceRequest {}
export interface CreateLicenseConversionTaskForResourceCommandOutput
  extends CreateLicenseConversionTaskForResourceResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new license conversion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseConversionTaskForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseConversionTaskForResourceCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseConversionTaskForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class CreateLicenseConversionTaskForResourceCommand extends $Command<
  CreateLicenseConversionTaskForResourceCommandInput,
  CreateLicenseConversionTaskForResourceCommandOutput,
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

  constructor(readonly input: CreateLicenseConversionTaskForResourceCommandInput) {
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
  ): Handler<CreateLicenseConversionTaskForResourceCommandInput, CreateLicenseConversionTaskForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLicenseConversionTaskForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateLicenseConversionTaskForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLicenseConversionTaskForResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLicenseConversionTaskForResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateLicenseConversionTaskForResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLicenseConversionTaskForResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLicenseConversionTaskForResourceCommandOutput> {
    return deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
