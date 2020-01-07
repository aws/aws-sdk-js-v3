import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreSkillsByCategoryRequest, ListSkillsStoreSkillsByCategoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSkillsStoreSkillsByCategoryCommandInput = ListSkillsStoreSkillsByCategoryRequest;
export declare type ListSkillsStoreSkillsByCategoryCommandOutput = ListSkillsStoreSkillsByCategoryResponse & __MetadataBearer;
export declare class ListSkillsStoreSkillsByCategoryCommand extends $Command<ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListSkillsStoreSkillsByCategoryCommandInput;
    constructor(input: ListSkillsStoreSkillsByCategoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput>;
    private serialize;
    private deserialize;
}
