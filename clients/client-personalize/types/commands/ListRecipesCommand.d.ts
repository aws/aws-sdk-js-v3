import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListRecipesRequest, ListRecipesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRecipesCommandInput = ListRecipesRequest;
export declare type ListRecipesCommandOutput = ListRecipesResponse & __MetadataBearer;
export declare class ListRecipesCommand extends $Command<ListRecipesCommandInput, ListRecipesCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListRecipesCommandInput;
    constructor(input: ListRecipesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRecipesCommandInput, ListRecipesCommandOutput>;
    private serialize;
    private deserialize;
}
