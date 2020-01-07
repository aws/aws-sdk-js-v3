import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListReportsForReportGroupInput, ListReportsForReportGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReportsForReportGroupCommandInput = ListReportsForReportGroupInput;
export declare type ListReportsForReportGroupCommandOutput = ListReportsForReportGroupOutput & __MetadataBearer;
export declare class ListReportsForReportGroupCommand extends $Command<ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListReportsForReportGroupCommandInput;
    constructor(input: ListReportsForReportGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
