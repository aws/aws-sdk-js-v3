import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ReEncryptRequest, ReEncryptResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReEncryptCommandInput = ReEncryptRequest;
export declare type ReEncryptCommandOutput = ReEncryptResponse & __MetadataBearer;
export declare class ReEncryptCommand extends $Command<ReEncryptCommandInput, ReEncryptCommandOutput, KMSClientResolvedConfig> {
    readonly input: ReEncryptCommandInput;
    constructor(input: ReEncryptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReEncryptCommandInput, ReEncryptCommandOutput>;
    private serialize;
    private deserialize;
}
