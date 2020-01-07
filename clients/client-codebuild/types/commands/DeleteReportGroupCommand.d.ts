import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteReportGroupInput, DeleteReportGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReportGroupCommandInput = DeleteReportGroupInput;
export declare type DeleteReportGroupCommandOutput = DeleteReportGroupOutput & __MetadataBearer;
export declare class DeleteReportGroupCommand extends $Command<DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteReportGroupCommandInput;
    constructor(input: DeleteReportGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
