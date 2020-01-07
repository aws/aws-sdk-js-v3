import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { VerifyRequest, VerifyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyCommandInput = VerifyRequest;
export declare type VerifyCommandOutput = VerifyResponse & __MetadataBearer;
export declare class VerifyCommand extends $Command<VerifyCommandInput, VerifyCommandOutput, KMSClientResolvedConfig> {
    readonly input: VerifyCommandInput;
    constructor(input: VerifyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyCommandInput, VerifyCommandOutput>;
    private serialize;
    private deserialize;
}
