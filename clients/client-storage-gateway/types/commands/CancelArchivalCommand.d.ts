import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CancelArchivalInput, CancelArchivalOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelArchivalCommandInput = CancelArchivalInput;
export declare type CancelArchivalCommandOutput = CancelArchivalOutput & __MetadataBearer;
export declare class CancelArchivalCommand extends $Command<CancelArchivalCommandInput, CancelArchivalCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CancelArchivalCommandInput;
    constructor(input: CancelArchivalCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelArchivalCommandInput, CancelArchivalCommandOutput>;
    private serialize;
    private deserialize;
}
