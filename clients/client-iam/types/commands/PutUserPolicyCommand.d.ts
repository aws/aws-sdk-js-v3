import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutUserPolicyCommandInput = PutUserPolicyRequest;
export declare type PutUserPolicyCommandOutput = __MetadataBearer;
export declare class PutUserPolicyCommand extends $Command<PutUserPolicyCommandInput, PutUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutUserPolicyCommandInput;
    constructor(input: PutUserPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutUserPolicyCommandInput, PutUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
