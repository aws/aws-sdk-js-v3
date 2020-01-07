import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSolutionVersionsRequest, ListSolutionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSolutionVersionsCommandInput = ListSolutionVersionsRequest;
export declare type ListSolutionVersionsCommandOutput = ListSolutionVersionsResponse & __MetadataBearer;
export declare class ListSolutionVersionsCommand extends $Command<ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListSolutionVersionsCommandInput;
    constructor(input: ListSolutionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
