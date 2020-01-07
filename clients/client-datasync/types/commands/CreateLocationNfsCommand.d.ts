import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationNfsRequest, CreateLocationNfsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLocationNfsCommandInput = CreateLocationNfsRequest;
export declare type CreateLocationNfsCommandOutput = CreateLocationNfsResponse & __MetadataBearer;
export declare class CreateLocationNfsCommand extends $Command<CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationNfsCommandInput;
    constructor(input: CreateLocationNfsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput>;
    private serialize;
    private deserialize;
}
