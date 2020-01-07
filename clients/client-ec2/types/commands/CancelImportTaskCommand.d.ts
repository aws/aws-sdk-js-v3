import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelImportTaskRequest, CancelImportTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelImportTaskCommandInput = CancelImportTaskRequest;
export declare type CancelImportTaskCommandOutput = CancelImportTaskResult & __MetadataBearer;
export declare class CancelImportTaskCommand extends $Command<CancelImportTaskCommandInput, CancelImportTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelImportTaskCommandInput;
    constructor(input: CancelImportTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelImportTaskCommandInput, CancelImportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
