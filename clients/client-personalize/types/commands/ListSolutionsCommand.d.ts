import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSolutionsRequest, ListSolutionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSolutionsCommandInput = ListSolutionsRequest;
export declare type ListSolutionsCommandOutput = ListSolutionsResponse & __MetadataBearer;
export declare class ListSolutionsCommand extends $Command<ListSolutionsCommandInput, ListSolutionsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListSolutionsCommandInput;
    constructor(input: ListSolutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSolutionsCommandInput, ListSolutionsCommandOutput>;
    private serialize;
    private deserialize;
}
