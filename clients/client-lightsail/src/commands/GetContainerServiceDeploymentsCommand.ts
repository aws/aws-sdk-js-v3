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
  GetContainerServiceDeploymentsRequest,
  GetContainerServiceDeploymentsRequestFilterSensitiveLog,
  GetContainerServiceDeploymentsResult,
  GetContainerServiceDeploymentsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerServiceDeploymentsCommand,
  serializeAws_json1_1GetContainerServiceDeploymentsCommand,
} from "../protocols/Aws_json1_1";

export interface GetContainerServiceDeploymentsCommandInput extends GetContainerServiceDeploymentsRequest {}
export interface GetContainerServiceDeploymentsCommandOutput
  extends GetContainerServiceDeploymentsResult,
    __MetadataBearer {}

/**
 * <p>Returns the deployments for your Amazon Lightsail container service</p>
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 *          <p>The deployments are ordered by version in ascending order. The newest version is listed at
 *       the top of the response.</p>
 *          <note>
 *             <p>A set number of deployments are kept before the oldest one is replaced with the newest
 *         one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>Amazon Web Services General
 *           Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceDeploymentsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceDeploymentsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetContainerServiceDeploymentsCommand extends $Command<
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
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

  constructor(readonly input: GetContainerServiceDeploymentsCommandInput) {
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
  ): Handler<GetContainerServiceDeploymentsCommandInput, GetContainerServiceDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerServiceDeploymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServiceDeploymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerServiceDeploymentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContainerServiceDeploymentsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetContainerServiceDeploymentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerServiceDeploymentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContainerServiceDeploymentsCommandOutput> {
    return deserializeAws_json1_1GetContainerServiceDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
