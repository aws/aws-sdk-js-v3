import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListReportsInput, ListReportsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReportsCommandInput = ListReportsInput;
export declare type ListReportsCommandOutput = ListReportsOutput & __MetadataBearer;
export declare class ListReportsCommand extends $Command<ListReportsCommandInput, ListReportsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListReportsCommandInput;
    constructor(input: ListReportsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReportsCommandInput, ListReportsCommandOutput>;
    private serialize;
    private deserialize;
}
