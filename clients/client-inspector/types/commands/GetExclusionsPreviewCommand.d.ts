import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetExclusionsPreviewRequest, GetExclusionsPreviewResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetExclusionsPreviewCommandInput = GetExclusionsPreviewRequest;
export declare type GetExclusionsPreviewCommandOutput = GetExclusionsPreviewResponse & __MetadataBearer;
export declare class GetExclusionsPreviewCommand extends $Command<GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput, InspectorClientResolvedConfig> {
    readonly input: GetExclusionsPreviewCommandInput;
    constructor(input: GetExclusionsPreviewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput>;
    private serialize;
    private deserialize;
}
