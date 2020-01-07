import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationSmbRequest, CreateLocationSmbResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLocationSmbCommandInput = CreateLocationSmbRequest;
export declare type CreateLocationSmbCommandOutput = CreateLocationSmbResponse & __MetadataBearer;
export declare class CreateLocationSmbCommand extends $Command<CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationSmbCommandInput;
    constructor(input: CreateLocationSmbCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput>;
    private serialize;
    private deserialize;
}
