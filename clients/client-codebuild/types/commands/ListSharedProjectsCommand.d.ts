import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSharedProjectsCommandInput = ListSharedProjectsInput;
export declare type ListSharedProjectsCommandOutput = ListSharedProjectsOutput & __MetadataBearer;
export declare class ListSharedProjectsCommand extends $Command<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListSharedProjectsCommandInput;
    constructor(input: ListSharedProjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
