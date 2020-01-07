import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLifecyclePolicyCommandInput = DeleteLifecyclePolicyRequest;
export declare type DeleteLifecyclePolicyCommandOutput = DeleteLifecyclePolicyResponse & __MetadataBearer;
export declare class DeleteLifecyclePolicyCommand extends $Command<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: DeleteLifecyclePolicyCommandInput;
    constructor(input: DeleteLifecyclePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
