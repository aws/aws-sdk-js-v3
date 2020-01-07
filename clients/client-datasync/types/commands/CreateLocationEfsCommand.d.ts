import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationEfsRequest, CreateLocationEfsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLocationEfsCommandInput = CreateLocationEfsRequest;
export declare type CreateLocationEfsCommandOutput = CreateLocationEfsResponse & __MetadataBearer;
export declare class CreateLocationEfsCommand extends $Command<CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationEfsCommandInput;
    constructor(input: CreateLocationEfsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput>;
    private serialize;
    private deserialize;
}
