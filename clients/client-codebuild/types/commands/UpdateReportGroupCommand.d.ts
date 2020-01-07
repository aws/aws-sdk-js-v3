import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateReportGroupInput, UpdateReportGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateReportGroupCommandInput = UpdateReportGroupInput;
export declare type UpdateReportGroupCommandOutput = UpdateReportGroupOutput & __MetadataBearer;
export declare class UpdateReportGroupCommand extends $Command<UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: UpdateReportGroupCommandInput;
    constructor(input: UpdateReportGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
