import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateInstanceExportTaskRequest, CreateInstanceExportTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstanceExportTaskCommandInput = CreateInstanceExportTaskRequest;
export declare type CreateInstanceExportTaskCommandOutput = CreateInstanceExportTaskResult & __MetadataBearer;
export declare class CreateInstanceExportTaskCommand extends $Command<CreateInstanceExportTaskCommandInput, CreateInstanceExportTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateInstanceExportTaskCommandInput;
    constructor(input: CreateInstanceExportTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceExportTaskCommandInput, CreateInstanceExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
