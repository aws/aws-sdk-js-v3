import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServiceDeploymentsRequest, GetContainerServiceDeploymentsResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerServiceDeploymentsCommand,
  serializeAws_json1_1GetContainerServiceDeploymentsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetContainerServiceDeploymentsCommandInput = GetContainerServiceDeploymentsRequest;
export type GetContainerServiceDeploymentsCommandOutput = GetContainerServiceDeploymentsResult & __MetadataBearer;

/**
 * <p>Returns the deployments for your Amazon Lightsail container service</p>
 *
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 *
 *          <p>The deployments are ordered by version in ascending order. The newest version is listed at
 *       the top of the response.</p>
 *
 *          <note>
 *             <p>A set number of deployments are kept before the oldest one is replaced with the newest
 *         one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 *          </note>
 */
export class GetContainerServiceDeploymentsCommand extends $Command<
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServiceDeploymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerServiceDeploymentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerServiceDeploymentsResult.filterSensitiveLog,
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
