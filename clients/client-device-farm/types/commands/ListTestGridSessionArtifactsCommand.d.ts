import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridSessionArtifactsRequest, ListTestGridSessionArtifactsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTestGridSessionArtifactsCommandInput = ListTestGridSessionArtifactsRequest;
export declare type ListTestGridSessionArtifactsCommandOutput = ListTestGridSessionArtifactsResult & __MetadataBearer;
export declare class ListTestGridSessionArtifactsCommand extends $Command<ListTestGridSessionArtifactsCommandInput, ListTestGridSessionArtifactsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestGridSessionArtifactsCommandInput;
    constructor(input: ListTestGridSessionArtifactsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestGridSessionArtifactsCommandInput, ListTestGridSessionArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
