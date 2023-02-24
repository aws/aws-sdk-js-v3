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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusRequestFilterSensitiveLog,
  GetOrganizationConformancePackDetailedStatusResponse,
  GetOrganizationConformancePackDetailedStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand,
  serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand,
} from "../protocols/Aws_json1_1";

export interface GetOrganizationConformancePackDetailedStatusCommandInput
  extends GetOrganizationConformancePackDetailedStatusRequest {}
export interface GetOrganizationConformancePackDetailedStatusCommandOutput
  extends GetOrganizationConformancePackDetailedStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetOrganizationConformancePackDetailedStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetOrganizationConformancePackDetailedStatusCommand extends $Command<
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: GetOrganizationConformancePackDetailedStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetOrganizationConformancePackDetailedStatusCommandInput,
    GetOrganizationConformancePackDetailedStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetOrganizationConformancePackDetailedStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetOrganizationConformancePackDetailedStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOrganizationConformancePackDetailedStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetOrganizationConformancePackDetailedStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetOrganizationConformancePackDetailedStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> {
    return deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
