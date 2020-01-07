import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddCacheInput, AddCacheOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddCacheCommandInput = AddCacheInput;
export declare type AddCacheCommandOutput = AddCacheOutput & __MetadataBearer;
export declare class AddCacheCommand extends $Command<AddCacheCommandInput, AddCacheCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AddCacheCommandInput;
    constructor(input: AddCacheCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddCacheCommandInput, AddCacheCommandOutput>;
    private serialize;
    private deserialize;
}
