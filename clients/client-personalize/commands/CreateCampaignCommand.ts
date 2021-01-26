import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCampaignCommand,
  serializeAws_json1_1CreateCampaignCommand,
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

export type CreateCampaignCommandInput = CreateCampaignRequest;
export type CreateCampaignCommandOutput = CreateCampaignResponse & __MetadataBearer;

/**
 * <p>Creates a campaign by deploying a solution version. When a client calls the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       and
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a>
 *       APIs, a campaign is specified in the request.</p>
 *
 *          <p>
 *             <b>Minimum Provisioned TPS and Auto-Scaling</b>
 *          </p>
 *          <p>A transaction is a single <code>GetRecommendations</code> or
 *        <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput
 *        and unit of billing for Amazon Personalize. The minimum provisioned TPS
 *        (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by
 *        Amazon Personalize, and thus, the minimum billing charge. If your TPS increases beyond
 *        <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
 *        but never below <code>minProvisionedTPS</code>, to maintain a 70% utilization.
 *        There's a short time delay while the capacity is increased that might cause loss of
 *        transactions. It's recommended to start with a low <code>minProvisionedTPS</code>, track
 *        your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code>
 *        as necessary.</p>
 *
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A campaign can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the campaign status, call <a>DescribeCampaign</a>.</p>
 *          <note>
 *             <p>Wait until the <code>status</code> of the campaign
 *         is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListCampaigns</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCampaign</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCampaign</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCampaign</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateCampaignCommand extends $Command<
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCampaignCommandInput) {
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
  ): Handler<CreateCampaignCommandInput, CreateCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCampaignRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCampaignResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCampaignCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCampaignCommandOutput> {
    return deserializeAws_json1_1CreateCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
