import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCampaignCommandInput = UpdateCampaignRequest;
export declare type UpdateCampaignCommandOutput = UpdateCampaignResponse & __MetadataBearer;
export declare class UpdateCampaignCommand extends $Command<UpdateCampaignCommandInput, UpdateCampaignCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: UpdateCampaignCommandInput;
    constructor(input: UpdateCampaignCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCampaignCommandInput, UpdateCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
