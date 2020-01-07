import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutLifecyclePolicyRequest, PutLifecyclePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutLifecyclePolicyCommandInput = PutLifecyclePolicyRequest;
export declare type PutLifecyclePolicyCommandOutput = PutLifecyclePolicyResponse & __MetadataBearer;
export declare class PutLifecyclePolicyCommand extends $Command<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutLifecyclePolicyCommandInput;
    constructor(input: PutLifecyclePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
