import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListLocalDisksInput, ListLocalDisksOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLocalDisksCommandInput = ListLocalDisksInput;
export declare type ListLocalDisksCommandOutput = ListLocalDisksOutput & __MetadataBearer;
export declare class ListLocalDisksCommand extends $Command<ListLocalDisksCommandInput, ListLocalDisksCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListLocalDisksCommandInput;
    constructor(input: ListLocalDisksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLocalDisksCommandInput, ListLocalDisksCommandOutput>;
    private serialize;
    private deserialize;
}
