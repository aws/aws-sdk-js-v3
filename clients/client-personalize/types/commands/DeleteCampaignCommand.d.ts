import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteCampaignRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCampaignCommandInput = DeleteCampaignRequest;
export declare type DeleteCampaignCommandOutput = __MetadataBearer;
export declare class DeleteCampaignCommand extends $Command<DeleteCampaignCommandInput, DeleteCampaignCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DeleteCampaignCommandInput;
    constructor(input: DeleteCampaignCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCampaignCommandInput, DeleteCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
