import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLifecyclePolicyCommandInput = GetLifecyclePolicyRequest;
export declare type GetLifecyclePolicyCommandOutput = GetLifecyclePolicyResponse & __MetadataBearer;
export declare class GetLifecyclePolicyCommand extends $Command<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetLifecyclePolicyCommandInput;
    constructor(input: GetLifecyclePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
