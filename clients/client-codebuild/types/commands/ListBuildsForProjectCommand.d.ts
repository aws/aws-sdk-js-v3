import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildsForProjectInput, ListBuildsForProjectOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBuildsForProjectCommandInput = ListBuildsForProjectInput;
export declare type ListBuildsForProjectCommandOutput = ListBuildsForProjectOutput & __MetadataBearer;
export declare class ListBuildsForProjectCommand extends $Command<ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListBuildsForProjectCommandInput;
    constructor(input: ListBuildsForProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput>;
    private serialize;
    private deserialize;
}
