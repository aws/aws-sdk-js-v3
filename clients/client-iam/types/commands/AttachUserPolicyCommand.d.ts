import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachUserPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachUserPolicyCommandInput = AttachUserPolicyRequest;
export declare type AttachUserPolicyCommandOutput = __MetadataBearer;
export declare class AttachUserPolicyCommand extends $Command<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: AttachUserPolicyCommandInput;
    constructor(input: AttachUserPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
