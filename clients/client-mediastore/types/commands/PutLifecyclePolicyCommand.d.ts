import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutLifecyclePolicyInput, PutLifecyclePolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutLifecyclePolicyCommandInput = PutLifecyclePolicyInput;
export declare type PutLifecyclePolicyCommandOutput = PutLifecyclePolicyOutput & __MetadataBearer;
export declare class PutLifecyclePolicyCommand extends $Command<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: PutLifecyclePolicyCommandInput;
    constructor(input: PutLifecyclePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
