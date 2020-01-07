import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { EnableKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableKeyCommandInput = EnableKeyRequest;
export declare type EnableKeyCommandOutput = __MetadataBearer;
export declare class EnableKeyCommand extends $Command<EnableKeyCommandInput, EnableKeyCommandOutput, KMSClientResolvedConfig> {
    readonly input: EnableKeyCommandInput;
    constructor(input: EnableKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableKeyCommandInput, EnableKeyCommandOutput>;
    private serialize;
    private deserialize;
}
