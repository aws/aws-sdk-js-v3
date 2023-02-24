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
  UpdateCampaignRequest,
  UpdateCampaignRequestFilterSensitiveLog,
  UpdateCampaignResponse,
  UpdateCampaignResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1UpdateCampaignCommand,
  serializeAws_json1_1UpdateCampaignCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCampaignCommandInput extends UpdateCampaignRequest {}
export interface UpdateCampaignCommandOutput extends UpdateCampaignResponse, __MetadataBearer {}

/**
 * <p>Updates a campaign by either deploying a new solution or changing the value of the
 *       campaign's <code>minProvisionedTPS</code> parameter.</p>
 *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
 *       Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p>
 *
 *          <note>
 *             <p>You can still get recommendations from a campaign while an update is in progress.
 *       The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>.
 *     </p>
 *          </note>
 *
 *          <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCampaignCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class UpdateCampaignCommand extends $Command<
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput,
  PersonalizeClientResolvedConfig
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

  constructor(readonly input: UpdateCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCampaignCommandInput, UpdateCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCampaignCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "UpdateCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCampaignRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCampaignResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCampaignCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCampaignCommandOutput> {
    return deserializeAws_json1_1UpdateCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
