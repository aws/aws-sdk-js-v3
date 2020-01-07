import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationS3Request, CreateLocationS3Response } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLocationS3CommandInput = CreateLocationS3Request;
export declare type CreateLocationS3CommandOutput = CreateLocationS3Response & __MetadataBearer;
export declare class CreateLocationS3Command extends $Command<CreateLocationS3CommandInput, CreateLocationS3CommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationS3CommandInput;
    constructor(input: CreateLocationS3CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationS3CommandInput, CreateLocationS3CommandOutput>;
    private serialize;
    private deserialize;
}
