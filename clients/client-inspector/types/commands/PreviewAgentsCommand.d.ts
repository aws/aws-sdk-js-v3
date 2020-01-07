import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { PreviewAgentsRequest, PreviewAgentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PreviewAgentsCommandInput = PreviewAgentsRequest;
export declare type PreviewAgentsCommandOutput = PreviewAgentsResponse & __MetadataBearer;
export declare class PreviewAgentsCommand extends $Command<PreviewAgentsCommandInput, PreviewAgentsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: PreviewAgentsCommandInput;
    constructor(input: PreviewAgentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PreviewAgentsCommandInput, PreviewAgentsCommandOutput>;
    private serialize;
    private deserialize;
}
