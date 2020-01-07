import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DisableKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableKeyCommandInput = DisableKeyRequest;
export declare type DisableKeyCommandOutput = __MetadataBearer;
export declare class DisableKeyCommand extends $Command<DisableKeyCommandInput, DisableKeyCommandOutput, KMSClientResolvedConfig> {
    readonly input: DisableKeyCommandInput;
    constructor(input: DisableKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableKeyCommandInput, DisableKeyCommandOutput>;
    private serialize;
    private deserialize;
}
