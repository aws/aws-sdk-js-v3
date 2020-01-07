import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListArtifactsRequest, ListArtifactsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListArtifactsCommandInput = ListArtifactsRequest;
export declare type ListArtifactsCommandOutput = ListArtifactsResult & __MetadataBearer;
export declare class ListArtifactsCommand extends $Command<ListArtifactsCommandInput, ListArtifactsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListArtifactsCommandInput;
    constructor(input: ListArtifactsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListArtifactsCommandInput, ListArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
