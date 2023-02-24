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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  GetIdentityResolutionJobRequest,
  GetIdentityResolutionJobRequestFilterSensitiveLog,
  GetIdentityResolutionJobResponse,
  GetIdentityResolutionJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIdentityResolutionJobCommand,
  serializeAws_restJson1GetIdentityResolutionJobCommand,
} from "../protocols/Aws_restJson1";

export interface GetIdentityResolutionJobCommandInput extends GetIdentityResolutionJobRequest {}
export interface GetIdentityResolutionJobCommandOutput extends GetIdentityResolutionJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about an Identity Resolution Job in a specific domain. </p>
 *          <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use
 *             Identity Resolution to consolidate similar profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetIdentityResolutionJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetIdentityResolutionJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetIdentityResolutionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityResolutionJobCommandInput} for command's `input` shape.
 * @see {@link GetIdentityResolutionJobCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class GetIdentityResolutionJobCommand extends $Command<
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
  CustomerProfilesClientResolvedConfig
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

  constructor(readonly input: GetIdentityResolutionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityResolutionJobCommandInput, GetIdentityResolutionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityResolutionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetIdentityResolutionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityResolutionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityResolutionJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIdentityResolutionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIdentityResolutionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIdentityResolutionJobCommandOutput> {
    return deserializeAws_restJson1GetIdentityResolutionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
