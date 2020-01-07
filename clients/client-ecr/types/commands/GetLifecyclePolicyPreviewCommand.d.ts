import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetLifecyclePolicyPreviewRequest, GetLifecyclePolicyPreviewResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLifecyclePolicyPreviewCommandInput = GetLifecyclePolicyPreviewRequest;
export declare type GetLifecyclePolicyPreviewCommandOutput = GetLifecyclePolicyPreviewResponse & __MetadataBearer;
export declare class GetLifecyclePolicyPreviewCommand extends $Command<GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetLifecyclePolicyPreviewCommandInput;
    constructor(input: GetLifecyclePolicyPreviewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput>;
    private serialize;
    private deserialize;
}
