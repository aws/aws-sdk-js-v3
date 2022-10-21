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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  AssociateEntitiesToExperienceRequest,
  AssociateEntitiesToExperienceRequestFilterSensitiveLog,
  AssociateEntitiesToExperienceResponse,
  AssociateEntitiesToExperienceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateEntitiesToExperienceCommand,
  serializeAws_json1_1AssociateEntitiesToExperienceCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateEntitiesToExperienceCommandInput extends AssociateEntitiesToExperienceRequest {}
export interface AssociateEntitiesToExperienceCommandOutput
  extends AssociateEntitiesToExperienceResponse,
    __MetadataBearer {}

/**
 * <p>Grants users or groups in your IAM Identity Center identity source access
 *             to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a
 *             search application. For more information on creating a search application
 *             experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, AssociateEntitiesToExperienceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, AssociateEntitiesToExperienceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new AssociateEntitiesToExperienceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEntitiesToExperienceCommandInput} for command's `input` shape.
 * @see {@link AssociateEntitiesToExperienceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class AssociateEntitiesToExperienceCommand extends $Command<
  AssociateEntitiesToExperienceCommandInput,
  AssociateEntitiesToExperienceCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: AssociateEntitiesToExperienceCommandInput) {
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
  ): Handler<AssociateEntitiesToExperienceCommandInput, AssociateEntitiesToExperienceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateEntitiesToExperienceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "AssociateEntitiesToExperienceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEntitiesToExperienceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateEntitiesToExperienceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateEntitiesToExperienceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateEntitiesToExperienceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateEntitiesToExperienceCommandOutput> {
    return deserializeAws_json1_1AssociateEntitiesToExperienceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
