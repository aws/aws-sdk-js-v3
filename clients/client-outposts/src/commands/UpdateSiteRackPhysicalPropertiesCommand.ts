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

import {
  UpdateSiteRackPhysicalPropertiesInput,
  UpdateSiteRackPhysicalPropertiesInputFilterSensitiveLog,
  UpdateSiteRackPhysicalPropertiesOutput,
  UpdateSiteRackPhysicalPropertiesOutputFilterSensitiveLog,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand,
  serializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSiteRackPhysicalPropertiesCommandInput extends UpdateSiteRackPhysicalPropertiesInput {}
export interface UpdateSiteRackPhysicalPropertiesCommandOutput
  extends UpdateSiteRackPhysicalPropertiesOutput,
    __MetadataBearer {}

/**
 * <p>Update the physical and logistical details for a rack at a site. For more information
 *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
 *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
 *          </p>
 *          <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for
 *       the order to complete or cancel the order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateSiteRackPhysicalPropertiesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateSiteRackPhysicalPropertiesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new UpdateSiteRackPhysicalPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSiteRackPhysicalPropertiesCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteRackPhysicalPropertiesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class UpdateSiteRackPhysicalPropertiesCommand extends $Command<
  UpdateSiteRackPhysicalPropertiesCommandInput,
  UpdateSiteRackPhysicalPropertiesCommandOutput,
  OutpostsClientResolvedConfig
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

  constructor(readonly input: UpdateSiteRackPhysicalPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSiteRackPhysicalPropertiesCommandInput, UpdateSiteRackPhysicalPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSiteRackPhysicalPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "UpdateSiteRackPhysicalPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSiteRackPhysicalPropertiesInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSiteRackPhysicalPropertiesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSiteRackPhysicalPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> {
    return deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
