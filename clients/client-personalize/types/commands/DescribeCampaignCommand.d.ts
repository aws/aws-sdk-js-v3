import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeCampaignRequest, DescribeCampaignResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCampaignCommandInput = DescribeCampaignRequest;
export declare type DescribeCampaignCommandOutput = DescribeCampaignResponse & __MetadataBearer;
export declare class DescribeCampaignCommand extends $Command<DescribeCampaignCommandInput, DescribeCampaignCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeCampaignCommandInput;
    constructor(input: DescribeCampaignCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCampaignCommandInput, DescribeCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
