import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreCategoriesRequest, ListSkillsStoreCategoriesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSkillsStoreCategoriesCommandInput = ListSkillsStoreCategoriesRequest;
export declare type ListSkillsStoreCategoriesCommandOutput = ListSkillsStoreCategoriesResponse & __MetadataBearer;
export declare class ListSkillsStoreCategoriesCommand extends $Command<ListSkillsStoreCategoriesCommandInput, ListSkillsStoreCategoriesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListSkillsStoreCategoriesCommandInput;
    constructor(input: ListSkillsStoreCategoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSkillsStoreCategoriesCommandInput, ListSkillsStoreCategoriesCommandOutput>;
    private serialize;
    private deserialize;
}
