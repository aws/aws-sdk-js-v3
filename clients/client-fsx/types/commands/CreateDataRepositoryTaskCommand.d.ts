import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateDataRepositoryTaskRequest, CreateDataRepositoryTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDataRepositoryTaskCommandInput = CreateDataRepositoryTaskRequest;
export declare type CreateDataRepositoryTaskCommandOutput = CreateDataRepositoryTaskResponse & __MetadataBearer;
export declare class CreateDataRepositoryTaskCommand extends $Command<CreateDataRepositoryTaskCommandInput, CreateDataRepositoryTaskCommandOutput, FSxClientResolvedConfig> {
    readonly input: CreateDataRepositoryTaskCommandInput;
    constructor(input: CreateDataRepositoryTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataRepositoryTaskCommandInput, CreateDataRepositoryTaskCommandOutput>;
    private serialize;
    private deserialize;
}
