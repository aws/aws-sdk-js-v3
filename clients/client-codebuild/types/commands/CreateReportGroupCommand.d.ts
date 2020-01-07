import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateReportGroupInput, CreateReportGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReportGroupCommandInput = CreateReportGroupInput;
export declare type CreateReportGroupCommandOutput = CreateReportGroupOutput & __MetadataBearer;
export declare class CreateReportGroupCommand extends $Command<CreateReportGroupCommandInput, CreateReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: CreateReportGroupCommandInput;
    constructor(input: CreateReportGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReportGroupCommandInput, CreateReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
