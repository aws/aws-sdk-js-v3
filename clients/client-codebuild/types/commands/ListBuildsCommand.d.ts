import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildsInput, ListBuildsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBuildsCommandInput = ListBuildsInput;
export declare type ListBuildsCommandOutput = ListBuildsOutput & __MetadataBearer;
export declare class ListBuildsCommand extends $Command<ListBuildsCommandInput, ListBuildsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListBuildsCommandInput;
    constructor(input: ListBuildsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuildsCommandInput, ListBuildsCommandOutput>;
    private serialize;
    private deserialize;
}
