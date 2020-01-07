import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutGroupPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutGroupPolicyCommandInput = PutGroupPolicyRequest;
export declare type PutGroupPolicyCommandOutput = __MetadataBearer;
export declare class PutGroupPolicyCommand extends $Command<PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutGroupPolicyCommandInput;
    constructor(input: PutGroupPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
