import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchSkillGroupsRequest, SearchSkillGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchSkillGroupsCommandInput = SearchSkillGroupsRequest;
export declare type SearchSkillGroupsCommandOutput = SearchSkillGroupsResponse & __MetadataBearer;
export declare class SearchSkillGroupsCommand extends $Command<SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchSkillGroupsCommandInput;
    constructor(input: SearchSkillGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
