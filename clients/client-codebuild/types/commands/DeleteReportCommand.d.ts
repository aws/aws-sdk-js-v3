import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteReportInput, DeleteReportOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReportCommandInput = DeleteReportInput;
export declare type DeleteReportCommandOutput = DeleteReportOutput & __MetadataBearer;
export declare class DeleteReportCommand extends $Command<DeleteReportCommandInput, DeleteReportCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteReportCommandInput;
    constructor(input: DeleteReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReportCommandInput, DeleteReportCommandOutput>;
    private serialize;
    private deserialize;
}
