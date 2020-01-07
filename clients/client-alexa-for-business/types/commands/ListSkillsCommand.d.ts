import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsRequest, ListSkillsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSkillsCommandInput = ListSkillsRequest;
export declare type ListSkillsCommandOutput = ListSkillsResponse & __MetadataBearer;
export declare class ListSkillsCommand extends $Command<ListSkillsCommandInput, ListSkillsCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListSkillsCommandInput;
    constructor(input: ListSkillsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSkillsCommandInput, ListSkillsCommandOutput>;
    private serialize;
    private deserialize;
}
