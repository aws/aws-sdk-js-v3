import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLifecyclePolicyCommandInput = DeleteLifecyclePolicyInput;
export declare type DeleteLifecyclePolicyCommandOutput = DeleteLifecyclePolicyOutput & __MetadataBearer;
export declare class DeleteLifecyclePolicyCommand extends $Command<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteLifecyclePolicyCommandInput;
    constructor(input: DeleteLifecyclePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
