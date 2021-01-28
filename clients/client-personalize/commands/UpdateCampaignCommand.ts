import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCampaignCommand,
  serializeAws_json1_1UpdateCampaignCommand,
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

export type UpdateCampaignCommandInput = UpdateCampaignRequest;
export type UpdateCampaignCommandOutput = UpdateCampaignResponse & __MetadataBearer;

/**
 * <p>Updates a campaign by either deploying a new solution or changing the value of the
 *       campaign's <code>minProvisionedTPS</code> parameter.</p>
 *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
 *       Check the campaign status using the <a>DescribeCampaign</a> API.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the
 *         updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
 *          </note>
 *          <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export class UpdateCampaignCommand extends $Command<
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "UpdateCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCampaignRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCampaignResponse.filterSensitiveLog,
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
