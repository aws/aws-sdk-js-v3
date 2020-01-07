import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCampaignCommandInput = CreateCampaignRequest;
export declare type CreateCampaignCommandOutput = CreateCampaignResponse & __MetadataBearer;
export declare class CreateCampaignCommand extends $Command<CreateCampaignCommandInput, CreateCampaignCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateCampaignCommandInput;
    constructor(input: CreateCampaignCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCampaignCommandInput, CreateCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
