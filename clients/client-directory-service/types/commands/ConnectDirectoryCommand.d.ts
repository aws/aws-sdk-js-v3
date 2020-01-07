import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ConnectDirectoryRequest, ConnectDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConnectDirectoryCommandInput = ConnectDirectoryRequest;
export declare type ConnectDirectoryCommandOutput = ConnectDirectoryResult & __MetadataBearer;
export declare class ConnectDirectoryCommand extends $Command<ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ConnectDirectoryCommandInput;
    constructor(input: ConnectDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
