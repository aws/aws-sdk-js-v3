import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DisconnectCustomKeyStoreRequest, DisconnectCustomKeyStoreResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisconnectCustomKeyStoreCommandInput = DisconnectCustomKeyStoreRequest;
export declare type DisconnectCustomKeyStoreCommandOutput = DisconnectCustomKeyStoreResponse & __MetadataBearer;
export declare class DisconnectCustomKeyStoreCommand extends $Command<DisconnectCustomKeyStoreCommandInput, DisconnectCustomKeyStoreCommandOutput, KMSClientResolvedConfig> {
    readonly input: DisconnectCustomKeyStoreCommandInput;
    constructor(input: DisconnectCustomKeyStoreCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisconnectCustomKeyStoreCommandInput, DisconnectCustomKeyStoreCommandOutput>;
    private serialize;
    private deserialize;
}
