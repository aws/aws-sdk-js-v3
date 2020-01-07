import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListCampaignsRequest, ListCampaignsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCampaignsCommandInput = ListCampaignsRequest;
export declare type ListCampaignsCommandOutput = ListCampaignsResponse & __MetadataBearer;
export declare class ListCampaignsCommand extends $Command<ListCampaignsCommandInput, ListCampaignsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListCampaignsCommandInput;
    constructor(input: ListCampaignsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCampaignsCommandInput, ListCampaignsCommandOutput>;
    private serialize;
    private deserialize;
}
