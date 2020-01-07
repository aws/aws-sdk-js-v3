import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListProjectsInput, ListProjectsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProjectsCommandInput = ListProjectsInput;
export declare type ListProjectsCommandOutput = ListProjectsOutput & __MetadataBearer;
export declare class ListProjectsCommand extends $Command<ListProjectsCommandInput, ListProjectsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListProjectsCommandInput;
    constructor(input: ListProjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProjectsCommandInput, ListProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
