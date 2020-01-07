import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CancelDataRepositoryTaskRequest, CancelDataRepositoryTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelDataRepositoryTaskCommandInput = CancelDataRepositoryTaskRequest;
export declare type CancelDataRepositoryTaskCommandOutput = CancelDataRepositoryTaskResponse & __MetadataBearer;
export declare class CancelDataRepositoryTaskCommand extends $Command<CancelDataRepositoryTaskCommandInput, CancelDataRepositoryTaskCommandOutput, FSxClientResolvedConfig> {
    readonly input: CancelDataRepositoryTaskCommandInput;
    constructor(input: CancelDataRepositoryTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelDataRepositoryTaskCommandInput, CancelDataRepositoryTaskCommandOutput>;
    private serialize;
    private deserialize;
}
