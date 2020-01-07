import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSharedReportGroupsInput, ListSharedReportGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSharedReportGroupsCommandInput = ListSharedReportGroupsInput;
export declare type ListSharedReportGroupsCommandOutput = ListSharedReportGroupsOutput & __MetadataBearer;
export declare class ListSharedReportGroupsCommand extends $Command<ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListSharedReportGroupsCommandInput;
    constructor(input: ListSharedReportGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
