// smithy-typescript generated code
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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { AssociatePersonasToEntitiesRequest, AssociatePersonasToEntitiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociatePersonasToEntitiesCommand,
  serializeAws_json1_1AssociatePersonasToEntitiesCommand,
} from "../protocols/Aws_json1_1";

export interface AssociatePersonasToEntitiesCommandInput extends AssociatePersonasToEntitiesRequest {}
export interface AssociatePersonasToEntitiesCommandOutput
  extends AssociatePersonasToEntitiesResponse,
    __MetadataBearer {}

/**
 * <p>Defines the specific permissions of users or groups in your Amazon Web Services SSO
 *             identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra
 *             experience such as a search application. For more information on creating a
 *             search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, AssociatePersonasToEntitiesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, AssociatePersonasToEntitiesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new AssociatePersonasToEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePersonasToEntitiesCommandInput} for command's `input` shape.
 * @see {@link AssociatePersonasToEntitiesCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class AssociatePersonasToEntitiesCommand extends $Command<
  AssociatePersonasToEntitiesCommandInput,
  AssociatePersonasToEntitiesCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociatePersonasToEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociatePersonasToEntitiesCommandInput, AssociatePersonasToEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "AssociatePersonasToEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePersonasToEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePersonasToEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociatePersonasToEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociatePersonasToEntitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePersonasToEntitiesCommandOutput> {
    return deserializeAws_json1_1AssociatePersonasToEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
