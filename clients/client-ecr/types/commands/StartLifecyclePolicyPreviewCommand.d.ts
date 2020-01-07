import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartLifecyclePolicyPreviewCommandInput = StartLifecyclePolicyPreviewRequest;
export declare type StartLifecyclePolicyPreviewCommandOutput = StartLifecyclePolicyPreviewResponse & __MetadataBearer;
export declare class StartLifecyclePolicyPreviewCommand extends $Command<StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput, ECRClientResolvedConfig> {
    readonly input: StartLifecyclePolicyPreviewCommandInput;
    constructor(input: StartLifecyclePolicyPreviewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput>;
    private serialize;
    private deserialize;
}
