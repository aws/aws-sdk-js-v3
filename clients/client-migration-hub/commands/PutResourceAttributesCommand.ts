import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { PutResourceAttributesRequest, PutResourceAttributesResult } from "../models/models_0";
import {
  deserializeAws_json1_1PutResourceAttributesCommand,
  serializeAws_json1_1PutResourceAttributesCommand,
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

export type PutResourceAttributesCommandInput = PutResourceAttributesRequest;
export type PutResourceAttributesCommandOutput = PutResourceAttributesResult & __MetadataBearer;

/**
 * <p>Provides identifying details of the resource being migrated so that it can be associated
 *          in the Application Discovery Service repository. This association occurs asynchronously
 *          after <code>PutResourceAttributes</code> returns.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>Keep in mind that subsequent calls to PutResourceAttributes will override
 *                   previously stored attributes. For example, if it is first called with a MAC
 *                   address, but later, it is desired to <i>add</i> an IP address, it
 *                   will then be required to call it with <i>both</i> the IP and MAC
 *                   addresses to prevent overriding the MAC address.</p>
 *                </li>
 *                <li>
 *                   <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList">
 *                         <code>ResourceAttributeList</code>
 *                      </a> parameter when specifying any
 *                   "VM" related value.</p>
 *                </li>
 *             </ul>
 *          </important>
 *
 *          <note>
 *             <p>Because this is an asynchronous call, it will always return 200, whether an
 *             association occurs or not. To confirm if an association was found based on the provided
 *             details, call <code>ListDiscoveredResources</code>.</p>
 *          </note>
 */
export class PutResourceAttributesCommand extends $Command<
  PutResourceAttributesCommandInput,
  PutResourceAttributesCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutResourceAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "PutResourceAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutResourceAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutResourceAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutResourceAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutResourceAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourceAttributesCommandOutput> {
    return deserializeAws_json1_1PutResourceAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
