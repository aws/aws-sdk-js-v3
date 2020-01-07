import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetKeyPolicyRequest, GetKeyPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetKeyPolicyCommandInput = GetKeyPolicyRequest;
export declare type GetKeyPolicyCommandOutput = GetKeyPolicyResponse & __MetadataBearer;
export declare class GetKeyPolicyCommand extends $Command<GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput, KMSClientResolvedConfig> {
    readonly input: GetKeyPolicyCommandInput;
    constructor(input: GetKeyPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
