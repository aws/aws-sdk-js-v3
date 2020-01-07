import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachGroupPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachGroupPolicyCommandInput = AttachGroupPolicyRequest;
export declare type AttachGroupPolicyCommandOutput = __MetadataBearer;
export declare class AttachGroupPolicyCommand extends $Command<AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: AttachGroupPolicyCommandInput;
    constructor(input: AttachGroupPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
