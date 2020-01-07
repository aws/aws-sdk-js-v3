import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListReportGroupsInput, ListReportGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReportGroupsCommandInput = ListReportGroupsInput;
export declare type ListReportGroupsCommandOutput = ListReportGroupsOutput & __MetadataBearer;
export declare class ListReportGroupsCommand extends $Command<ListReportGroupsCommandInput, ListReportGroupsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListReportGroupsCommandInput;
    constructor(input: ListReportGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReportGroupsCommandInput, ListReportGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
