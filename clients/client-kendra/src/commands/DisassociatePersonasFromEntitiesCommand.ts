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
  DisassociatePersonasFromEntitiesRequest,
  DisassociatePersonasFromEntitiesRequestFilterSensitiveLog,
  DisassociatePersonasFromEntitiesResponse,
  DisassociatePersonasFromEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociatePersonasFromEntitiesCommand,
  serializeAws_json1_1DisassociatePersonasFromEntitiesCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociatePersonasFromEntitiesCommandInput extends DisassociatePersonasFromEntitiesRequest {}
export interface DisassociatePersonasFromEntitiesCommandOutput
  extends DisassociatePersonasFromEntitiesResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specific permissions of users or groups in your IAM Identity Center
 *             identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra
 *             experience such as a search application. For more information on creating a
 *             search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a
 *                 search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DisassociatePersonasFromEntitiesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DisassociatePersonasFromEntitiesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DisassociatePersonasFromEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePersonasFromEntitiesCommandInput} for command's `input` shape.
 * @see {@link DisassociatePersonasFromEntitiesCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class DisassociatePersonasFromEntitiesCommand extends $Command<
  DisassociatePersonasFromEntitiesCommandInput,
  DisassociatePersonasFromEntitiesCommandOutput,
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

  constructor(readonly input: DisassociatePersonasFromEntitiesCommandInput) {
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
  ): Handler<DisassociatePersonasFromEntitiesCommandInput, DisassociatePersonasFromEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociatePersonasFromEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DisassociatePersonasFromEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePersonasFromEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePersonasFromEntitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociatePersonasFromEntitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociatePersonasFromEntitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePersonasFromEntitiesCommandOutput> {
    return deserializeAws_json1_1DisassociatePersonasFromEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
