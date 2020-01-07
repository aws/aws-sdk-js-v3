import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { PutIdentityPolicyRequest, PutIdentityPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutIdentityPolicyCommandInput = PutIdentityPolicyRequest;
export declare type PutIdentityPolicyCommandOutput = PutIdentityPolicyResponse & __MetadataBearer;
export declare class PutIdentityPolicyCommand extends $Command<PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput, SESClientResolvedConfig> {
    readonly input: PutIdentityPolicyCommandInput;
    constructor(input: PutIdentityPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
