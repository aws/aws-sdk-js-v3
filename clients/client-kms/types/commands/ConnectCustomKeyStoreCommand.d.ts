import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ConnectCustomKeyStoreRequest, ConnectCustomKeyStoreResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConnectCustomKeyStoreCommandInput = ConnectCustomKeyStoreRequest;
export declare type ConnectCustomKeyStoreCommandOutput = ConnectCustomKeyStoreResponse & __MetadataBearer;
export declare class ConnectCustomKeyStoreCommand extends $Command<ConnectCustomKeyStoreCommandInput, ConnectCustomKeyStoreCommandOutput, KMSClientResolvedConfig> {
    readonly input: ConnectCustomKeyStoreCommandInput;
    constructor(input: ConnectCustomKeyStoreCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConnectCustomKeyStoreCommandInput, ConnectCustomKeyStoreCommandOutput>;
    private serialize;
    private deserialize;
}
