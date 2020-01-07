import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { PutKeyPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutKeyPolicyCommandInput = PutKeyPolicyRequest;
export declare type PutKeyPolicyCommandOutput = __MetadataBearer;
export declare class PutKeyPolicyCommand extends $Command<PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput, KMSClientResolvedConfig> {
    readonly input: PutKeyPolicyCommandInput;
    constructor(input: PutKeyPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
