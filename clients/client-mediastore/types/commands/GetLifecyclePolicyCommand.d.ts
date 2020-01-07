import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetLifecyclePolicyInput, GetLifecyclePolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLifecyclePolicyCommandInput = GetLifecyclePolicyInput;
export declare type GetLifecyclePolicyCommandOutput = GetLifecyclePolicyOutput & __MetadataBearer;
export declare class GetLifecyclePolicyCommand extends $Command<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: GetLifecyclePolicyCommandInput;
    constructor(input: GetLifecyclePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
